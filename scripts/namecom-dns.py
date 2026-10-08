#!/usr/bin/env python3
"""Apunta el DNS de e-pac.ai (Name.com) a GitHub Pages.

Lee las credenciales de NAMECOM_USERNAME y NAMECOM_TOKEN.
Por defecto solo muestra el plan; con --apply hace los cambios.
"""
import base64, json, os, sys, urllib.request, urllib.error

DOMAIN = "e-pac.ai"
API = f"https://api.name.com/v4/domains/{DOMAIN}"
GITHUB_A = ["185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153"]
WWW_TARGET = "epac-hub.github.io"
APPLY = "--apply" in sys.argv

user, token = os.environ.get("NAMECOM_USERNAME"), os.environ.get("NAMECOM_TOKEN")
if not user or not token:
    sys.exit("Faltan NAMECOM_USERNAME o NAMECOM_TOKEN en el entorno.")
AUTH = "Basic " + base64.b64encode(f"{user}:{token}".encode()).decode()


def call(method, path="", body=None):
    req = urllib.request.Request(API + path, method=method,
                                 data=json.dumps(body).encode() if body is not None else None,
                                 headers={"Authorization": AUTH, "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req) as r:
            raw = r.read()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as e:
        sys.exit(f"{method} {path or '/'} -> HTTP {e.code}: {e.read().decode()[:300]}")


records = call("GET", "/records?perPage=1000").get("records", [])
print("Registros actuales:")
for r in records:
    print(f"  #{r['id']} {r['type']:5} {r.get('host') or '@':5} -> {r['answer']}")

# Registros de la raíz y de www que chocan con GitHub Pages.
to_delete = [r for r in records
             if (r.get("host") or "") in ("", "www") and r["type"] in ("A", "AAAA", "CNAME", "ANAME", "ALIAS")
             and not (r["type"] == "A" and (r.get("host") or "") == "" and r["answer"] in GITHUB_A)
             and not (r["type"] == "CNAME" and r.get("host") == "www" and r["answer"].rstrip(".") == WWW_TARGET)]
have = {(r["type"], r.get("host") or "", r["answer"].rstrip(".")) for r in records}
to_create = [{"host": "", "type": "A", "answer": ip, "ttl": 300} for ip in GITHUB_A if ("A", "", ip) not in have]
if ("CNAME", "www", WWW_TARGET) not in have:
    to_create.append({"host": "www", "type": "CNAME", "answer": WWW_TARGET, "ttl": 300})

forwards = call("GET", "/url/forwarding").get("urlForwarding", [])
print("Redirecciones activas:", [f["host"] for f in forwards] or "ninguna")

print("\nPlan:")
for f in forwards:
    print(f"  borrar redirección {f['host']}")
for r in to_delete:
    print(f"  borrar #{r['id']} {r['type']} {r.get('host') or '@'} -> {r['answer']}")
for r in to_create:
    print(f"  crear {r['type']} {r['host'] or '@'} -> {r['answer']}")
if not (forwards or to_delete or to_create):
    print("  nada que cambiar")

if not APPLY:
    print("\nModo de prueba. Ejecute con --apply para aplicar.")
    sys.exit(0)

for f in forwards:
    call("DELETE", f"/url/forwarding/{f['host']}")
for r in to_delete:
    call("DELETE", f"/records/{r['id']}")
for r in to_create:
    call("POST", "/records", r)
print("\nCambios aplicados.")
