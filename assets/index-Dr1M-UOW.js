import{r as NS,a as Ye,g as ma,u as k_}from"./motion-O4yqwNt3.js";import{r as OS}from"./react-wBRNdMtK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var sd={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function PS(){if(U0)return Lo;U0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var L0;function FS(){return L0||(L0=1,sd.exports=PS()),sd.exports}var He=FS(),rd={exports:{}},No={},od={exports:{}},ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function BS(){return N0||(N0=1,(function(o){function t(O,I){var et=O.length;O.push(I);t:for(;0<et;){var mt=et-1>>>1,vt=O[mt];if(0<l(vt,I))O[mt]=I,O[et]=vt,et=mt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var I=O[0],et=O.pop();if(et!==I){O[0]=et;t:for(var mt=0,vt=O.length,St=vt>>>1;mt<St;){var Mt=2*(mt+1)-1,Gt=O[Mt],se=Mt+1,ne=O[se];if(0>l(Gt,et))se<vt&&0>l(ne,Gt)?(O[mt]=ne,O[se]=et,mt=se):(O[mt]=Gt,O[Mt]=et,mt=Mt);else if(se<vt&&0>l(ne,et))O[mt]=ne,O[se]=et,mt=se;else break t}}return I}function l(O,I){var et=O.sortIndex-I.sortIndex;return et!==0?et:O.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],S=1,v=null,g=3,E=!1,T=!1,w=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function C(O){for(var I=i(p);I!==null;){if(I.callback===null)s(p);else if(I.startTime<=O)s(p),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(p)}}function N(O){if(w=!1,C(O),!T)if(i(m)!==null)T=!0,L||(L=!0,Z());else{var I=i(p);I!==null&&j(N,I.startTime-O)}}var L=!1,z=-1,b=5,U=-1;function X(){return y?!0:!(o.unstable_now()-U<b)}function G(){if(y=!1,L){var O=o.unstable_now();U=O;var I=!0;try{t:{T=!1,w&&(w=!1,P(z),z=-1),E=!0;var et=g;try{e:{for(C(O),v=i(m);v!==null&&!(v.expirationTime>O&&X());){var mt=v.callback;if(typeof mt=="function"){v.callback=null,g=v.priorityLevel;var vt=mt(v.expirationTime<=O);if(O=o.unstable_now(),typeof vt=="function"){v.callback=vt,C(O),I=!0;break e}v===i(m)&&s(m),C(O)}else s(m);v=i(m)}if(v!==null)I=!0;else{var St=i(p);St!==null&&j(N,St.startTime-O),I=!1}}break t}finally{v=null,g=et,E=!1}I=void 0}}finally{I?Z():L=!1}}}var Z;if(typeof F=="function")Z=function(){F(G)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,ht=dt.port2;dt.port1.onmessage=G,Z=function(){ht.postMessage(null)}}else Z=function(){x(G,0)};function j(O,I){z=x(function(){O(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(O){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var et=g;g=I;try{return O()}finally{g=et}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var et=g;g=O;try{return I()}finally{g=et}},o.unstable_scheduleCallback=function(O,I,et){var mt=o.unstable_now();switch(typeof et=="object"&&et!==null?(et=et.delay,et=typeof et=="number"&&0<et?mt+et:mt):et=mt,O){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=et+vt,O={id:S++,callback:I,priorityLevel:O,startTime:et,expirationTime:vt,sortIndex:-1},et>mt?(O.sortIndex=et,t(p,O),i(m)===null&&O===i(p)&&(w?(P(z),z=-1):w=!0,j(N,et-mt))):(O.sortIndex=vt,t(m,O),T||E||(T=!0,L||(L=!0,Z()))),O},o.unstable_shouldYield=X,o.unstable_wrapCallback=function(O){var I=g;return function(){var et=g;g=I;try{return O.apply(this,arguments)}finally{g=et}}}})(ld)),ld}var O0;function zS(){return O0||(O0=1,od.exports=BS()),od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function IS(){if(P0)return No;P0=1;var o=zS(),t=NS(),i=OS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,r=f;break}if(R===r){_=!0,r=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=u;break}if(R===r){_=!0,r=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),F=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),X=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case N:return"Suspense";case L:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case F:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case C:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case b:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var j=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et={pending:!1,data:null,method:null,action:null},mt=[],vt=-1;function St(e){return{current:e}}function Mt(e){0>vt||(e.current=mt[vt],mt[vt]=null,vt--)}function Gt(e,n){vt++,mt[vt]=e.current,e.current=n}var se=St(null),ne=St(null),ut=St(null),Tt=St(null);function xt(e,n){switch(Gt(ut,n),Gt(ne,e),Gt(se,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?t0(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=t0(n),e=e0(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Mt(se),Gt(se,e)}function Qt(){Mt(se),Mt(ne),Mt(ut)}function te(e){e.memoizedState!==null&&Gt(Tt,e);var n=se.current,a=e0(n,e.type);n!==a&&(Gt(ne,e),Gt(se,a))}function qt(e){ne.current===e&&(Mt(se),Mt(ne)),Tt.current===e&&(Mt(Tt),Co._currentValue=et)}var ke,le;function me(e){if(ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ke=n&&n[1]||"",le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ke+e+le}var ge=!1;function ce(e,n){if(!e||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var at=st}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(st){at=st}e.call(gt.prototype)}}else{try{throw Error()}catch(st){at=st}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var B=_.split(`
`),Q=R.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===Q.length)for(r=B.length-1,u=Q.length-1;1<=r&&0<=u&&B[r]!==Q[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==Q[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==Q[u]){var ct=`
`+B[r].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=r&&0<=u);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function je(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return me("Activity");default:return""}}function $e(e){try{var n="",a=null;do n+=je(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var tn=Object.prototype.hasOwnProperty,on=o.unstable_scheduleCallback,Xe=o.unstable_cancelCallback,en=o.unstable_shouldYield,W=o.unstable_requestPaint,Fe=o.unstable_now,Te=o.unstable_getCurrentPriorityLevel,D=o.unstable_ImmediatePriority,M=o.unstable_UserBlockingPriority,Y=o.unstable_NormalPriority,nt=o.unstable_LowPriority,ot=o.unstable_IdlePriority,yt=o.log,Rt=o.unstable_setDisableYieldValue,rt=null,lt=null;function bt(e){if(typeof yt=="function"&&Rt(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(rt,e)}catch{}}var Ot=Math.clz32?Math.clz32:Wt,Dt=Math.log,Ct=Math.LN2;function Wt(e){return e>>>=0,e===0?32:31-(Dt(e)/Ct|0)|0}var Yt=256,$t=262144,V=4194304;function Et(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Et(r):(_&=R,_!==0?u=Et(_):a||(a=R&~e,a!==0&&(u=Et(a))))):(R=r&~f,R!==0?u=Et(R):_!==0?u=Et(_):a||(a=r&~e,a!==0&&(u=Et(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Nt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(){var e=V;return V<<=1,(V&62914560)===0&&(V=4194304),e}function Vt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ze(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,Q=e.hiddenUpdates;for(a=_&~a;0<a;){var ct=31-Ot(a),gt=1<<ct;R[ct]=0,B[ct]=-1;var at=Q[ct];if(at!==null)for(Q[ct]=null,ct=0;ct<at.length;ct++){var st=at[ct];st!==null&&(st.lane&=-536870913)}a&=~gt}r!==0&&we(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function we(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ot(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Yn(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ot(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Zn(e,n){var a=n&-n;return a=(a&42)!==0?1:Gr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Gr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xr(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:b0(e.type))}function zs(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var Ui=Math.random().toString(36).slice(2),un="__reactFiber$"+Ui,bn="__reactProps$"+Ui,zn="__reactContainer$"+Ui,ss="__reactEvents$"+Ui,Qo="__reactListeners$"+Ui,Jo="__reactHandles$"+Ui,rs="__reactResources$"+Ui,Ea="__reactMarker$"+Ui;function ba(e){delete e[un],delete e[bn],delete e[ss],delete e[Qo],delete e[Jo]}function Wi(e){var n=e[un];if(n)return n;for(var a=e.parentNode;a;){if(n=a[zn]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=l0(e);e!==null;){if(a=e[un])return a;e=l0(e)}return n}e=a,a=e.parentNode}return null}function qi(e){if(e=e[un]||e[zn]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function os(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ta(e){var n=e[rs];return n||(n=e[rs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(e){e[Ea]=!0}var jo=new Set,A={};function k(e,n){it(e,n),it(e+"Capture",n)}function it(e,n){for(A[e]=n,e=0;e<n.length;e++)jo.add(n[e])}var $=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},Ut={};function Ft(e){return tn.call(Ut,e)?!0:tn.call(tt,e)?!1:$.test(e)?Ut[e]=!0:(tt[e]=!0,!1)}function wt(e,n,a){if(Ft(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function It(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function zt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Zt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function kt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Me(e){if(!e._valueTracker){var n=ie(e)?"checked":"value";e._valueTracker=kt(e,n,""+e[n])}}function Ke(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Ge(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var De=/[\n"\\]/g;function Ue(e){return e.replace(De,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Pt(e,n,a,r,u,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Zt(n)):e.value!==""+Zt(n)&&(e.value=""+Zt(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?ue(e,_,Zt(n)):a!=null?ue(e,_,Zt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Zt(R):e.removeAttribute("name")}function Dn(e,n,a,r,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Me(e);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Me(e)}function ue(e,n,a){n==="number"&&Ge(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function _n(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Kn(e,n,a){if(n!=null&&(n=""+Zt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Zt(a):""}function Si(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(j(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Zt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Me(e)}function Qn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Le=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qe(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Le.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Mi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Qe(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Qe(e,f,n[f])}function Ce(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Li=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Aa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ls(e){return Aa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var eu=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Is=null,Hs=null;function $h(e){var n=qi(e);if(n&&(e=n.stateNode)){var a=e[bn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Pt(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ue(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[bn]||null;if(!u)throw Error(s(90));Pt(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ke(r)}break t;case"textarea":Kn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&_n(e,!!a.multiple,n,!1)}}}var iu=!1;function tp(e,n,a){if(iu)return e(n,a);iu=!0;try{var r=e(n);return r}finally{if(iu=!1,(Is!==null||Hs!==null)&&(Il(),Is&&(n=Is,e=Hs,Hs=Is=null,$h(n),e)))for(n=0;n<e.length;n++)$h(e[n])}}function kr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[bn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Zi)try{var Wr={};Object.defineProperty(Wr,"passive",{get:function(){au=!0}}),window.addEventListener("test",Wr,Wr),window.removeEventListener("test",Wr,Wr)}catch{au=!1}var Ra=null,su=null,$o=null;function ep(){if($o)return $o;var e,n=su,a=n.length,r,u="value"in Ra?Ra.value:Ra.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return $o=u.slice(e,1<r?1-r:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function el(){return!0}function np(){return!1}function In(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:np,this.isPropagationStopped=np,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=In(cs),qr=v({},cs,{view:0,detail:0}),Uv=In(qr),ru,ou,Yr,il=v({},qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(ru=e.screenX-Yr.screenX,ou=e.screenY-Yr.screenY):ou=ru=0,Yr=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),ip=In(il),Lv=v({},il,{dataTransfer:0}),Nv=In(Lv),Ov=v({},qr,{relatedTarget:0}),lu=In(Ov),Pv=v({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Fv=In(Pv),Bv=v({},cs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zv=In(Bv),Iv=v({},cs,{data:0}),ap=In(Iv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vv[e])?!!n[e]:!1}function cu(){return Xv}var kv=v({},qr,{key:function(e){if(e.key){var n=Hv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wv=In(kv),qv=v({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=In(qv),Yv=v({},qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),Zv=In(Yv),Kv=v({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=In(Kv),Jv=v({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jv=In(Jv),$v=v({},cs,{newState:0,oldState:0}),tx=In($v),ex=[9,13,27,32],uu=Zi&&"CompositionEvent"in window,Zr=null;Zi&&"documentMode"in document&&(Zr=document.documentMode);var nx=Zi&&"TextEvent"in window&&!Zr,rp=Zi&&(!uu||Zr&&8<Zr&&11>=Zr),op=" ",lp=!1;function cp(e,n){switch(e){case"keyup":return ex.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gs=!1;function ix(e,n){switch(e){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return e=n.data,e===op&&lp?null:e;default:return null}}function ax(e,n){if(Gs)return e==="compositionend"||!uu&&cp(e,n)?(e=ep(),$o=su=Ra=null,Gs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sx[e.type]:n==="textarea"}function dp(e,n,a,r){Is?Hs?Hs.push(r):Hs=[r]:Is=r,n=ql(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Kr=null,Qr=null;function rx(e){Zg(e,0)}function al(e){var n=os(e);if(Ke(n))return e}function hp(e,n){if(e==="change")return n}var pp=!1;if(Zi){var fu;if(Zi){var du="oninput"in document;if(!du){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),du=typeof mp.oninput=="function"}fu=du}else fu=!1;pp=fu&&(!document.documentMode||9<document.documentMode)}function gp(){Kr&&(Kr.detachEvent("onpropertychange",_p),Qr=Kr=null)}function _p(e){if(e.propertyName==="value"&&al(Qr)){var n=[];dp(n,Qr,e,nu(e)),tp(rx,n)}}function ox(e,n,a){e==="focusin"?(gp(),Kr=n,Qr=a,Kr.attachEvent("onpropertychange",_p)):e==="focusout"&&gp()}function lx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Qr)}function cx(e,n){if(e==="click")return al(n)}function ux(e,n){if(e==="input"||e==="change")return al(n)}function fx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Jn=typeof Object.is=="function"?Object.is:fx;function Jr(e,n){if(Jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!tn.call(n,u)||!Jn(e[u],n[u]))return!1}return!0}function vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xp(e,n){var a=vp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vp(a)}}function Sp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ge(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ge(e.document)}return n}function hu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var dx=Zi&&"documentMode"in document&&11>=document.documentMode,Vs=null,pu=null,jr=null,mu=!1;function yp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||Vs==null||Vs!==Ge(r)||(r=Vs,"selectionStart"in r&&hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jr&&Jr(jr,r)||(jr=r,r=ql(pu,"onSelect"),0<r.length&&(n=new nl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Vs)))}function us(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Xs={animationend:us("Animation","AnimationEnd"),animationiteration:us("Animation","AnimationIteration"),animationstart:us("Animation","AnimationStart"),transitionrun:us("Transition","TransitionRun"),transitionstart:us("Transition","TransitionStart"),transitioncancel:us("Transition","TransitionCancel"),transitionend:us("Transition","TransitionEnd")},gu={},Ep={};Zi&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function fs(e){if(gu[e])return gu[e];if(!Xs[e])return e;var n=Xs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return gu[e]=n[a];return e}var bp=fs("animationend"),Tp=fs("animationiteration"),Ap=fs("animationstart"),hx=fs("transitionrun"),px=fs("transitionstart"),mx=fs("transitioncancel"),Rp=fs("transitionend"),Cp=new Map,_u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_u.push("scrollEnd");function yi(e,n){Cp.set(e,n),k(n,[e])}var sl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],ks=0,vu=0;function rl(){for(var e=ks,n=vu=ks=0;n<e;){var a=oi[n];oi[n++]=null;var r=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&wp(a,u,f)}}function ol(e,n,a,r){oi[ks++]=e,oi[ks++]=n,oi[ks++]=a,oi[ks++]=r,vu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function xu(e,n,a,r){return ol(e,n,a,r),ll(e)}function ds(e,n){return ol(e,null,null,n),ll(e)}function wp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ll(e){if(50<Mo)throw Mo=0,wf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ws={};function gx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,r){return new gx(e,n,a,r)}function Su(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cl(e,n,a,r,u,f){var _=0;if(r=e,typeof e=="function")Su(e)&&(_=1);else if(typeof e=="string")_=MS(e,a,se.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=jn(31,a,n,u),e.elementType=U,e.lanes=f,e;case w:return hs(a.children,u,f,n);case y:_=8,u|=24;break;case x:return e=jn(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case N:return e=jn(13,a,n,u),e.elementType=N,e.lanes=f,e;case L:return e=jn(19,a,n,u),e.elementType=L,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:_=10;break t;case P:_=9;break t;case C:_=11;break t;case z:_=14;break t;case b:_=16,r=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=jn(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function hs(e,n,a,r){return e=jn(7,e,r,n),e.lanes=a,e}function Mu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function Up(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function yu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Lp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Lp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:$e(n)},Lp.set(e,n),n)}return{value:e,source:n,stack:$e(n)}}var qs=[],Ys=0,ul=null,$r=0,ci=[],ui=0,Ca=null,Ni=1,Oi="";function Qi(e,n){qs[Ys++]=$r,qs[Ys++]=ul,ul=e,$r=n}function Np(e,n,a){ci[ui++]=Ni,ci[ui++]=Oi,ci[ui++]=Ca,Ca=e;var r=Ni;e=Oi;var u=32-Ot(r)-1;r&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Ni=1<<32-Ot(n)+u|a<<u|r,Oi=f+e}else Ni=1<<f|a<<u|r,Oi=e}function Eu(e){e.return!==null&&(Qi(e,1),Np(e,1,0))}function bu(e){for(;e===ul;)ul=qs[--Ys],qs[Ys]=null,$r=qs[--Ys],qs[Ys]=null;for(;e===Ca;)Ca=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null,Ni=ci[--ui],ci[ui]=null}function Op(e,n){ci[ui++]=Ni,ci[ui++]=Oi,ci[ui++]=Ca,Ni=n.id,Oi=n.overflow,Ca=e}var Tn=null,We=null,_e=!1,wa=null,fi=!1,Tu=Error(s(519));function Da(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw to(li(n,e)),Tu}function Pp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[un]=e,n[bn]=r,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)de(Eo[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Dn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Si(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||jg(n.textContent,a)?(r.popover!=null&&(de("beforetoggle",n),de("toggle",n)),r.onScroll!=null&&de("scroll",n),r.onScrollEnd!=null&&de("scrollend",n),r.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Da(e,!0)}function Fp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function Zs(e){if(e!==Tn)return!1;if(!_e)return Fp(e),_e=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kf(e.type,e.memoizedProps)),a=!a),a&&We&&Da(e),Fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=o0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=o0(e)}else n===27?(n=We,ka(e.type)?(e=Kf,Kf=null,We=e):We=n):We=Tn?hi(e.stateNode.nextSibling):null;return!0}function ps(){We=Tn=null,_e=!1}function Au(){var e=wa;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),wa=null),e}function to(e){wa===null?wa=[e]:wa.push(e)}var Ru=St(null),ms=null,Ji=null;function Ua(e,n,a){Gt(Ru,n._currentValue),n._currentValue=a}function ji(e){e._currentValue=Ru.current,Mt(Ru)}function Cu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function wu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Cu(f.return,a,e),r||(_=null);break t}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Cu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ks(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;Jn(u.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(u===Tt.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}u=u.return}e!==null&&wu(n,e,a,r),n.flags|=262144}function fl(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function gs(e){ms=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Bp(ms,e)}function dl(e,n){return ms===null&&gs(e),Bp(e,n)}function Bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ji===null){if(e===null)throw Error(s(308));Ji=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Ji=Ji.next=n;return a}var _x=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vx=o.unstable_scheduleCallback,xx=o.unstable_NormalPriority,dn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new _x,data:new Map,refCount:0}}function eo(e){e.refCount--,e.refCount===0&&vx(xx,function(){e.controller.abort()})}var no=null,Uu=0,Qs=0,Js=null;function Sx(e,n){if(no===null){var a=no=[];Uu=0,Qs=Pf(),Js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Uu++,n.then(zp,zp),n}function zp(){if(--Uu===0&&no!==null){Js!==null&&(Js.status="fulfilled");var e=no;no=null,Qs=0,Js=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Mx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Ip=O.S;O.S=function(e,n){yg=Fe(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Sx(e,n),Ip!==null&&Ip(e,n)};var _s=St(null);function Lu(){var e=_s.current;return e!==null?e:Ve.pooledCache}function hl(e,n){n===null?Gt(_s,_s.current):Gt(_s,n.pool)}function Hp(){var e=Lu();return e===null?null:{parent:dn._currentValue,pool:e}}var js=Error(s(460)),Nu=Error(s(474)),pl=Error(s(542)),ml={then:function(){}};function Gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e}throw xs=n,js}}function vs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xs=a,js):a}}var xs=null;function Xp(){if(xs===null)throw Error(s(459));var e=xs;return xs=null,e}function kp(e){if(e===js||e===pl)throw Error(s(483))}var $s=null,io=0;function gl(e){var n=io;return io+=1,$s===null&&($s=[]),Vp($s,e,n)}function ao(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wp(e){function n(q,H){if(e){var K=q.deletions;K===null?(q.deletions=[H],q.flags|=16):K.push(H)}}function a(q,H){if(!e)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function r(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function u(q,H){return q=Ki(q,H),q.index=0,q.sibling=null,q}function f(q,H,K){return q.index=K,e?(K=q.alternate,K!==null?(K=K.index,K<H?(q.flags|=67108866,H):K):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function _(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function R(q,H,K,pt){return H===null||H.tag!==6?(H=Mu(K,q.mode,pt),H.return=q,H):(H=u(H,K),H.return=q,H)}function B(q,H,K,pt){var Kt=K.type;return Kt===w?ct(q,H,K.props.children,pt,K.key):H!==null&&(H.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&vs(Kt)===H.type)?(H=u(H,K.props),ao(H,K),H.return=q,H):(H=cl(K.type,K.key,K.props,null,q.mode,pt),ao(H,K),H.return=q,H)}function Q(q,H,K,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=yu(K,q.mode,pt),H.return=q,H):(H=u(H,K.children||[]),H.return=q,H)}function ct(q,H,K,pt,Kt){return H===null||H.tag!==7?(H=hs(K,q.mode,pt,Kt),H.return=q,H):(H=u(H,K),H.return=q,H)}function gt(q,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Mu(""+H,q.mode,K),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case E:return K=cl(H.type,H.key,H.props,null,q.mode,K),ao(K,H),K.return=q,K;case T:return H=yu(H,q.mode,K),H.return=q,H;case b:return H=vs(H),gt(q,H,K)}if(j(H)||Z(H))return H=hs(H,q.mode,K,null),H.return=q,H;if(typeof H.then=="function")return gt(q,gl(H),K);if(H.$$typeof===F)return gt(q,dl(q,H),K);_l(q,H)}return null}function at(q,H,K,pt){var Kt=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Kt!==null?null:R(q,H,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return K.key===Kt?B(q,H,K,pt):null;case T:return K.key===Kt?Q(q,H,K,pt):null;case b:return K=vs(K),at(q,H,K,pt)}if(j(K)||Z(K))return Kt!==null?null:ct(q,H,K,pt,null);if(typeof K.then=="function")return at(q,H,gl(K),pt);if(K.$$typeof===F)return at(q,H,dl(q,K),pt);_l(q,K)}return null}function st(q,H,K,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(K)||null,R(H,q,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case E:return q=q.get(pt.key===null?K:pt.key)||null,B(H,q,pt,Kt);case T:return q=q.get(pt.key===null?K:pt.key)||null,Q(H,q,pt,Kt);case b:return pt=vs(pt),st(q,H,K,pt,Kt)}if(j(pt)||Z(pt))return q=q.get(K)||null,ct(H,q,pt,Kt,null);if(typeof pt.then=="function")return st(q,H,K,gl(pt),Kt);if(pt.$$typeof===F)return st(q,H,K,dl(H,pt),Kt);_l(H,pt)}return null}function Ht(q,H,K,pt){for(var Kt=null,ye=null,Xt=H,re=H=0,pe=null;Xt!==null&&re<K.length;re++){Xt.index>re?(pe=Xt,Xt=null):pe=Xt.sibling;var Ee=at(q,Xt,K[re],pt);if(Ee===null){Xt===null&&(Xt=pe);break}e&&Xt&&Ee.alternate===null&&n(q,Xt),H=f(Ee,H,re),ye===null?Kt=Ee:ye.sibling=Ee,ye=Ee,Xt=pe}if(re===K.length)return a(q,Xt),_e&&Qi(q,re),Kt;if(Xt===null){for(;re<K.length;re++)Xt=gt(q,K[re],pt),Xt!==null&&(H=f(Xt,H,re),ye===null?Kt=Xt:ye.sibling=Xt,ye=Xt);return _e&&Qi(q,re),Kt}for(Xt=r(Xt);re<K.length;re++)pe=st(Xt,q,re,K[re],pt),pe!==null&&(e&&pe.alternate!==null&&Xt.delete(pe.key===null?re:pe.key),H=f(pe,H,re),ye===null?Kt=pe:ye.sibling=pe,ye=pe);return e&&Xt.forEach(function(Ka){return n(q,Ka)}),_e&&Qi(q,re),Kt}function Jt(q,H,K,pt){if(K==null)throw Error(s(151));for(var Kt=null,ye=null,Xt=H,re=H=0,pe=null,Ee=K.next();Xt!==null&&!Ee.done;re++,Ee=K.next()){Xt.index>re?(pe=Xt,Xt=null):pe=Xt.sibling;var Ka=at(q,Xt,Ee.value,pt);if(Ka===null){Xt===null&&(Xt=pe);break}e&&Xt&&Ka.alternate===null&&n(q,Xt),H=f(Ka,H,re),ye===null?Kt=Ka:ye.sibling=Ka,ye=Ka,Xt=pe}if(Ee.done)return a(q,Xt),_e&&Qi(q,re),Kt;if(Xt===null){for(;!Ee.done;re++,Ee=K.next())Ee=gt(q,Ee.value,pt),Ee!==null&&(H=f(Ee,H,re),ye===null?Kt=Ee:ye.sibling=Ee,ye=Ee);return _e&&Qi(q,re),Kt}for(Xt=r(Xt);!Ee.done;re++,Ee=K.next())Ee=st(Xt,q,re,Ee.value,pt),Ee!==null&&(e&&Ee.alternate!==null&&Xt.delete(Ee.key===null?re:Ee.key),H=f(Ee,H,re),ye===null?Kt=Ee:ye.sibling=Ee,ye=Ee);return e&&Xt.forEach(function(LS){return n(q,LS)}),_e&&Qi(q,re),Kt}function Ie(q,H,K,pt){if(typeof K=="object"&&K!==null&&K.type===w&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case E:t:{for(var Kt=K.key;H!==null;){if(H.key===Kt){if(Kt=K.type,Kt===w){if(H.tag===7){a(q,H.sibling),pt=u(H,K.props.children),pt.return=q,q=pt;break t}}else if(H.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===b&&vs(Kt)===H.type){a(q,H.sibling),pt=u(H,K.props),ao(pt,K),pt.return=q,q=pt;break t}a(q,H);break}else n(q,H);H=H.sibling}K.type===w?(pt=hs(K.props.children,q.mode,pt,K.key),pt.return=q,q=pt):(pt=cl(K.type,K.key,K.props,null,q.mode,pt),ao(pt,K),pt.return=q,q=pt)}return _(q);case T:t:{for(Kt=K.key;H!==null;){if(H.key===Kt)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(q,H.sibling),pt=u(H,K.children||[]),pt.return=q,q=pt;break t}else{a(q,H);break}else n(q,H);H=H.sibling}pt=yu(K,q.mode,pt),pt.return=q,q=pt}return _(q);case b:return K=vs(K),Ie(q,H,K,pt)}if(j(K))return Ht(q,H,K,pt);if(Z(K)){if(Kt=Z(K),typeof Kt!="function")throw Error(s(150));return K=Kt.call(K),Jt(q,H,K,pt)}if(typeof K.then=="function")return Ie(q,H,gl(K),pt);if(K.$$typeof===F)return Ie(q,H,dl(q,K),pt);_l(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(q,H.sibling),pt=u(H,K),pt.return=q,q=pt):(a(q,H),pt=Mu(K,q.mode,pt),pt.return=q,q=pt),_(q)):a(q,H)}return function(q,H,K,pt){try{io=0;var Kt=Ie(q,H,K,pt);return $s=null,Kt}catch(Xt){if(Xt===js||Xt===pl)throw Xt;var ye=jn(29,Xt,null,q.mode);return ye.lanes=pt,ye.return=q,ye}finally{}}}var Ss=Wp(!0),qp=Wp(!1),La=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ae&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ll(e),wp(e,null,a),n}return ol(e,r,n,a),ll(e)}function so(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Yn(e,a)}}function Fu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function ro(){if(Bu){var e=Js;if(e!==null)throw e}}function oo(e,n,a,r){Bu=!1;var u=e.updateQueue;La=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,Q=B.next;B.next=null,_===null?f=Q:_.next=Q,_=B;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,R=ct.lastBaseUpdate,R!==_&&(R===null?ct.firstBaseUpdate=Q:R.next=Q,ct.lastBaseUpdate=B))}if(f!==null){var gt=u.baseState;_=0,ct=Q=B=null,R=f;do{var at=R.lane&-536870913,st=at!==R.lane;if(st?(he&at)===at:(r&at)===at){at!==0&&at===Qs&&(Bu=!0),ct!==null&&(ct=ct.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Ht=e,Jt=R;at=n;var Ie=a;switch(Jt.tag){case 1:if(Ht=Jt.payload,typeof Ht=="function"){gt=Ht.call(Ie,gt,at);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Jt.payload,at=typeof Ht=="function"?Ht.call(Ie,gt,at):Ht,at==null)break t;gt=v({},gt,at);break t;case 2:La=!0}}at=R.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[at]:st.push(at))}else st={lane:at,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ct===null?(Q=ct=st,B=gt):ct=ct.next=st,_|=at;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;st=R,R=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ct===null&&(B=gt),u.baseState=B,u.firstBaseUpdate=Q,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),Ia|=_,e.lanes=_,e.memoizedState=gt}}function Yp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Zp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Yp(a[e],n)}var tr=St(null),vl=St(0);function Kp(e,n){e=oa,Gt(vl,e),Gt(tr,n),oa=e|n.baseLanes}function zu(){Gt(vl,oa),Gt(tr,tr.current)}function Iu(){oa=vl.current,Mt(tr),Mt(vl)}var $n=St(null),di=null;function Pa(e){var n=e.alternate;Gt(ln,ln.current&1),Gt($n,e),di===null&&(n===null||tr.current!==null||n.memoizedState!==null)&&(di=e)}function Hu(e){Gt(ln,ln.current),Gt($n,e),di===null&&(di=e)}function Qp(e){e.tag===22?(Gt(ln,ln.current),Gt($n,e),di===null&&(di=e)):Fa()}function Fa(){Gt(ln,ln.current),Gt($n,$n.current)}function ti(e){Mt($n),di===e&&(di=null),Mt(ln)}var ln=St(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yf(a)||Zf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ae=null,Be=null,hn=null,Sl=!1,er=!1,Ms=!1,Ml=0,lo=0,nr=null,yx=0;function nn(){throw Error(s(321))}function Gu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Jn(e[a],n[a]))return!1;return!0}function Vu(e,n,a,r,u,f){return $i=f,ae=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Nm:af,Ms=!1,f=a(r,u),Ms=!1,er&&(f=jp(n,a,r,u)),Jp(e),f}function Jp(e){O.H=fo;var n=Be!==null&&Be.next!==null;if($i=0,hn=Be=ae=null,Sl=!1,lo=0,nr=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&fl(e)&&(pn=!0))}function jp(e,n,a,r){ae=e;var u=0;do{if(er&&(nr=null),lo=0,er=!1,25<=u)throw Error(s(301));if(u+=1,hn=Be=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Om,f=n(a,r)}while(er);return f}function Ex(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ae.flags|=1024),n}function Xu(){var e=Ml!==0;return Ml=0,e}function ku(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Wu(e){if(Sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Sl=!1}$i=0,hn=Be=ae=null,er=!1,lo=Ml=0,nr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?ae.memoizedState=hn=e:hn=hn.next=e,hn}function cn(){if(Be===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=hn===null?ae.memoizedState:hn.next;if(n!==null)hn=n,Be=e;else{if(e===null)throw ae.alternate===null?Error(s(467)):Error(s(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},hn===null?ae.memoizedState=hn=e:hn=hn.next=e}return hn}function yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=lo;return lo+=1,nr===null&&(nr=[]),e=Vp(nr,e,n),n=ae,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Nm:af),e}function El(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===F)return An(e)}throw Error(s(438,String(e)))}function qu(e){var n=null,a=ae.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ae.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yl(),ae.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=X;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=cn();return Yu(n,Be,e)}function Yu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=_=null,B=null,Q=n,ct=!1;do{var gt=Q.lane&-536870913;if(gt!==Q.lane?(he&gt)===gt:($i&gt)===gt){var at=Q.revertLane;if(at===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),gt===Qs&&(ct=!0);else if(($i&at)===at){Q=Q.next,at===Qs&&(ct=!0);continue}else gt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(R=B=gt,_=f):B=B.next=gt,ae.lanes|=at,Ia|=at;gt=Q.action,Ms&&a(f,gt),f=Q.hasEagerState?Q.eagerState:a(f,gt)}else at={lane:gt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},B===null?(R=B=at,_=f):B=B.next=at,ae.lanes|=gt,Ia|=gt;Q=Q.next}while(Q!==null&&Q!==n);if(B===null?_=f:B.next=R,!Jn(f,e.memoizedState)&&(pn=!0,ct&&(a=Js,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Zu(e){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Jn(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function $p(e,n,a){var r=ae,u=cn(),f=_e;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Jn((Be||u).memoizedState,a);if(_&&(u.memoizedState=a,pn=!0),u=u.queue,Ju(nm.bind(null,r,u,e),[e]),u.getSnapshot!==n||_||hn!==null&&hn.memoizedState.tag&1){if(r.flags|=2048,ir(9,{destroy:void 0},em.bind(null,r,u,a,n),null),Ve===null)throw Error(s(349));f||($i&127)!==0||tm(r,n,a)}return a}function tm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ae.updateQueue,n===null?(n=yl(),ae.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function em(e,n,a,r){n.value=a,n.getSnapshot=r,im(n)&&am(e)}function nm(e,n,a){return a(function(){im(n)&&am(e)})}function im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Jn(e,a)}catch{return!0}}function am(e){var n=ds(e,2);n!==null&&kn(n,e,2)}function Ku(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),Ms){bt(!0);try{a()}finally{bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function sm(e,n,a,r){return e.baseState=a,Yu(e,Be,typeof r=="function"?r:ta)}function bx(e,n,a,r,u){if(Rl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function rm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var R=a(u,r),B=O.S;B!==null&&B(_,R),om(e,n,R)}catch(Q){Qu(e,n,Q)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,r),om(e,n,f)}catch(Q){Qu(e,n,Q)}}function om(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){lm(e,n,r)},function(r){return Qu(e,n,r)}):lm(e,n,a)}function lm(e,n,a){n.status="fulfilled",n.value=a,cm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,rm(e,a)))}function Qu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,cm(n),n=n.next;while(n!==r)}e.action=null}function cm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function um(e,n){return n}function fm(e,n){if(_e){var a=Ve.formState;if(a!==null){t:{var r=ae;if(_e){if(We){e:{for(var u=We,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=hi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=hi(u.nextSibling),r=u.data==="F!";break t}}Da(r)}r=!1}r&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:n},a.queue=r,a=Dm.bind(null,ae,r),r.dispatch=a,r=Ku(!1),f=nf.bind(null,ae,!1,r.queue),r=On(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=bx.bind(null,ae,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function dm(e){var n=cn();return hm(n,Be,e)}function hm(e,n,a){if(n=Yu(e,n,um)[0],e=bl(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=co(n)}catch(_){throw _===js?pl:_}else r=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ae.flags|=2048,ir(9,{destroy:void 0},Tx.bind(null,u,a),null)),[r,f,e]}function Tx(e,n){e.action=n}function pm(e){var n=cn(),a=Be;if(a!==null)return hm(n,a,e);cn(),n=n.memoizedState,a=cn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function ir(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ae.updateQueue,n===null&&(n=yl(),ae.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function mm(){return cn().memoizedState}function Tl(e,n,a,r){var u=On();ae.flags|=e,u.memoizedState=ir(1|n,{destroy:void 0},a,r===void 0?null:r)}function Al(e,n,a,r){var u=cn();r=r===void 0?null:r;var f=u.memoizedState.inst;Be!==null&&r!==null&&Gu(r,Be.memoizedState.deps)?u.memoizedState=ir(n,f,a,r):(ae.flags|=e,u.memoizedState=ir(1|n,f,a,r))}function gm(e,n){Tl(8390656,8,e,n)}function Ju(e,n){Al(2048,8,e,n)}function Ax(e){ae.flags|=4;var n=ae.updateQueue;if(n===null)n=yl(),ae.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function _m(e){var n=cn().memoizedState;return Ax({ref:n,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function vm(e,n){return Al(4,2,e,n)}function xm(e,n){return Al(4,4,e,n)}function Sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mm(e,n,a){a=a!=null?a.concat([e]):null,Al(4,4,Sm.bind(null,n,e),a)}function ju(){}function ym(e,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Gu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Em(e,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Gu(n,r[1]))return r[0];if(r=e(),Ms){bt(!0);try{e()}finally{bt(!1)}}return a.memoizedState=[r,n],r}function $u(e,n,a){return a===void 0||($i&1073741824)!==0&&(he&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=bg(),ae.lanes|=e,Ia|=e,a)}function bm(e,n,a,r){return Jn(a,n)?a:tr.current!==null?(e=$u(e,a,r),Jn(e,n)||(pn=!0),e):($i&42)===0||($i&1073741824)!==0&&(he&261930)===0?(pn=!0,e.memoizedState=a):(e=bg(),ae.lanes|=e,Ia|=e,n)}function Tm(e,n,a,r,u){var f=I.p;I.p=f!==0&&8>f?f:8;var _=O.T,R={};O.T=R,nf(e,!1,n,a);try{var B=u(),Q=O.S;if(Q!==null&&Q(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ct=Mx(B,r);uo(e,n,ct,ii(e))}else uo(e,n,r,ii(e))}catch(gt){uo(e,n,{then:function(){},status:"rejected",reason:gt},ii())}finally{I.p=f,_!==null&&R.types!==null&&(_.types=R.types),O.T=_}}function Rx(){}function tf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Am(e).queue;Tm(e,u,n,et,a===null?Rx:function(){return Rm(e),a(r)})}function Am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:et,baseState:et,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:et},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rm(e){var n=Am(e);n.next===null&&(n=e.alternate.memoizedState),uo(e,n.next.queue,{},ii())}function ef(){return An(Co)}function Cm(){return cn().memoizedState}function wm(){return cn().memoizedState}function Cx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ii();e=Na(a);var r=Oa(n,e,a);r!==null&&(kn(r,n,a),so(r,n,a)),n={cache:Du()},e.payload=n;return}n=n.return}}function wx(e,n,a){var r=ii();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(e)?Um(n,a):(a=xu(e,n,a,r),a!==null&&(kn(a,e,r),Lm(a,n,r)))}function Dm(e,n,a){var r=ii();uo(e,n,a,r)}function uo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(e))Um(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,Jn(R,_))return ol(e,n,u,0),Ve===null&&rl(),!1}catch{}finally{}if(a=xu(e,n,u,r),a!==null)return kn(a,e,r),Lm(a,n,r),!0}return!1}function nf(e,n,a,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rl(e)){if(n)throw Error(s(479))}else n=xu(e,a,r,2),n!==null&&kn(n,e,2)}function Rl(e){var n=e.alternate;return e===ae||n!==null&&n===ae}function Um(e,n){er=Sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Lm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Yn(e,a)}}var fo={readContext:An,use:El,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};fo.useEffectEvent=nn;var Nm={readContext:An,use:El,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:gm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,Sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var r=e();if(Ms){bt(!0);try{e()}finally{bt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=On();if(a!==void 0){var u=a(n);if(Ms){bt(!0);try{a(n)}finally{bt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=wx.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,a=Dm.bind(null,ae,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,n){var a=On();return $u(a,e,n)},useTransition:function(){var e=Ku(!1);return e=Tm.bind(null,ae,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ae,u=On();if(_e){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(he&127)!==0||tm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,gm(nm.bind(null,r,f,e),[e]),r.flags|=2048,ir(9,{destroy:void 0},em.bind(null,r,f,a,n),null),a},useId:function(){var e=On(),n=Ve.identifierPrefix;if(_e){var a=Oi,r=Ni;a=(r&~(1<<32-Ot(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ml++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ef,useFormState:fm,useActionState:fm,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nf.bind(null,ae,!0,a),a.dispatch=n,[e,n]},useMemoCache:qu,useCacheRefresh:function(){return On().memoizedState=Cx.bind(null,ae)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Ae&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},af={readContext:An,use:El,useCallback:ym,useContext:An,useEffect:Ju,useImperativeHandle:Mm,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:bl,useRef:mm,useState:function(){return bl(ta)},useDebugValue:ju,useDeferredValue:function(e,n){var a=cn();return bm(a,Be.memoizedState,e,n)},useTransition:function(){var e=bl(ta)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:ef,useFormState:dm,useActionState:dm,useOptimistic:function(e,n){var a=cn();return sm(a,Be,e,n)},useMemoCache:qu,useCacheRefresh:wm};af.useEffectEvent=_m;var Om={readContext:An,use:El,useCallback:ym,useContext:An,useEffect:Ju,useImperativeHandle:Mm,useInsertionEffect:vm,useLayoutEffect:xm,useMemo:Em,useReducer:Zu,useRef:mm,useState:function(){return Zu(ta)},useDebugValue:ju,useDeferredValue:function(e,n){var a=cn();return Be===null?$u(a,e,n):bm(a,Be.memoizedState,e,n)},useTransition:function(){var e=Zu(ta)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:ef,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=cn();return Be!==null?sm(a,Be,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:wm};Om.useEffectEvent=_m;function sf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ii(),u=Na(r);u.payload=n,a!=null&&(u.callback=a),n=Oa(e,u,r),n!==null&&(kn(n,e,r),so(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ii(),u=Na(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Oa(e,u,r),n!==null&&(kn(n,e,r),so(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ii(),r=Na(a);r.tag=2,n!=null&&(r.callback=n),n=Oa(e,r,a),n!==null&&(kn(n,e,a),so(n,e,a))}};function Pm(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Jr(a,r)||!Jr(u,f):!0}function Fm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&rf.enqueueReplaceState(n,n.state,null)}function ys(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Bm(e){sl(e)}function zm(e){console.error(e)}function Im(e){sl(e)}function Cl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Hm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function of(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Cl(e,n)},a}function Gm(e){return e=Na(e),e.tag=3,e}function Vm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Hm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Hm(n,a,r),typeof u!="function"&&(Ha===null?Ha=new Set([this]):Ha.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Dx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return di===null?Hl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Lf(e,r,u)),!1;case 22:return a.flags|=65536,r===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Lf(e,r,u)),!1}throw Error(s(435,a.tag))}return Lf(e,r,u),Hl(),!1}if(_e)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Tu&&(e=Error(s(422),{cause:r}),to(li(e,a)))):(r!==Tu&&(n=Error(s(423),{cause:r}),to(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=li(r,a),u=of(e.stateNode,r,u),Fu(e,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:r});if(f=li(f,a),So===null?So=[f]:So.push(f),an!==4&&(an=2),n===null)return!0;r=li(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=of(a.stateNode,r,e),Fu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ha===null||!Ha.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,e,a,r),Fu(a,u),!1}a=a.return}while(a!==null);return!1}var lf=Error(s(461)),pn=!1;function Rn(e,n,a,r){n.child=e===null?qp(n,null,a,r):Ss(n,e.child,a,r)}function Xm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return gs(n),r=Vu(e,n,a,_,f,u),R=Xu(),e!==null&&!pn?(ku(e,n,u),ea(e,n,u)):(_e&&R&&Eu(n),n.flags|=1,Rn(e,n,r,u),n.child)}function km(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Su(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wm(e,n,f,r,u)):(e=cl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!gf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Jr,a(_,r)&&e.ref===n.ref)return ea(e,n,u)}return n.flags|=1,e=Ki(f,r),e.ref=n.ref,e.return=n,n.child=e}function Wm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Jr(f,r)&&e.ref===n.ref)if(pn=!1,n.pendingProps=r=f,gf(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ea(e,n,u)}return cf(e,n,a,r,u)}function qm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Ym(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?Kp(n,f):zu(),Qp(n);else return r=n.lanes=536870912,Ym(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(hl(n,f.cachePool),Kp(n,f),Fa(),n.memoizedState=null):(e!==null&&hl(n,null),zu(),Fa());return Rn(e,n,u,a),n.child}function ho(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Ym(e,n,a,r,u){var f=Lu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&hl(n,null),zu(),Qp(n),e!==null&&Ks(e,n,r,!0),n.childLanes=u,null}function wl(e,n){return n=Ul({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Zm(e,n,a){return Ss(n,e.child,null,a),e=wl(n,n.pendingProps),e.flags|=2,ti(n),n.memoizedState=null,e}function Ux(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(_e){if(r.mode==="hidden")return e=wl(n,r),n.lanes=536870912,ho(null,e);if(Hu(n),(e=We)?(e=r0(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Up(e),a.return=n,n.child=a,Tn=n,We=null)):e=null,e===null)throw Da(n);return n.lanes=536870912,null}return wl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Hu(n),u)if(n.flags&256)n.flags&=-257,n=Zm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Ks(e,n,a,!1),u=(a&e.childLanes)!==0,pn||u){if(r=Ve,r!==null&&(_=Zn(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ds(e,_),kn(r,e,_),lf;Hl(),n=Zm(e,n,a)}else e=f.treeContext,We=hi(_.nextSibling),Tn=n,_e=!0,wa=null,fi=!1,e!==null&&Op(n,e),n=wl(n,r),n.flags|=4096;return n}return e=Ki(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function cf(e,n,a,r,u){return gs(n),a=Vu(e,n,a,r,void 0,u),r=Xu(),e!==null&&!pn?(ku(e,n,u),ea(e,n,u)):(_e&&r&&Eu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function Km(e,n,a,r,u,f){return gs(n),n.updateQueue=null,a=jp(n,r,a,u),Jp(e),r=Xu(),e!==null&&!pn?(ku(e,n,f),ea(e,n,f)):(_e&&r&&Eu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function Qm(e,n,a,r,u){if(gs(n),n.stateNode===null){var f=Ws,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ou(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):Ws,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(sf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&rf.enqueueReplaceState(f,f.state,null),oo(n,r,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,B=ys(a,R);f.props=B;var Q=f.context,ct=a.contextType;_=Ws,typeof ct=="object"&&ct!==null&&(_=An(ct));var gt=a.getDerivedStateFromProps;ct=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||Q!==_)&&Fm(n,f,r,_),La=!1;var at=n.memoizedState;f.state=at,oo(n,r,f,u),ro(),Q=n.memoizedState,R||at!==Q||La?(typeof gt=="function"&&(sf(n,a,gt,r),Q=n.memoizedState),(B=La||Pm(n,a,B,r,at,Q,_))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=_,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Pu(e,n),_=n.memoizedProps,ct=ys(a,_),f.props=ct,gt=n.pendingProps,at=f.context,Q=a.contextType,B=Ws,typeof Q=="object"&&Q!==null&&(B=An(Q)),R=a.getDerivedStateFromProps,(Q=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==gt||at!==B)&&Fm(n,f,r,B),La=!1,at=n.memoizedState,f.state=at,oo(n,r,f,u),ro();var st=n.memoizedState;_!==gt||at!==st||La||e!==null&&e.dependencies!==null&&fl(e.dependencies)?(typeof R=="function"&&(sf(n,a,R,r),st=n.memoizedState),(ct=La||Pm(n,a,ct,r,at,st,B)||e!==null&&e.dependencies!==null&&fl(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,st,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,st,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),f.props=r,f.state=st,f.context=B,r=ct):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Dl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ss(n,e.child,null,u),n.child=Ss(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ea(e,n,u),e}function Jm(e,n,a,r){return ps(),n.flags|=256,Rn(e,n,a,r),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(e){return{baseLanes:e,cachePool:Hp()}}function df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ni),e}function jm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(_e){if(u?Pa(n):Fa(),(e=We)?(e=r0(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ca!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Up(e),a.return=n,n.child=a,Tn=n,We=null)):e=null,e===null)throw Da(n);return Zf(e)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(Fa(),u=n.mode,R=Ul({mode:"hidden",children:R},u),r=hs(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=ff(a),r.childLanes=df(e,_,a),n.memoizedState=uf,ho(null,r)):(Pa(n),hf(n,R))}var B=e.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(f)n.flags&256?(Pa(n),n.flags&=-257,n=pf(e,n,a)):n.memoizedState!==null?(Fa(),n.child=e.child,n.flags|=128,n=null):(Fa(),R=r.fallback,u=n.mode,r=Ul({mode:"visible",children:r.children},u),R=hs(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,Ss(n,e.child,null,a),r=n.child,r.memoizedState=ff(a),r.childLanes=df(e,_,a),n.memoizedState=uf,n=ho(null,r));else if(Pa(n),Zf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var Q=_.dgst;_=Q,r=Error(s(419)),r.stack="",r.digest=_,to({value:r,source:null,stack:null}),n=pf(e,n,a)}else if(pn||Ks(e,n,a,!1),_=(a&e.childLanes)!==0,pn||_){if(_=Ve,_!==null&&(r=Zn(_,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,ds(e,r),kn(_,e,r),lf;Yf(R)||Hl(),n=pf(e,n,a)}else Yf(R)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,We=hi(R.nextSibling),Tn=n,_e=!0,wa=null,fi=!1,e!==null&&Op(n,e),n=hf(n,r.children),n.flags|=4096);return n}return u?(Fa(),R=r.fallback,u=n.mode,B=e.child,Q=B.sibling,r=Ki(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,Q!==null?R=Ki(Q,R):(R=hs(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,ho(null,r),r=n.child,R=e.child.memoizedState,R===null?R=ff(a):(u=R.cachePool,u!==null?(B=dn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Hp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=df(e,_,a),n.memoizedState=uf,ho(e.child,r)):(Pa(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function hf(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function pf(e,n,a){return Ss(n,e.child,null,a),e=hf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $m(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Cu(e.return,n,a)}function mf(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function tg(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=ln.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,Gt(ln,_),Rn(e,n,r,a),r=_e?$r:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,n);else if(e.tag===19)$m(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),mf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}mf(n,!0,a,null,f,r);break;case"together":mf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ia|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function gf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&fl(e)))}function Lx(e,n,a){switch(n.tag){case 3:xt(n,n.stateNode.containerInfo),Ua(n,dn,e.memoizedState.cache),ps();break;case 27:case 5:te(n);break;case 4:xt(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?jm(e,n,a):(Pa(n),e=ea(e,n,a),e!==null?e.sibling:null);Pa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return tg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Gt(ln,ln.current),r)break;return null;case 22:return n.lanes=0,qm(e,n,a,n.pendingProps);case 24:Ua(n,dn,e.memoizedState.cache)}return ea(e,n,a)}function eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!gf(e,a)&&(n.flags&128)===0)return pn=!1,Lx(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,_e&&(n.flags&1048576)!==0&&Np(n,$r,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=vs(n.elementType),n.type=e,typeof e=="function")Su(e)?(r=ys(e,r),n.tag=1,n=Qm(null,n,e,r,a)):(n.tag=0,n=cf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===C){n.tag=11,n=Xm(null,n,e,r,a);break t}else if(u===z){n.tag=14,n=km(null,n,e,r,a);break t}}throw n=ht(e)||e,Error(s(306,n,""))}}return n;case 0:return cf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=ys(r,n.pendingProps),Qm(e,n,r,u,a);case 3:t:{if(xt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(e,n),oo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ua(n,dn,r),r!==f.cache&&wu(n,[dn],a,!0),ro(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Jm(e,n,r,a);break t}else if(r!==u){u=li(Error(s(424)),n),to(u),n=Jm(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(We=hi(e.firstChild),Tn=n,_e=!0,wa=null,fi=!0,a=qp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ps(),r===u){n=ea(e,n,a);break t}Rn(e,n,r,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=d0(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(a=n.type,e=n.pendingProps,r=Yl(ut.current).createElement(a),r[un]=n,r[bn]=e,Cn(r,a,e),fn(r),n.stateNode=r):n.memoizedState=d0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return te(n),e===null&&_e&&(r=n.stateNode=c0(n.type,n.pendingProps,ut.current),Tn=n,fi=!0,u=We,ka(n.type)?(Kf=u,We=hi(r.firstChild)):We=u),Rn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&_e&&((u=r=We)&&(r=lS(r,n.type,n.pendingProps,fi),r!==null?(n.stateNode=r,Tn=n,We=hi(r.firstChild),fi=!1,u=!0):u=!1),u||Da(n)),te(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,kf(u,f)?r=null:_!==null&&kf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Vu(e,n,Ex,null,null,a),Co._currentValue=u),Dl(e,n),Rn(e,n,r,a),n.child;case 6:return e===null&&_e&&((e=a=We)&&(a=cS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Tn=n,We=null,e=!0):e=!1),e||Da(n)),null;case 13:return jm(e,n,a);case 4:return xt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ss(n,null,r,a):Rn(e,n,r,a),n.child;case 11:return Xm(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ua(n,n.type,r.value),Rn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,gs(n),u=An(u),r=r(u),n.flags|=1,Rn(e,n,r,a),n.child;case 14:return km(e,n,n.type,n.pendingProps,a);case 15:return Wm(e,n,n.type,n.pendingProps,a);case 19:return tg(e,n,a);case 31:return Ux(e,n,a);case 22:return qm(e,n,a,n.pendingProps);case 24:return gs(n),r=An(dn),e===null?(u=Lu(),u===null&&(u=Ve,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Ou(n),Ua(n,dn,u)):((e.lanes&a)!==0&&(Pu(e,n),oo(n,null,null,a),ro()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ua(n,dn,r)):(r=f.cache,Ua(n,dn,r),r!==u.cache&&wu(n,[dn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function _f(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Cg())e.flags|=8192;else throw xs=ml,Nu}else e.flags&=-16777217}function ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_0(n))if(Cg())e.flags|=8192;else throw xs=ml,Nu}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?_t():536870912,e.lanes|=n,or|=n)}function po(e,n){if(!_e)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Nx(e,n,a){var r=n.pendingProps;switch(bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ji(dn),Qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zs(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Au())),qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(na(n),f!==null?(qe(n),ng(n,f)):(qe(n),_f(n,u,null,r,a))):f?f!==e.memoizedState?(na(n),qe(n),ng(n,f)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&na(n),qe(n),_f(n,u,e,r,a)),null;case 27:if(qt(n),a=ut.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=se.current,Zs(n)?Pp(n):(e=c0(u,r,a),n.stateNode=e,na(n))}return qe(n),null;case 5:if(qt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=se.current,Zs(n))Pp(n);else{var _=Yl(ut.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[un]=n,f[bn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&na(n)}}return qe(n),_f(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ut.current,Zs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[un]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||jg(e.nodeValue,a)),e||Da(n,!0)}else e=Yl(e).createTextNode(r),e[un]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Zs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[un]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[un]=n}else ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),qe(n),null);case 4:return Qt(),e===null&&If(n.stateNode.containerInfo),qe(n),null;case 10:return ji(n.type),qe(n),null;case 19:if(Mt(ln),r=n.memoizedState,r===null)return qe(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)po(r,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=xl(e),f!==null){for(n.flags|=128,po(r,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Dp(a,e),a=a.sibling;return Gt(ln,ln.current&1|2),_e&&Qi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Fe()>Bl&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304)}else{if(!u)if(e=xl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),po(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!_e)return qe(n),null}else 2*Fe()-r.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,u=!0,po(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,a=ln.current,Gt(ln,u?a&1|2:a&1),_e&&Qi(n,r.treeForkCount),e):(qe(n),null);case 22:case 23:return ti(n),Iu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Mt(_s),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(dn),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ox(e,n){switch(bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(dn),Qt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return qt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ti(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Mt(ln),null;case 4:return Qt(),null;case 10:return ji(n.type),null;case 22:case 23:return ti(n),Iu(),e!==null&&Mt(_s),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ji(dn),null;case 25:return null;default:return null}}function ig(e,n){switch(bu(n),n.tag){case 3:ji(dn),Qt();break;case 26:case 27:case 5:qt(n);break;case 4:Qt();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:Mt(ln);break;case 10:ji(n.type);break;case 22:case 23:ti(n),Iu(),e!==null&&Mt(_s);break;case 24:ji(dn)}}function mo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(R){Oe(n,n.return,R)}}function Ba(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var B=a,Q=R;try{Q()}catch(ct){Oe(u,B,ct)}}}r=r.next}while(r!==f)}}catch(ct){Oe(n,n.return,ct)}}function ag(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Zp(n,a)}catch(r){Oe(e,e.return,r)}}}function sg(e,n,a){a.props=ys(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Oe(e,n,r)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Oe(e,n,u)}}function Pi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Oe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Oe(e,n,u)}else a.current=null}function rg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Oe(e,e.return,u)}}function vf(e,n,a){try{var r=e.stateNode;nS(r,e.type,a,n),r[bn]=n}catch(u){Oe(e,e.return,u)}}function og(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||og(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function Nl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Nl(e,n,a),e=e.sibling;e!==null;)Nl(e,n,a),e=e.sibling}function lg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[un]=e,n[bn]=a}catch(f){Oe(e,e.return,f)}}var ia=!1,mn=!1,Mf=!1,cg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Px(e,n){if(e=e.containerInfo,Vf=tc,e=Mp(e),hu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,R=-1,B=-1,Q=0,ct=0,gt=e,at=null;e:for(;;){for(var st;gt!==a||u!==0&&gt.nodeType!==3||(R=_+u),gt!==f||r!==0&&gt.nodeType!==3||(B=_+r),gt.nodeType===3&&(_+=gt.nodeValue.length),(st=gt.firstChild)!==null;)at=gt,gt=st;for(;;){if(gt===e)break e;if(at===a&&++Q===u&&(R=_),at===f&&++ct===r&&(B=_),(st=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=st}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xf={focusedElem:e,selectionRange:a},tc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=ys(a.type,u);e=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Jt){Oe(a,a.return,Jt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function ug(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),r&4&&mo(5,a);break;case 1:if(sa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Oe(a,a.return,_)}else{var u=ys(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Oe(a,a.return,_)}}r&64&&ag(a),r&512&&go(a,a.return);break;case 3:if(sa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Zp(e,n)}catch(_){Oe(a,a.return,_)}}break;case 27:n===null&&r&4&&lg(a);case 26:case 5:sa(e,a),n===null&&r&4&&rg(a),r&512&&go(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),r&4&&hg(e,a);break;case 13:sa(e,a),r&4&&pg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=kx.bind(null,a),uS(e,a))));break;case 22:if(r=a.memoizedState!==null||ia,!r){n=n!==null&&n.memoizedState!==null||mn,u=ia;var f=mn;ia=r,(mn=n)&&!f?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=u,mn=f}break;case 30:break;default:sa(e,a)}}function fg(e){var n=e.alternate;n!==null&&(e.alternate=null,fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ba(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Hn=!1;function aa(e,n,a){for(a=a.child;a!==null;)dg(e,n,a),a=a.sibling}function dg(e,n,a){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(rt,a)}catch{}switch(a.tag){case 26:mn||Pi(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Pi(a,n);var r=Je,u=Hn;ka(a.type)&&(Je=a.stateNode,Hn=!1),aa(e,n,a),To(a.stateNode),Je=r,Hn=u;break;case 5:mn||Pi(a,n);case 6:if(r=Je,u=Hn,Je=null,aa(e,n,a),Je=r,Hn=u,Je!==null)if(Hn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Oe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Oe(a,n,f)}break;case 18:Je!==null&&(Hn?(e=Je,a0(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),mr(e)):a0(Je,a.stateNode));break;case 4:r=Je,u=Hn,Je=a.stateNode.containerInfo,Hn=!0,aa(e,n,a),Je=r,Hn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),mn||Ba(4,a,n),aa(e,n,a);break;case 1:mn||(Pi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&sg(a,n,r)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:mn=(r=mn)||a.memoizedState!==null,aa(e,n,a),mn=r;break;default:aa(e,n,a)}}function hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{mr(e)}catch(a){Oe(n,n.return,a)}}}function pg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{mr(e)}catch(a){Oe(n,n.return,a)}}function Fx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new cg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new cg),n;default:throw Error(s(435,e.tag))}}function Ol(e,n){var a=Fx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Wx.bind(null,e,r);r.then(u,u)}})}function Gn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,_=n,R=_;t:for(;R!==null;){switch(R.tag){case 27:if(ka(R.type)){Je=R.stateNode,Hn=!1;break t}break;case 5:Je=R.stateNode,Hn=!1;break t;case 3:case 4:Je=R.stateNode.containerInfo,Hn=!0;break t}R=R.return}if(Je===null)throw Error(s(160));dg(f,_,u),Je=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)mg(n,e),n=n.sibling}var Ei=null;function mg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),r&4&&(Ba(3,e,e.return),mo(3,e),Ba(5,e,e.return));break;case 1:Gn(n,e),Vn(e),r&512&&(mn||a===null||Pi(a,a.return)),r&64&&ia&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ei;if(Gn(n,e),Vn(e),r&512&&(mn||a===null||Pi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ea]||f[un]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[un]=e,fn(f),r=f;break t;case"link":var _=m0("link","href",u).get(r+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(_=m0("meta","content",u).get(r+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[un]=e,fn(f),r=f}e.stateNode=r}else g0(u,e.type,e.stateNode);else e.stateNode=p0(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?g0(u,e.type,e.stateNode):p0(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&vf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,e),Vn(e),r&512&&(mn||a===null||Pi(a,a.return)),a!==null&&r&4&&vf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),r&512&&(mn||a===null||Pi(a,a.return)),e.flags&32){u=e.stateNode;try{Qn(u,"")}catch(Ht){Oe(e,e.return,Ht)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,vf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Mf=!0);break;case 6:if(Gn(n,e),Vn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ht){Oe(e,e.return,Ht)}}break;case 3:if(Ql=null,u=Ei,Ei=Zl(n.containerInfo),Gn(n,e),Ei=u,Vn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{mr(n.containerInfo)}catch(Ht){Oe(e,e.return,Ht)}Mf&&(Mf=!1,gg(e));break;case 4:r=Ei,Ei=Zl(e.stateNode.containerInfo),Gn(n,e),Vn(e),Ei=r;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=Fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,Q=ia,ct=mn;if(ia=Q||u,mn=ct||B,Gn(n,e),mn=ct,ia=Q,Vn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ia||mn||Es(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=B.stateNode;var gt=B.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;R.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Ht){Oe(B,B.return,Ht)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ht){Oe(B,B.return,Ht)}}}else if(n.tag===18){if(a===null){B=n;try{var st=B.stateNode;u?s0(st,!0):s0(B.stateNode,!1)}catch(Ht){Oe(B,B.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ol(e,a))));break;case 19:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ol(e,r)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(og(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=xf(e);Nl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Qn(_,""),a.flags&=-33);var R=xf(e);Nl(e,R,_);break;case 3:case 4:var B=a.stateNode.containerInfo,Q=xf(e);Sf(e,Q,B);break;default:throw Error(s(161))}}catch(ct){Oe(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ug(e,n.alternate,n),n=n.sibling}function Es(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Es(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&sg(n,n.return,a),Es(n);break;case 27:To(n.stateNode);case 26:case 5:Pi(n,n.return),Es(n);break;case 22:n.memoizedState===null&&Es(n);break;case 30:Es(n);break;default:Es(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:ra(u,f,a),mo(4,f);break;case 1:if(ra(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Oe(r,r.return,Q)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Yp(B[u],R)}catch(Q){Oe(r,r.return,Q)}}a&&_&64&&ag(f),go(f,f.return);break;case 27:lg(f);case 26:case 5:ra(u,f,a),a&&r===null&&_&4&&rg(f),go(f,f.return);break;case 12:ra(u,f,a);break;case 31:ra(u,f,a),a&&_&4&&hg(u,f);break;case 13:ra(u,f,a),a&&_&4&&pg(u,f);break;case 22:f.memoizedState===null&&ra(u,f,a),go(f,f.return);break;case 30:break;default:ra(u,f,a)}n=n.sibling}}function yf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&eo(a))}function Ef(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e))}function bi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_g(e,n,a,r),n=n.sibling}function _g(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:bi(e,n,a,r),u&2048&&mo(9,n);break;case 1:bi(e,n,a,r);break;case 3:bi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&eo(e)));break;case 12:if(u&2048){bi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Oe(n,n.return,B)}}else bi(e,n,a,r);break;case 31:bi(e,n,a,r);break;case 13:bi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?bi(e,n,a,r):_o(e,n):f._visibility&2?bi(e,n,a,r):(f._visibility|=2,ar(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&yf(_,n);break;case 24:bi(e,n,a,r),u&2048&&Ef(n.alternate,n);break;default:bi(e,n,a,r)}}function ar(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,B=r,Q=_.flags;switch(_.tag){case 0:case 11:case 15:ar(f,_,R,B,u),mo(8,_);break;case 23:break;case 22:var ct=_.stateNode;_.memoizedState!==null?ct._visibility&2?ar(f,_,R,B,u):_o(f,_):(ct._visibility|=2,ar(f,_,R,B,u)),u&&Q&2048&&yf(_.alternate,_);break;case 24:ar(f,_,R,B,u),u&&Q&2048&&Ef(_.alternate,_);break;default:ar(f,_,R,B,u)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:_o(a,r),u&2048&&yf(r.alternate,r);break;case 24:_o(a,r),u&2048&&Ef(r.alternate,r);break;default:_o(a,r)}n=n.sibling}}var vo=8192;function sr(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)vg(e,n,a),e=e.sibling}function vg(e,n,a){switch(e.tag){case 26:sr(e,n,a),e.flags&vo&&e.memoizedState!==null&&yS(a,Ei,e.memoizedState,e.memoizedProps);break;case 5:sr(e,n,a);break;case 3:case 4:var r=Ei;Ei=Zl(e.stateNode.containerInfo),sr(e,n,a),Ei=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=vo,vo=16777216,sr(e,n,a),vo=r):sr(e,n,a));break;default:sr(e,n,a)}}function xg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function xo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,Mg(r,e)}xg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sg(e),e=e.sibling}function Sg(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pl(e)):xo(e);break;default:xo(e)}}function Pl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,Mg(r,e)}xg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}e=e.sibling}}function Mg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:eo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Mn=r;else t:for(a=e;Mn!==null;){r=Mn;var u=r.sibling,f=r.return;if(fg(r),r===a){Mn=null;break t}if(u!==null){u.return=f,Mn=u;break t}Mn=f}}}var Bx={getCacheForType:function(e){var n=An(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(dn).controller.signal}},zx=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Ve=null,fe=null,he=0,Ne=0,ei=null,za=!1,rr=!1,bf=!1,oa=0,an=0,Ia=0,bs=0,Tf=0,ni=0,or=0,So=null,Xn=null,Af=!1,Fl=0,yg=0,Bl=1/0,zl=null,Ha=null,vn=0,Ga=null,lr=null,la=0,Rf=0,Cf=null,Eg=null,Mo=0,wf=null;function ii(){return(Ae&2)!==0&&he!==0?he&-he:O.T!==null?Pf():Xr()}function bg(){if(ni===0)if((he&536870912)===0||_e){var e=$t;$t<<=1,($t&3932160)===0&&($t=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function kn(e,n,a){(e===Ve&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(cr(e,0),Va(e,he,ni,!1)),Bt(e,a),((Ae&2)===0||e!==Ve)&&(e===Ve&&((Ae&2)===0&&(bs|=a),an===4&&Va(e,he,ni,!1)),Fi(e))}function Tg(e,n,a){if((Ae&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n),u=r?Gx(e,n):Uf(e,n,!0),f=r;do{if(u===0){rr&&!r&&Va(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Ix(a)){u=Uf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=e;u=So;var B=R.current.memoizedState.isDehydrated;if(B&&(cr(R,_).flags|=256),_=Uf(R,_,!1),_!==2){if(bf&&!B){R.errorRecoveryDisabledLanes|=f,bs|=f,u=4;break t}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){cr(e,0),Va(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Va(r,n,ni,!za);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Fl+300-Fe(),10<u)){if(Va(r,n,ni,!za),ft(r,0,!0)!==0)break t;la=n,r.timeoutHandle=n0(Ag.bind(null,r,a,Xn,zl,Af,n,ni,bs,or,za,f,"Throttled",-0,0),u);break t}Ag(r,a,Xn,zl,Af,n,ni,bs,or,za,f,null,-0,0)}}break}while(!0);Fi(e)}function Ag(e,n,a,r,u,f,_,R,B,Q,ct,gt,at,st){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},vg(n,f,gt);var Ht=(f&62914560)===f?Fl-Fe():(f&4194048)===f?yg-Fe():0;if(Ht=ES(gt,Ht),Ht!==null){la=f,e.cancelPendingCommit=Ht(Og.bind(null,e,n,f,a,r,u,_,R,B,ct,gt,null,at,st)),Va(e,f,_,!Q);return}}Og(e,n,f,a,r,u,_,R,B)}function Ix(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Va(e,n,a,r){n&=~Tf,n&=~bs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&we(e,a,n)}function Il(){return(Ae&6)===0?(yo(0),!1):!0}function Df(){if(fe!==null){if(Ne===0)var e=fe.return;else e=fe,Ji=ms=null,Wu(e),$s=null,io=0,e=fe;for(;e!==null;)ig(e.alternate,e),e=e.return;fe=null}}function cr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,Df(),Ve=e,fe=a=Ki(e.current,null),he=n,Ne=0,ei=null,za=!1,rr=At(e,n),bf=!1,or=ni=Tf=bs=Ia=an=0,Xn=So=null,Af=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ot(r),f=1<<u;n|=e[u],r&=~f}return oa=n,rl(),a}function Rg(e,n){ae=null,O.H=fo,n===js||n===pl?(n=Xp(),Ne=3):n===Nu?(n=Xp(),Ne=4):Ne=n===lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,fe===null&&(an=1,Cl(e,li(n,e.current)))}function Cg(){var e=$n.current;return e===null?!0:(he&4194048)===he?di===null:(he&62914560)===he||(he&536870912)!==0?e===di:!1}function wg(){var e=O.H;return O.H=fo,e===null?fo:e}function Dg(){var e=O.A;return O.A=Bx,e}function Hl(){an=4,za||(he&4194048)!==he&&$n.current!==null||(rr=!0),(Ia&134217727)===0&&(bs&134217727)===0||Ve===null||Va(Ve,he,ni,!1)}function Uf(e,n,a){var r=Ae;Ae|=2;var u=wg(),f=Dg();(Ve!==e||he!==n)&&(zl=null,cr(e,n)),n=!1;var _=an;t:do try{if(Ne!==0&&fe!==null){var R=fe,B=ei;switch(Ne){case 8:Df(),_=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var Q=Ne;if(Ne=0,ei=null,ur(e,R,B,Q),a&&rr){_=0;break t}break;default:Q=Ne,Ne=0,ei=null,ur(e,R,B,Q)}}Hx(),_=an;break}catch(ct){Rg(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Ji=ms=null,Ae=r,O.H=u,O.A=f,fe===null&&(Ve=null,he=0,rl()),_}function Hx(){for(;fe!==null;)Ug(fe)}function Gx(e,n){var a=Ae;Ae|=2;var r=wg(),u=Dg();Ve!==e||he!==n?(zl=null,Bl=Fe()+500,cr(e,n)):rr=At(e,n);t:do try{if(Ne!==0&&fe!==null){n=fe;var f=ei;e:switch(Ne){case 1:Ne=0,ei=null,ur(e,n,f,1);break;case 2:case 9:if(Gp(f)){Ne=0,ei=null,Lg(n);break}n=function(){Ne!==2&&Ne!==9||Ve!==e||(Ne=7),Fi(e)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:Gp(f)?(Ne=0,ei=null,Lg(n)):(Ne=0,ei=null,ur(e,n,f,7));break;case 5:var _=null;switch(fe.tag){case 26:_=fe.memoizedState;case 5:case 27:var R=fe;if(_?_0(_):R.stateNode.complete){Ne=0,ei=null;var B=R.sibling;if(B!==null)fe=B;else{var Q=R.return;Q!==null?(fe=Q,Gl(Q)):fe=null}break e}}Ne=0,ei=null,ur(e,n,f,5);break;case 6:Ne=0,ei=null,ur(e,n,f,6);break;case 8:Df(),an=6;break t;default:throw Error(s(462))}}Vx();break}catch(ct){Rg(e,ct)}while(!0);return Ji=ms=null,O.H=r,O.A=u,Ae=a,fe!==null?0:(Ve=null,he=0,rl(),an)}function Vx(){for(;fe!==null&&!en();)Ug(fe)}function Ug(e){var n=eg(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?Gl(e):fe=n}function Lg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Km(a,n,n.pendingProps,n.type,void 0,he);break;case 11:n=Km(a,n,n.pendingProps,n.type.render,n.ref,he);break;case 5:Wu(n);default:ig(a,n),n=fe=Dp(n,oa),n=eg(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?Gl(e):fe=n}function ur(e,n,a,r){Ji=ms=null,Wu(n),$s=null,io=0;var u=n.return;try{if(Dx(e,u,n,a,he)){an=1,Cl(e,li(a,e.current)),fe=null;return}}catch(f){if(u!==null)throw fe=u,f;an=1,Cl(e,li(a,e.current)),fe=null;return}n.flags&32768?(_e||r===1?e=!0:rr||(he&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=$n.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ng(n,e)):Gl(n)}function Gl(e){var n=e;do{if((n.flags&32768)!==0){Ng(n,za);return}e=n.return;var a=Nx(n.alternate,n,oa);if(a!==null){fe=a;return}if(n=n.sibling,n!==null){fe=n;return}fe=n=e}while(n!==null);an===0&&(an=5)}function Ng(e,n){do{var a=Ox(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);an=6,fe=null}function Og(e,n,a,r,u,f,_,R,B){e.cancelPendingCommit=null;do Vl();while(vn!==0);if((Ae&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=vu,Ze(e,a,f,_,R,B),e===Ve&&(fe=Ve=null,he=0),lr=n,Ga=e,la=a,Rf=f,Cf=u,Eg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qx(Y,function(){return Ig(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=I.p,I.p=2,_=Ae,Ae|=4;try{Px(e,n,a)}finally{Ae=_,I.p=u,O.T=r}}vn=1,Pg(),Fg(),Bg()}}function Pg(){if(vn===1){vn=0;var e=Ga,n=lr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=I.p;I.p=2;var u=Ae;Ae|=4;try{mg(n,e);var f=Xf,_=Mp(e.containerInfo),R=f.focusedElem,B=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Sp(R.ownerDocument.documentElement,R)){if(B!==null&&hu(R)){var Q=B.start,ct=B.end;if(ct===void 0&&(ct=Q),"selectionStart"in R)R.selectionStart=Q,R.selectionEnd=Math.min(ct,R.value.length);else{var gt=R.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var st=at.getSelection(),Ht=R.textContent.length,Jt=Math.min(B.start,Ht),Ie=B.end===void 0?Jt:Math.min(B.end,Ht);!st.extend&&Jt>Ie&&(_=Ie,Ie=Jt,Jt=_);var q=xp(R,Jt),H=xp(R,Ie);if(q&&H&&(st.rangeCount!==1||st.anchorNode!==q.node||st.anchorOffset!==q.offset||st.focusNode!==H.node||st.focusOffset!==H.offset)){var K=gt.createRange();K.setStart(q.node,q.offset),st.removeAllRanges(),Jt>Ie?(st.addRange(K),st.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),st.addRange(K))}}}}for(gt=[],st=R;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<gt.length;R++){var pt=gt[R];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}tc=!!Vf,Xf=Vf=null}finally{Ae=u,I.p=r,O.T=a}}e.current=n,vn=2}}function Fg(){if(vn===2){vn=0;var e=Ga,n=lr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=I.p;I.p=2;var u=Ae;Ae|=4;try{ug(e,n.alternate,n)}finally{Ae=u,I.p=r,O.T=a}}vn=3}}function Bg(){if(vn===4||vn===3){vn=0,W();var e=Ga,n=lr,a=la,r=Eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,lr=Ga=null,zg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ha=null),Vr(a),n=n.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=I.p,I.p=2,O.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var R=r[_];f(R.value,{componentStack:R.stack})}}finally{O.T=n,I.p=u}}(la&3)!==0&&Vl(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===wf?Mo++:(Mo=0,wf=e):Mo=0,yo(0)}}function zg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,eo(n)))}function Vl(){return Pg(),Fg(),Bg(),Ig()}function Ig(){if(vn!==5)return!1;var e=Ga,n=Rf;Rf=0;var a=Vr(la),r=O.T,u=I.p;try{I.p=32>a?32:a,O.T=null,a=Cf,Cf=null;var f=Ga,_=la;if(vn=0,lr=Ga=null,la=0,(Ae&6)!==0)throw Error(s(331));var R=Ae;if(Ae|=4,Sg(f.current),_g(f,f.current,_,a),Ae=R,yo(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(rt,f)}catch{}return!0}finally{I.p=u,O.T=r,zg(e,n)}}function Hg(e,n,a){n=li(a,n),n=of(e.stateNode,n,2),e=Oa(e,n,2),e!==null&&(Bt(e,2),Fi(e))}function Oe(e,n,a){if(e.tag===3)Hg(e,e,a);else for(;n!==null;){if(n.tag===3){Hg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ha===null||!Ha.has(r))){e=li(a,e),a=Gm(2),r=Oa(n,a,2),r!==null&&(Vm(a,r,n,e),Bt(r,2),Fi(r));break}}n=n.return}}function Lf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new zx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(bf=!0,u.add(a),e=Xx.bind(null,e,n,a),n.then(e,e))}function Xx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(he&a)===a&&(an===4||an===3&&(he&62914560)===he&&300>Fe()-Fl?(Ae&2)===0&&cr(e,0):Tf|=a,or===he&&(or=0)),Fi(e)}function Gg(e,n){n===0&&(n=_t()),e=ds(e,n),e!==null&&(Bt(e,n),Fi(e))}function kx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Gg(e,a)}function Wx(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Gg(e,a)}function qx(e,n){return on(e,n)}var Xl=null,fr=null,Nf=!1,kl=!1,Of=!1,Xa=0;function Fi(e){e!==fr&&e.next===null&&(fr===null?Xl=fr=e:fr=fr.next=e),kl=!0,Nf||(Nf=!0,Zx())}function yo(e,n){if(!Of&&kl){Of=!0;do for(var a=!1,r=Xl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Wg(r,f))}else f=he,f=ft(r,r===Ve?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||At(r,f)||(a=!0,Wg(r,f));r=r.next}while(a);Of=!1}}function Yx(){Vg()}function Vg(){kl=Nf=!1;var e=0;Xa!==0&&aS()&&(e=Xa);for(var n=Fe(),a=null,r=Xl;r!==null;){var u=r.next,f=Xg(r,n);f===0?(r.next=null,a===null?Xl=u:a.next=u,u===null&&(fr=a)):(a=r,(e!==0||(f&3)!==0)&&(kl=!0)),r=u}vn!==0&&vn!==5||yo(e),Xa!==0&&(Xa=0)}function Xg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Ot(f),R=1<<_,B=u[_];B===-1?((R&a)===0||(R&r)!==0)&&(u[_]=Nt(R,n)):B<=n&&(e.expiredLanes|=R),f&=~R}if(n=Ve,a=he,a=ft(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Xe(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||At(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Xe(r),Vr(a)){case 2:case 8:a=M;break;case 32:a=Y;break;case 268435456:a=ot;break;default:a=Y}return r=kg.bind(null,e),a=on(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Xe(r),e.callbackPriority=2,e.callbackNode=null,2}function kg(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vl()&&e.callbackNode!==a)return null;var r=he;return r=ft(e,e===Ve?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Tg(e,r,n),Xg(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?kg.bind(null,e):null)}function Wg(e,n){if(Vl())return null;Tg(e,n,!0)}function Zx(){rS(function(){(Ae&6)!==0?on(D,Yx):Vg()})}function Pf(){if(Xa===0){var e=Qs;e===0&&(e=Yt,Yt<<=1,(Yt&261888)===0&&(Yt=256)),Xa=e}return Xa}function qg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ls(""+e)}function Yg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Kx(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=qg((u[bn]||null).action),_=r.submitter;_&&(n=(n=_[bn]||null)?qg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new nl("action","action",null,r,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Xa!==0){var B=_?Yg(u,_):new FormData(u);tf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=_?Yg(u,_):new FormData(u),tf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Ff=0;Ff<_u.length;Ff++){var Bf=_u[Ff],Qx=Bf.toLowerCase(),Jx=Bf[0].toUpperCase()+Bf.slice(1);yi(Qx,"on"+Jx)}yi(bp,"onAnimationEnd"),yi(Tp,"onAnimationIteration"),yi(Ap,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(hx,"onTransitionRun"),yi(px,"onTransitionStart"),yi(mx,"onTransitionCancel"),yi(Rp,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function Zg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],B=R.instance,Q=R.currentTarget;if(R=R.listener,B!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=Q;try{f(u)}catch(ct){sl(ct)}u.currentTarget=null,f=B}else for(_=0;_<r.length;_++){if(R=r[_],B=R.instance,Q=R.currentTarget,R=R.listener,B!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=Q;try{f(u)}catch(ct){sl(ct)}u.currentTarget=null,f=B}}}}function de(e,n){var a=n[ss];a===void 0&&(a=n[ss]=new Set);var r=e+"__bubble";a.has(r)||(Kg(n,e,2,!1),a.add(r))}function zf(e,n,a){var r=0;n&&(r|=4),Kg(a,e,r,n)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function If(e){if(!e[Wl]){e[Wl]=!0,jo.forEach(function(a){a!=="selectionchange"&&(jx.has(a)||zf(a,!1,e),zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wl]||(n[Wl]=!0,zf("selectionchange",!1,n))}}function Kg(e,n,a,r){switch(b0(n)){case 2:var u=AS;break;case 8:u=RS;break;default:u=td}a=u.bind(null,n,a,e),u=void 0,!au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Hf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=r.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Wi(R),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){r=f=_;continue t}R=R.parentNode}}r=r.return}tp(function(){var Q=f,ct=nu(a),gt=[];t:{var at=Cp.get(e);if(at!==void 0){var st=nl,Ht=e;switch(e){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":st=Wv;break;case"focusin":Ht="focus",st=lu;break;case"focusout":Ht="blur",st=lu;break;case"beforeblur":case"afterblur":st=lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Zv;break;case bp:case Tp:case Ap:st=Fv;break;case Rp:st=Qv;break;case"scroll":case"scrollend":st=Uv;break;case"wheel":st=jv;break;case"copy":case"cut":case"paste":st=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=sp;break;case"toggle":case"beforetoggle":st=tx}var Jt=(n&4)!==0,Ie=!Jt&&(e==="scroll"||e==="scrollend"),q=Jt?at!==null?at+"Capture":null:at;Jt=[];for(var H=Q,K;H!==null;){var pt=H;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||q===null||(pt=kr(H,q),pt!=null&&Jt.push(bo(H,pt,K))),Ie)break;H=H.return}0<Jt.length&&(at=new st(at,Ht,null,a,ct),gt.push({event:at,listeners:Jt}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&a!==eu&&(Ht=a.relatedTarget||a.fromElement)&&(Wi(Ht)||Ht[zn]))break t;if((st||at)&&(at=ct.window===ct?ct:(at=ct.ownerDocument)?at.defaultView||at.parentWindow:window,st?(Ht=a.relatedTarget||a.toElement,st=Q,Ht=Ht?Wi(Ht):null,Ht!==null&&(Ie=c(Ht),Jt=Ht.tag,Ht!==Ie||Jt!==5&&Jt!==27&&Jt!==6)&&(Ht=null)):(st=null,Ht=Q),st!==Ht)){if(Jt=ip,pt="onMouseLeave",q="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(Jt=sp,pt="onPointerLeave",q="onPointerEnter",H="pointer"),Ie=st==null?at:os(st),K=Ht==null?at:os(Ht),at=new Jt(pt,H+"leave",st,a,ct),at.target=Ie,at.relatedTarget=K,pt=null,Wi(ct)===Q&&(Jt=new Jt(q,H+"enter",Ht,a,ct),Jt.target=K,Jt.relatedTarget=Ie,pt=Jt),Ie=pt,st&&Ht)e:{for(Jt=$x,q=st,H=Ht,K=0,pt=q;pt;pt=Jt(pt))K++;pt=0;for(var Kt=H;Kt;Kt=Jt(Kt))pt++;for(;0<K-pt;)q=Jt(q),K--;for(;0<pt-K;)H=Jt(H),pt--;for(;K--;){if(q===H||H!==null&&q===H.alternate){Jt=q;break e}q=Jt(q),H=Jt(H)}Jt=null}else Jt=null;st!==null&&Qg(gt,at,st,Jt,!1),Ht!==null&&Ie!==null&&Qg(gt,Ie,Ht,Jt,!0)}}t:{if(at=Q?os(Q):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var ye=hp;else if(fp(at))if(pp)ye=ux;else{ye=lx;var Xt=ox}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?Q&&Ce(Q.elementType)&&(ye=hp):ye=cx;if(ye&&(ye=ye(e,Q))){dp(gt,ye,a,ct);break t}Xt&&Xt(e,at,Q),e==="focusout"&&Q&&at.type==="number"&&Q.memoizedProps.value!=null&&ue(at,"number",at.value)}switch(Xt=Q?os(Q):window,e){case"focusin":(fp(Xt)||Xt.contentEditable==="true")&&(Vs=Xt,pu=Q,jr=null);break;case"focusout":jr=pu=Vs=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,yp(gt,a,ct);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":yp(gt,a,ct)}var re;if(uu)t:{switch(e){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else Gs?cp(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(rp&&a.locale!=="ko"&&(Gs||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&Gs&&(re=ep()):(Ra=ct,su="value"in Ra?Ra.value:Ra.textContent,Gs=!0)),Xt=ql(Q,pe),0<Xt.length&&(pe=new ap(pe,e,null,a,ct),gt.push({event:pe,listeners:Xt}),re?pe.data=re:(re=up(a),re!==null&&(pe.data=re)))),(re=nx?ix(e,a):ax(e,a))&&(pe=ql(Q,"onBeforeInput"),0<pe.length&&(Xt=new ap("onBeforeInput","beforeinput",null,a,ct),gt.push({event:Xt,listeners:pe}),Xt.data=re)),Kx(gt,e,Q,a,ct)}Zg(gt,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ql(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=kr(e,a),u!=null&&r.unshift(bo(e,u,f)),u=kr(e,n),u!=null&&r.push(bo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function $x(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qg(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,B=R.alternate,Q=R.stateNode;if(R=R.tag,B!==null&&B===r)break;R!==5&&R!==26&&R!==27||Q===null||(B=Q,u?(Q=kr(a,f),Q!=null&&_.unshift(bo(a,Q,B))):u||(Q=kr(a,f),Q!=null&&_.push(bo(a,Q,B)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var tS=/\r\n?/g,eS=/\u0000|\uFFFD/g;function Jg(e){return(typeof e=="string"?e:""+e).replace(tS,`
`).replace(eS,"")}function jg(e,n){return n=Jg(n),Jg(e)===n}function ze(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Qn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Qn(e,""+r);break;case"className":It(e,"class",r);break;case"tabIndex":It(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":It(e,a,r);break;case"style":Mi(e,r,f);break;case"data":if(n!=="object"){It(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ls(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(e,n,"name",u.name,u,null),ze(e,n,"formEncType",u.formEncType,u,null),ze(e,n,"formMethod",u.formMethod,u,null),ze(e,n,"formTarget",u.formTarget,u,null)):(ze(e,n,"encType",u.encType,u,null),ze(e,n,"method",u.method,u,null),ze(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=ls(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Yi);break;case"onScroll":r!=null&&de("scroll",e);break;case"onScrollEnd":r!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=ls(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":de("beforetoggle",e),de("toggle",e),wt(e,"popover",r);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":wt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Li.get(a)||a,wt(e,a,r))}}function Gf(e,n,a,r,u,f){switch(a){case"style":Mi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Qn(e,r):(typeof r=="number"||typeof r=="bigint")&&Qn(e,""+r);break;case"onScroll":r!=null&&de("scroll",e);break;case"onScrollEnd":r!=null&&de("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):wt(e,a,r)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,f,_,a,null)}}u&&ze(e,n,"srcSet",a.srcSet,a,null),r&&ze(e,n,"src",a.src,a,null);return;case"input":de("invalid",e);var R=f=_=u=null,B=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":u=ct;break;case"type":_=ct;break;case"checked":B=ct;break;case"defaultChecked":Q=ct;break;case"value":f=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ze(e,n,r,ct,a,null)}}Dn(e,f,R,B,Q,_,u,!1);return;case"select":de("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:ze(e,n,u,R,a,null)}n=f,a=_,e.multiple=!!r,n!=null?_n(e,!!r,n,!1):a!=null&&_n(e,!!r,a,!0);return;case"textarea":de("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:ze(e,n,_,R,a,null)}Si(e,r,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ze(e,n,B,r,a,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(r=0;r<Eo.length;r++)de(Eo[r],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(e,n,Q,r,a,null)}return;default:if(Ce(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&Gf(e,n,ct,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&ze(e,n,R,r,a,null))}function nS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,B=null,Q=null,ct=null;for(st in a){var gt=a[st];if(a.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=gt;default:r.hasOwnProperty(st)||ze(e,n,st,null,r,gt)}}for(var at in r){var st=r[at];if(gt=a[at],r.hasOwnProperty(at)&&(st!=null||gt!=null))switch(at){case"type":f=st;break;case"name":u=st;break;case"checked":Q=st;break;case"defaultChecked":ct=st;break;case"value":_=st;break;case"defaultValue":R=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==gt&&ze(e,n,at,st,r,gt)}}Pt(e,_,R,B,Q,ct,f,u);return;case"select":st=_=R=at=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":st=B;default:r.hasOwnProperty(f)||ze(e,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":at=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==B&&ze(e,n,u,f,r,B)}n=R,a=_,r=st,at!=null?_n(e,!!a,at,!1):!!r!=!!a&&(n!=null?_n(e,!!a,n,!0):_n(e,!!a,a?[]:"",!1));return;case"textarea":st=at=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:ze(e,n,R,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":at=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&ze(e,n,_,u,r,f)}Kn(e,at,st);return;case"option":for(var Ht in a)if(at=a[Ht],a.hasOwnProperty(Ht)&&at!=null&&!r.hasOwnProperty(Ht))switch(Ht){case"selected":e.selected=!1;break;default:ze(e,n,Ht,null,r,at)}for(B in r)if(at=r[B],st=a[B],r.hasOwnProperty(B)&&at!==st&&(at!=null||st!=null))switch(B){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:ze(e,n,B,at,r,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)at=a[Jt],a.hasOwnProperty(Jt)&&at!=null&&!r.hasOwnProperty(Jt)&&ze(e,n,Jt,null,r,at);for(Q in r)if(at=r[Q],st=a[Q],r.hasOwnProperty(Q)&&at!==st&&(at!=null||st!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:ze(e,n,Q,at,r,st)}return;default:if(Ce(n)){for(var Ie in a)at=a[Ie],a.hasOwnProperty(Ie)&&at!==void 0&&!r.hasOwnProperty(Ie)&&Gf(e,n,Ie,void 0,r,at);for(ct in r)at=r[ct],st=a[ct],!r.hasOwnProperty(ct)||at===st||at===void 0&&st===void 0||Gf(e,n,ct,at,r,st);return}}for(var q in a)at=a[q],a.hasOwnProperty(q)&&at!=null&&!r.hasOwnProperty(q)&&ze(e,n,q,null,r,at);for(gt in r)at=r[gt],st=a[gt],!r.hasOwnProperty(gt)||at===st||at==null&&st==null||ze(e,n,gt,at,r,st)}function $g(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function iS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&$g(_)){for(_=0,R=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],Q=B.startTime;if(Q>R)break;var ct=B.transferSize,gt=B.initiatorType;ct&&$g(gt)&&(B=B.responseEnd,_+=ct*(B<R?1:(R-Q)/(B-Q)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vf=null,Xf=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function t0(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e0(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function aS(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var n0=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,rS=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(e){return i0.resolve(null).then(e).catch(oS)}:n0;function oS(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function a0(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),mr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")To(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Ea]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&To(e.ownerDocument.body);a=u}while(a);mr(n)}function s0(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),ba(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function lS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ea])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function cS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function r0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function Yf(e){return e.data==="$?"||e.data==="$~"}function Zf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function uS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Kf=null;function o0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function l0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function c0(e,n,a){switch(n=Yl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ba(e)}var pi=new Map,u0=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=I.d;I.d={f:fS,r:dS,D:hS,C:pS,L:mS,m:gS,X:vS,S:_S,M:xS};function fS(){var e=ca.f(),n=Il();return e||n}function dS(e){var n=qi(e);n!==null&&n.tag===5&&n.type==="form"?Rm(n):ca.r(e)}var dr=typeof document>"u"?null:document;function f0(e,n,a){var r=dr;if(r&&typeof n=="string"&&n){var u=Ue(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),u0.has(u)||(u0.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",e),fn(n),r.head.appendChild(n)))}}function hS(e){ca.D(e),f0("dns-prefetch",e,null)}function pS(e,n){ca.C(e,n),f0("preconnect",e,n)}function mS(e,n,a){ca.L(e,n,a);var r=dr;if(r&&e&&n){var u='link[rel="preload"][as="'+Ue(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ue(a.imageSizes)+'"]')):u+='[href="'+Ue(e)+'"]';var f=u;switch(n){case"style":f=hr(e);break;case"script":f=pr(e)}pi.has(f)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Ao(f))||n==="script"&&r.querySelector(Ro(f))||(n=r.createElement("link"),Cn(n,"link",e),fn(n),r.head.appendChild(n)))}}function gS(e,n){ca.m(e,n);var a=dr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ue(r)+'"][href="'+Ue(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=pr(e)}if(!pi.has(f)&&(e=v({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ro(f)))return}r=a.createElement("link"),Cn(r,"link",e),fn(r),a.head.appendChild(r)}}}function _S(e,n,a){ca.S(e,n,a);var r=dr;if(r&&e){var u=Ta(r).hoistableStyles,f=hr(e);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(Ao(f)))R.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&Qf(e,a);var B=_=r.createElement("link");fn(B),Cn(B,"link",e),B._p=new Promise(function(Q,ct){B.onload=Q,B.onerror=ct}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Kl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function vS(e,n){ca.X(e,n);var a=dr;if(a&&e){var r=Ta(a).hoistableScripts,u=pr(e),f=r.get(u);f||(f=a.querySelector(Ro(u)),f||(e=v({src:e,async:!0},n),(n=pi.get(u))&&Jf(e,n),f=a.createElement("script"),fn(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function xS(e,n){ca.M(e,n);var a=dr;if(a&&e){var r=Ta(a).hoistableScripts,u=pr(e),f=r.get(u);f||(f=a.querySelector(Ro(u)),f||(e=v({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&Jf(e,n),f=a.createElement("script"),fn(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function d0(e,n,a,r){var u=(u=ut.current)?Zl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hr(a.href),a=Ta(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=hr(a.href);var f=Ta(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(Ao(e)))&&!f._p&&(_.instance=f,_.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||SS(u,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=pr(a),a=Ta(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function hr(e){return'href="'+Ue(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function h0(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function SS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),fn(n),e.head.appendChild(n))}function pr(e){return'[src="'+Ue(e)+'"]'}function Ro(e){return"script[async]"+e}function p0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Ue(a.href)+'"]');if(r)return n.instance=r,fn(r),r;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),fn(r),Cn(r,"style",u),Kl(r,a.precedence,e),n.instance=r;case"stylesheet":u=hr(a.href);var f=e.querySelector(Ao(u));if(f)return n.state.loading|=4,n.instance=f,fn(f),f;r=h0(a),(u=pi.get(u))&&Qf(r,u),f=(e.ownerDocument||e).createElement("link"),fn(f);var _=f;return _._p=new Promise(function(R,B){_.onload=R,_.onerror=B}),Cn(f,"link",r),n.state.loading|=4,Kl(f,a.precedence,e),n.instance=f;case"script":return f=pr(a.src),(u=e.querySelector(Ro(f)))?(n.instance=u,fn(u),u):(r=a,(u=pi.get(f))&&(r=v({},a),Jf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),fn(u),Cn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kl(r,a.precedence,e));return n.instance}function Kl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ql=null;function m0(e,n,a){if(Ql===null){var r=new Map,u=Ql=new Map;u.set(a,r)}else u=Ql,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ea]||f[un]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function g0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function MS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hr(r.href),f=n.querySelector(Ao(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,fn(f);return}f=n.ownerDocument||n,r=h0(r),(u=pi.get(u))&&Qf(r,u),f=f.createElement("link"),fn(f);var _=f;_._p=new Promise(function(R,B){_.onload=R,_.onerror=B}),Cn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function ES(e,n){return e.stylesheets&&e.count===0&&$l(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&jf===0&&(jf=62500*iS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$l(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var jl=null;function $l(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,jl=new Map,n.forEach(bS,e),jl=null,Jl.call(e))}function bS(e,n){if(!(n.state.loading&4)){var a=jl.get(e);if(a)var r=a.get(null);else{a=new Map,jl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=Jl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Co={$$typeof:F,Provider:null,Consumer:null,_currentValue:et,_currentValue2:et,_threadCount:0};function TS(e,n,a,r,u,f,_,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vt(0),this.hiddenUpdates=Vt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function v0(e,n,a,r,u,f,_,R,B,Q,ct,gt){return e=new TS(e,n,a,_,B,Q,ct,gt,R),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=Du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ou(f),e}function x0(e){return e?(e=Ws,e):Ws}function S0(e,n,a,r,u,f){u=x0(u),r.context===null?r.context=u:r.pendingContext=u,r=Na(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Oa(e,r,n),a!==null&&(kn(a,e,n),so(a,e,n))}function M0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function $f(e,n){M0(e,n),(e=e.alternate)&&M0(e,n)}function y0(e){if(e.tag===13||e.tag===31){var n=ds(e,67108864);n!==null&&kn(n,e,67108864),$f(e,67108864)}}function E0(e){if(e.tag===13||e.tag===31){var n=ii();n=Gr(n);var a=ds(e,n);a!==null&&kn(a,e,n),$f(e,n)}}var tc=!0;function AS(e,n,a,r){var u=O.T;O.T=null;var f=I.p;try{I.p=2,td(e,n,a,r)}finally{I.p=f,O.T=u}}function RS(e,n,a,r){var u=O.T;O.T=null;var f=I.p;try{I.p=8,td(e,n,a,r)}finally{I.p=f,O.T=u}}function td(e,n,a,r){if(tc){var u=ed(r);if(u===null)Hf(e,n,r,ec,a),T0(e,r);else if(wS(u,e,n,a,r))r.stopPropagation();else if(T0(e,r),n&4&&-1<CS.indexOf(e)){for(;u!==null;){var f=qi(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Et(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var B=1<<31-Ot(_);R.entanglements[1]|=B,_&=~B}Fi(f),(Ae&6)===0&&(Bl=Fe()+500,yo(0))}}break;case 31:case 13:R=ds(f,2),R!==null&&kn(R,f,2),Il(),$f(f,2)}if(f=ed(r),f===null&&Hf(e,n,r,ec,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Hf(e,n,r,null,a)}}function ed(e){return e=nu(e),nd(e)}var ec=null;function nd(e){if(ec=null,e=Wi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ec=e,null}function b0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Te()){case D:return 2;case M:return 8;case Y:case nt:return 32;case ot:return 268435456;default:return 32}default:return 32}}var id=!1,Wa=null,qa=null,Ya=null,wo=new Map,Do=new Map,Za=[],CS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function T0(e,n){switch(e){case"focusin":case"focusout":Wa=null;break;case"dragenter":case"dragleave":qa=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=qi(n),n!==null&&y0(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function wS(e,n,a,r,u){switch(n){case"focusin":return Wa=Uo(Wa,e,n,a,r,u),!0;case"dragenter":return qa=Uo(qa,e,n,a,r,u),!0;case"mouseover":return Ya=Uo(Ya,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return wo.set(f,Uo(wo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Do.set(f,Uo(Do.get(f)||null,e,n,a,r,u)),!0}return!1}function A0(e){var n=Wi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,zs(e.priority,function(){E0(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,zs(e.priority,function(){E0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ed(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);eu=r,a.target.dispatchEvent(r),eu=null}else return n=qi(a),n!==null&&y0(n),e.blockedOn=a,!1;n.shift()}return!0}function R0(e,n,a){nc(e)&&a.delete(n)}function DS(){id=!1,Wa!==null&&nc(Wa)&&(Wa=null),qa!==null&&nc(qa)&&(qa=null),Ya!==null&&nc(Ya)&&(Ya=null),wo.forEach(R0),Do.forEach(R0)}function ic(e,n){e.blockedOn===n&&(e.blockedOn=null,id||(id=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,DS)))}var ac=null;function C0(e){ac!==e&&(ac=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ac===e&&(ac=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(nd(r||a)===null)continue;break}var f=qi(a);f!==null&&(e.splice(n,3),n-=3,tf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function mr(e){function n(B){return ic(B,e)}Wa!==null&&ic(Wa,e),qa!==null&&ic(qa,e),Ya!==null&&ic(Ya,e),wo.forEach(n),Do.forEach(n);for(var a=0;a<Za.length;a++){var r=Za[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)A0(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[bn]||null;if(typeof f=="function")_||C0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[bn]||null)R=_.formAction;else if(nd(u)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),C0(a)}}}function w0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ad(e){this._internalRoot=e}sc.prototype.render=ad.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ii();S0(a,r,e,n,null,null)},sc.prototype.unmount=ad.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;S0(e.current,2,null,e,null,null),Il(),n[zn]=null}};function sc(e){this._internalRoot=e}sc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,e),a===0&&A0(e)}};var D0=t.version;if(D0!=="19.2.1")throw Error(s(527,D0,"19.2.1"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var US={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{rt=rc.inject(US),lt=rc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Bm,f=zm,_=Im;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=v0(e,1,!1,null,null,a,r,null,u,f,_,w0),e[zn]=n.current,If(e),new ad(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Bm,_=zm,R=Im,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=v0(e,1,!0,n,a??null,r,u,B,f,_,R,w0),n.context=x0(null),a=n.current,r=ii(),r=Gr(r),u=Na(r),u.callback=null,Oa(a,u,r),a=r,n.current.lanes=a,Bt(n,a),Fi(n),e[zn]=n.current,If(e),new sc(n)},No.version="19.2.1",No}var F0;function HS(){if(F0)return rd.exports;F0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),rd.exports=IS(),rd.exports}var B0=HS();/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),W_=(...o)=>o.filter((t,i,s)=>!!t&&s.indexOf(t)===i).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var VS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=Ye.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...h},m)=>Ye.createElement("svg",{ref:m,...VS,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:W_("lucide",l),...h},[...d.map(([p,S])=>Ye.createElement(p,S)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=(o,t)=>{const i=Ye.forwardRef(({className:s,...l},c)=>Ye.createElement(XS,{ref:c,iconNode:t,className:W_(`lucide-${GS(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=q_("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=q_("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="185",qS=0,z0=1,YS=2,Oc=1,ZS=2,Vo=3,as=0,qn=1,ga=2,va=0,Dr=1,I0=2,H0=3,G0=4,KS=5,Ds=100,QS=101,JS=102,jS=103,$S=104,tM=200,eM=201,nM=202,iM=203,Xd=204,kd=205,aM=206,sM=207,rM=208,oM=209,lM=210,cM=211,uM=212,fM=213,dM=214,Wd=0,qd=1,Yd=2,Or=3,Zd=4,Kd=5,Qd=6,Jd=7,Y_=0,hM=1,pM=2,Vi=0,Z_=1,K_=2,Q_=3,J_=4,j_=5,$_=6,tv=7,ev=300,Os=301,Pr=302,cd=303,ud=304,Jc=306,jd=1e3,_a=1001,$d=1002,wn=1003,mM=1004,oc=1005,Nn=1006,fd=1007,Ls=1008,vi=1009,nv=1010,iv=1011,ko=1012,Bh=1013,ki=1014,Hi=1015,Sa=1016,zh=1017,Ih=1018,Wo=1020,av=35902,sv=35899,rv=1021,ov=1022,wi=1023,Ma=1026,Ns=1027,lv=1028,Hh=1029,Ps=1030,Gh=1031,Vh=1033,Pc=33776,Fc=33777,Bc=33778,zc=33779,th=35840,eh=35841,nh=35842,ih=35843,ah=36196,sh=37492,rh=37496,oh=37488,lh=37489,Gc=37490,ch=37491,uh=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,_h=37815,vh=37816,xh=37817,Sh=37818,Mh=37819,yh=37820,Eh=37821,bh=36492,Th=36494,Ah=36495,Rh=36283,Ch=36284,Vc=36285,wh=36286,gM=3200,V0=0,_M=1,ns="",gi="srgb",Xc="srgb-linear",kc="linear",Pe="srgb",gr=7680,X0=519,vM=512,xM=513,SM=514,Xh=515,MM=516,yM=517,kh=518,EM=519,k0=35044,W0="300 es",Gi=2e3,Wc=2001;function bM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function qc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function TM(){const o=qc("canvas");return o.style.display="block",o}const q0={};function Y0(...o){const t="THREE."+o.shift();console.log(t,...o)}function cv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function jt(...o){o=cv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Se(...o){o=cv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Ur(...o){const t=o.join(" ");t in q0||(q0[t]=!0,jt(...o))}function AM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const RM={[Wd]:qd,[Yd]:Qd,[Zd]:Jd,[Or]:Kd,[qd]:Wd,[Qd]:Yd,[Jd]:Zd,[Kd]:Or};class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dd=Math.PI/180,Dh=180/Math.PI;function qo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function xe(o,t,i){return Math.max(t,Math.min(i,o))}function CM(o,t){return(o%t+t)%t}function hd(o,t,i){return(1-i)*o+i*t}function Oo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zh=class Zh{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zh.prototype.isVector2=!0;let Re=Zh;class zr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],S=s[l+2],v=s[l+3],g=c[d+0],E=c[d+1],T=c[d+2],w=c[d+3];if(v!==w||m!==g||p!==E||S!==T){let y=m*g+p*E+S*T+v*w;y<0&&(g=-g,E=-E,T=-T,w=-w,y=-y);let x=1-h;if(y<.9995){const P=Math.acos(y),F=Math.sin(P);x=Math.sin(x*P)/F,h=Math.sin(h*P)/F,m=m*x+g*h,p=p*x+E*h,S=S*x+T*h,v=v*x+w*h}else{m=m*x+g*h,p=p*x+E*h,S=S*x+T*h,v=v*x+w*h;const P=1/Math.sqrt(m*m+p*p+S*S+v*v);m*=P,p*=P,S*=P,v*=P}}t[i]=m,t[i+1]=p,t[i+2]=S,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],S=s[l+3],v=c[d],g=c[d+1],E=c[d+2],T=c[d+3];return t[i]=h*T+S*v+m*E-p*g,t[i+1]=m*T+S*g+p*v-h*E,t[i+2]=p*T+S*E+h*g-m*v,t[i+3]=S*T-h*v-m*g-p*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),S=h(l/2),v=h(c/2),g=m(s/2),E=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=g*S*v+p*E*T,this._y=p*E*v-g*S*T,this._z=p*S*T+g*E*v,this._w=p*S*v-g*E*T;break;case"YXZ":this._x=g*S*v+p*E*T,this._y=p*E*v-g*S*T,this._z=p*S*T-g*E*v,this._w=p*S*v+g*E*T;break;case"ZXY":this._x=g*S*v-p*E*T,this._y=p*E*v+g*S*T,this._z=p*S*T+g*E*v,this._w=p*S*v-g*E*T;break;case"ZYX":this._x=g*S*v-p*E*T,this._y=p*E*v+g*S*T,this._z=p*S*T-g*E*v,this._w=p*S*v+g*E*T;break;case"YZX":this._x=g*S*v+p*E*T,this._y=p*E*v+g*S*T,this._z=p*S*T-g*E*v,this._w=p*S*v-g*E*T;break;case"XZY":this._x=g*S*v-p*E*T,this._y=p*E*v-g*S*T,this._z=p*S*T+g*E*v,this._w=p*S*v+g*E*T;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],S=i[6],v=i[10],g=s+h+v;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(S-m)*E,this._y=(c-p)*E,this._z=(d-l)*E}else if(s>h&&s>v){const E=2*Math.sqrt(1+s-h-v);this._w=(S-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+p)/E}else if(h>v){const E=2*Math.sqrt(1+h-s-v);this._w=(c-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+S)/E}else{const E=2*Math.sqrt(1+v-s-h);this._w=(d-l)/E,this._x=(c+p)/E,this._y=(m+S)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,S=i._w;return this._x=s*S+d*h+l*p-c*m,this._y=l*S+d*m+c*h-s*p,this._z=c*S+d*p+s*m-l*h,this._w=d*S-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),S=Math.sin(p);m=Math.sin(m*p)/S,i=Math.sin(i*p)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kh=class Kh{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Z0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Z0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),S=2*(h*i-c*l),v=2*(c*s-d*i);return this.x=i+m*p+d*v-h*S,this.y=s+m*S+h*p-c*v,this.z=l+m*v+c*S-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return pd.copy(this).projectOnVector(t),this.sub(pd)}reflect(t){return this.sub(pd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kh.prototype.isVector3=!0;let J=Kh;const pd=new J,Z0=new zr,Qh=class Qh{constructor(t,i,s,l,c,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const S=this.elements;return S[0]=t,S[1]=l,S[2]=h,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=d,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],S=s[4],v=s[7],g=s[2],E=s[5],T=s[8],w=l[0],y=l[3],x=l[6],P=l[1],F=l[4],C=l[7],N=l[2],L=l[5],z=l[8];return c[0]=d*w+h*P+m*N,c[3]=d*y+h*F+m*L,c[6]=d*x+h*C+m*z,c[1]=p*w+S*P+v*N,c[4]=p*y+S*F+v*L,c[7]=p*x+S*C+v*z,c[2]=g*w+E*P+T*N,c[5]=g*y+E*F+T*L,c[8]=g*x+E*C+T*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],S=t[8];return i*d*S-i*h*p-s*c*S+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],S=t[8],v=S*d-h*p,g=h*m-S*c,E=p*c-d*m,T=i*v+s*g+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=v*w,t[1]=(l*p-S*s)*w,t[2]=(h*s-l*d)*w,t[3]=g*w,t[4]=(S*i-l*m)*w,t[5]=(l*c-h*i)*w,t[6]=E*w,t[7]=(s*m-p*i)*w,t[8]=(d*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return Ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(md.makeScale(t,i)),this}rotate(t){return Ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(md.makeRotation(-t)),this}translate(t,i){return Ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(md.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Qh.prototype.isMatrix3=!0;let ee=Qh;const md=new ee,K0=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q0=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wM(){const o={enabled:!0,workingColorSpace:Xc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Pe&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Pe&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ns?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Xc]:{primaries:t,whitePoint:s,transfer:kc,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:Pe,toXYZ:K0,fromXYZ:Q0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const ve=wM();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Lr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let _r;class DM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{_r===void 0&&(_r=qc("canvas")),_r.width=t.width,_r.height=t.height;const l=_r.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=_r}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let UM=0;class Wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(gd(l[d].image)):c.push(gd(l[d]))}else c=gd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function gd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?DM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}let LM=0;const _d=new J;class Fn extends Bs{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=_a,l=_a,c=Nn,d=Ls,h=wi,m=vi,p=Fn.DEFAULT_ANISOTROPY,S=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=qo(),this.name="",this.source=new Wh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_d).x}get height(){return this.source.getSize(_d).y}get depth(){return this.source.getSize(_d).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){jt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){jt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ev)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jd:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case $d:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jd:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case $d:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=ev;Fn.DEFAULT_ANISOTROPY=1;const Jh=class Jh{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],S=m[4],v=m[8],g=m[1],E=m[5],T=m[9],w=m[2],y=m[6],x=m[10];if(Math.abs(S-g)<.01&&Math.abs(v-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(S+g)<.1&&Math.abs(v+w)<.1&&Math.abs(T+y)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(p+1)/2,C=(E+1)/2,N=(x+1)/2,L=(S+g)/4,z=(v+w)/4,b=(T+y)/4;return F>C&&F>N?F<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(F),l=L/s,c=z/s):C>N?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=L/l,c=b/l):N<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(N),s=z/c,l=b/c),this.set(s,l,c,i),this}let P=Math.sqrt((y-T)*(y-T)+(v-w)*(v-w)+(g-S)*(g-S));return Math.abs(P)<.001&&(P=1),this.x=(y-T)/P,this.y=(v-w)/P,this.z=(g-S)/P,this.w=Math.acos((p+E+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jh.prototype.isVector4=!0;let sn=Jh;class NM extends Bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Fn(l),d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends NM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class uv extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class OM extends Fn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qc=class Qc{constructor(t,i,s,l,c,d,h,m,p,S,v,g,E,T,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,S,v,g,E,T,w,y)}set(t,i,s,l,c,d,h,m,p,S,v,g,E,T,w,y){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=S,x[10]=v,x[14]=g,x[3]=E,x[7]=T,x[11]=w,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qc().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/vr.setFromMatrixColumn(t,0).length(),c=1/vr.setFromMatrixColumn(t,1).length(),d=1/vr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=d*S,E=d*v,T=h*S,w=h*v;i[0]=m*S,i[4]=-m*v,i[8]=p,i[1]=E+T*p,i[5]=g-w*p,i[9]=-h*m,i[2]=w-g*p,i[6]=T+E*p,i[10]=d*m}else if(t.order==="YXZ"){const g=m*S,E=m*v,T=p*S,w=p*v;i[0]=g+w*h,i[4]=T*h-E,i[8]=d*p,i[1]=d*v,i[5]=d*S,i[9]=-h,i[2]=E*h-T,i[6]=w+g*h,i[10]=d*m}else if(t.order==="ZXY"){const g=m*S,E=m*v,T=p*S,w=p*v;i[0]=g-w*h,i[4]=-d*v,i[8]=T+E*h,i[1]=E+T*h,i[5]=d*S,i[9]=w-g*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const g=d*S,E=d*v,T=h*S,w=h*v;i[0]=m*S,i[4]=T*p-E,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=E*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,E=d*p,T=h*m,w=h*p;i[0]=m*S,i[4]=w-g*v,i[8]=T*v+E,i[1]=v,i[5]=d*S,i[9]=-h*S,i[2]=-p*S,i[6]=E*v+T,i[10]=g-w*v}else if(t.order==="XZY"){const g=d*m,E=d*p,T=h*m,w=h*p;i[0]=m*S,i[4]=-v,i[8]=p*S,i[1]=g*v+w,i[5]=d*S,i[9]=E*v-T,i[2]=T*v-E,i[6]=h*S,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PM,t,FM)}lookAt(t,i,s){const l=this.elements;return ai.subVectors(t,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Qa.crossVectors(s,ai),Qa.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Qa.crossVectors(s,ai)),Qa.normalize(),lc.crossVectors(ai,Qa),l[0]=Qa.x,l[4]=lc.x,l[8]=ai.x,l[1]=Qa.y,l[5]=lc.y,l[9]=ai.y,l[2]=Qa.z,l[6]=lc.z,l[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],S=s[1],v=s[5],g=s[9],E=s[13],T=s[2],w=s[6],y=s[10],x=s[14],P=s[3],F=s[7],C=s[11],N=s[15],L=l[0],z=l[4],b=l[8],U=l[12],X=l[1],G=l[5],Z=l[9],dt=l[13],ht=l[2],j=l[6],O=l[10],I=l[14],et=l[3],mt=l[7],vt=l[11],St=l[15];return c[0]=d*L+h*X+m*ht+p*et,c[4]=d*z+h*G+m*j+p*mt,c[8]=d*b+h*Z+m*O+p*vt,c[12]=d*U+h*dt+m*I+p*St,c[1]=S*L+v*X+g*ht+E*et,c[5]=S*z+v*G+g*j+E*mt,c[9]=S*b+v*Z+g*O+E*vt,c[13]=S*U+v*dt+g*I+E*St,c[2]=T*L+w*X+y*ht+x*et,c[6]=T*z+w*G+y*j+x*mt,c[10]=T*b+w*Z+y*O+x*vt,c[14]=T*U+w*dt+y*I+x*St,c[3]=P*L+F*X+C*ht+N*et,c[7]=P*z+F*G+C*j+N*mt,c[11]=P*b+F*Z+C*O+N*vt,c[15]=P*U+F*dt+C*I+N*St,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],S=t[2],v=t[6],g=t[10],E=t[14],T=t[3],w=t[7],y=t[11],x=t[15],P=m*E-p*g,F=h*E-p*v,C=h*g-m*v,N=d*E-p*S,L=d*g-m*S,z=d*v-h*S;return i*(w*P-y*F+x*C)-s*(T*P-y*N+x*L)+l*(T*F-w*N+x*z)-c*(T*C-w*L+y*z)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],d=t[5],h=t[9],m=t[2],p=t[6],S=t[10];return i*(d*S-h*p)-s*(c*S-h*m)+l*(c*p-d*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],S=t[8],v=t[9],g=t[10],E=t[11],T=t[12],w=t[13],y=t[14],x=t[15],P=i*h-s*d,F=i*m-l*d,C=i*p-c*d,N=s*m-l*h,L=s*p-c*h,z=l*p-c*m,b=S*w-v*T,U=S*y-g*T,X=S*x-E*T,G=v*y-g*w,Z=v*x-E*w,dt=g*x-E*y,ht=P*dt-F*Z+C*G+N*X-L*U+z*b;if(ht===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ht;return t[0]=(h*dt-m*Z+p*G)*j,t[1]=(l*Z-s*dt-c*G)*j,t[2]=(w*z-y*L+x*N)*j,t[3]=(g*L-v*z-E*N)*j,t[4]=(m*X-d*dt-p*U)*j,t[5]=(i*dt-l*X+c*U)*j,t[6]=(y*C-T*z-x*F)*j,t[7]=(S*z-g*C+E*F)*j,t[8]=(d*Z-h*X+p*b)*j,t[9]=(s*X-i*Z-c*b)*j,t[10]=(T*L-w*C+x*P)*j,t[11]=(v*C-S*L-E*P)*j,t[12]=(h*U-d*G-m*b)*j,t[13]=(i*G-s*U+l*b)*j,t[14]=(w*F-T*N-y*P)*j,t[15]=(S*N-v*F+g*P)*j,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,S=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,S*h+s,S*m-l*d,0,p*m-l*h,S*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,S=d+d,v=h+h,g=c*p,E=c*S,T=c*v,w=d*S,y=d*v,x=h*v,P=m*p,F=m*S,C=m*v,N=s.x,L=s.y,z=s.z;return l[0]=(1-(w+x))*N,l[1]=(E+C)*N,l[2]=(T-F)*N,l[3]=0,l[4]=(E-C)*L,l[5]=(1-(g+x))*L,l[6]=(y+P)*L,l[7]=0,l[8]=(T+F)*z,l[9]=(y-P)*z,l[10]=(1-(g+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let d=vr.set(l[0],l[1],l[2]).length();const h=vr.set(l[4],l[5],l[6]).length(),m=vr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ti.copy(this);const p=1/d,S=1/h,v=1/m;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=S,Ti.elements[5]*=S,Ti.elements[6]*=S,Ti.elements[8]*=v,Ti.elements[9]*=v,Ti.elements[10]*=v,i.setFromRotationMatrix(Ti),s.x=d,s.y=h,s.z=m,this}makePerspective(t,i,s,l,c,d,h=Gi,m=!1){const p=this.elements,S=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),E=(s+l)/(s-l);let T,w;if(m)T=c/(d-c),w=d*c/(d-c);else if(h===Gi)T=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(h===Wc)T=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=S,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=E,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=Gi,m=!1){const p=this.elements,S=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),E=-(s+l)/(s-l);let T,w;if(m)T=1/(d-c),w=d/(d-c);else if(h===Gi)T=-2/(d-c),w=-(d+c)/(d-c);else if(h===Wc)T=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=S,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=E,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};Qc.prototype.isMatrix4=!0;let rn=Qc;const vr=new J,Ti=new rn,PM=new J(0,0,0),FM=new J(1,1,1),Qa=new J,lc=new J,ai=new J,J0=new rn,j0=new zr;class Fs{constructor(t=0,i=0,s=0,l=Fs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],S=l[9],v=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-S,E),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return J0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return j0.setFromEuler(this),this.setFromQuaternion(j0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fs.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let BM=0;const $0=new J,xr=new zr,ua=new rn,cc=new J,Po=new J,zM=new J,IM=new zr,t_=new J(1,0,0),e_=new J(0,1,0),n_=new J(0,0,1),i_={type:"added"},HM={type:"removed"},Sr={type:"childadded",child:null},vd={type:"childremoved",child:null};class Bn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const t=new J,i=new Fs,s=new zr,l=new J(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new ee}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,i){return xr.setFromAxisAngle(t,i),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(t_,t)}rotateY(t){return this.rotateOnAxis(e_,t)}rotateZ(t){return this.rotateOnAxis(n_,t)}translateOnAxis(t,i){return $0.copy(t).applyQuaternion(this.quaternion),this.position.add($0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(t_,t)}translateY(t){return this.translateOnAxis(e_,t)}translateZ(t){return this.translateOnAxis(n_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?cc.copy(t):cc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Po,cc,this.up):ua.lookAt(cc,Po,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),xr.setFromRotationMatrix(ua),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(i_),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null):Se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(HM),vd.child=t,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ua.multiply(t.parent.matrixWorld)),t.applyMatrix4(ua),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(i_),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,zM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,IM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let d=0,h=c.length;d<h;d++)c[d].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),S=d(t.images),v=d(t.shapes),g=d(t.skeletons),E=d(t.animations),T=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(h){const m=[];for(const p in h){const S=h[p];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new J(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class uc extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GM={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),x=this._getHandJoint(p,w);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const S=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=S.position.distanceTo(v.position),E=.02,T=.005;p.inputState.pinching&&g>E+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=E-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(GM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new uc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},fc={h:0,s:0,l:0};function Sd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=ve.workingColorSpace){return this.r=t,this.g=i,this.b=s,ve.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=ve.workingColorSpace){if(t=CM(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Sd(d,c,t+1/3),this.g=Sd(d,c,t),this.b=Sd(d,c,t-1/3)}return ve.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:jt("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const s=dv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return ve.workingToColorSpace(Ln.copy(this),t),Math.round(xe(Ln.r*255,0,255))*65536+Math.round(xe(Ln.g*255,0,255))*256+Math.round(xe(Ln.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ve.workingColorSpace){ve.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const S=(h+d)/2;if(h===d)m=0,p=0;else{const v=d-h;switch(p=S<=.5?v/(d+h):v/(2-d-h),d){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=S,t}getRGB(t,i=ve.workingColorSpace){return ve.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=gi){ve.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ja),this.setHSL(Ja.h+t,Ja.s+i,Ja.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ja),t.getHSL(fc);const s=hd(Ja.h,fc.h,i),l=hd(Ja.s,fc.s,i),c=hd(Ja.l,fc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new be;be.NAMES=dv;class VM extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fs,this.environmentIntensity=1,this.environmentRotation=new Fs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ai=new J,fa=new J,Md=new J,da=new J,Mr=new J,yr=new J,a_=new J,yd=new J,Ed=new J,bd=new J,Td=new sn,Ad=new sn,Rd=new sn;class Ci{constructor(t=new J,i=new J,s=new J){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ai.subVectors(t,i),l.cross(Ai);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ai.subVectors(l,i),fa.subVectors(s,i),Md.subVectors(t,i);const d=Ai.dot(Ai),h=Ai.dot(fa),m=Ai.dot(Md),p=fa.dot(fa),S=fa.dot(Md),v=d*p-h*h;if(v===0)return c.set(0,0,0),null;const g=1/v,E=(p*m-h*S)*g,T=(d*S-h*m)*g;return c.set(1-E-T,T,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,da)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,da.x),m.addScaledVector(d,da.y),m.addScaledVector(h,da.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Td.setScalar(0),Ad.setScalar(0),Rd.setScalar(0),Td.fromBufferAttribute(t,i),Ad.fromBufferAttribute(t,s),Rd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Td,c.x),d.addScaledVector(Ad,c.y),d.addScaledVector(Rd,c.z),d}static isFrontFacing(t,i,s,l){return Ai.subVectors(s,i),fa.subVectors(t,i),Ai.cross(fa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ai.cross(fa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ci.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ci.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ci.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ci.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ci.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;Mr.subVectors(l,s),yr.subVectors(c,s),yd.subVectors(t,s);const m=Mr.dot(yd),p=yr.dot(yd);if(m<=0&&p<=0)return i.copy(s);Ed.subVectors(t,l);const S=Mr.dot(Ed),v=yr.dot(Ed);if(S>=0&&v<=S)return i.copy(l);const g=m*v-S*p;if(g<=0&&m>=0&&S<=0)return d=m/(m-S),i.copy(s).addScaledVector(Mr,d);bd.subVectors(t,c);const E=Mr.dot(bd),T=yr.dot(bd);if(T>=0&&E<=T)return i.copy(c);const w=E*p-m*T;if(w<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(yr,h);const y=S*T-E*v;if(y<=0&&v-S>=0&&E-T>=0)return a_.subVectors(c,l),h=(v-S)/(v-S+(E-T)),i.copy(l).addScaledVector(a_,h);const x=1/(y+w+g);return d=w*x,h=g*x,i.copy(s).addScaledVector(Mr,d).addScaledVector(yr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Yo{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,Ri):Ri.fromBufferAttribute(c,d),Ri.applyMatrix4(t.matrixWorld),this.expandByPoint(Ri);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),dc.copy(s.boundingBox)),dc.applyMatrix4(t.matrixWorld),this.union(dc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ri),Ri.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),hc.subVectors(this.max,Fo),Er.subVectors(t.a,Fo),br.subVectors(t.b,Fo),Tr.subVectors(t.c,Fo),ja.subVectors(br,Er),$a.subVectors(Tr,br),Ts.subVectors(Er,Tr);let i=[0,-ja.z,ja.y,0,-$a.z,$a.y,0,-Ts.z,Ts.y,ja.z,0,-ja.x,$a.z,0,-$a.x,Ts.z,0,-Ts.x,-ja.y,ja.x,0,-$a.y,$a.x,0,-Ts.y,Ts.x,0];return!Cd(i,Er,br,Tr,hc)||(i=[1,0,0,0,1,0,0,0,1],!Cd(i,Er,br,Tr,hc))?!1:(pc.crossVectors(ja,$a),i=[pc.x,pc.y,pc.z],Cd(i,Er,br,Tr,hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ri).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ri).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ha=[new J,new J,new J,new J,new J,new J,new J,new J],Ri=new J,dc=new Yo,Er=new J,br=new J,Tr=new J,ja=new J,$a=new J,Ts=new J,Fo=new J,hc=new J,pc=new J,As=new J;function Cd(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){As.fromArray(o,c);const h=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=t.dot(As),p=i.dot(As),S=s.dot(As);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>h)return!1}return!0}const gn=new J,mc=new Re;let XM=0;class En extends Bs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:XM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=k0,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(t),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Oo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Wn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Wn(i,this.array),s=Wn(s,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==k0&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class hv extends En{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class pv extends En{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Di extends En{constructor(t,i,s){super(new Float32Array(t),i,s)}}const kM=new Yo,Bo=new J,wd=new J;class Zo{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):kM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Bo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(wd)),this.expandByPoint(Bo.copy(t.center).sub(wd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let WM=0;const mi=new rn,Dd=new Bn,Ar=new J,si=new Yo,zo=new Yo,yn=new J;class ri extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bM(t)?pv:hv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ee().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,s){return mi.makeTranslation(t,i,s),this.applyMatrix4(mi),this}scale(t,i,s){return mi.makeScale(t,i,s),this.applyMatrix4(mi),this}lookAt(t){return Dd.lookAt(t),Dd.updateMatrix(),this.applyMatrix4(Dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Di(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];zo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors(si.min,zo.min),si.expandByPoint(yn),yn.addVectors(si.max,zo.max),si.expandByPoint(yn)):(si.expandByPoint(zo.min),si.expandByPoint(zo.max))}si.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,S=h.count;p<S;p++)yn.fromBufferAttribute(h,p),m&&(Ar.fromBufferAttribute(t,p),yn.add(Ar)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new En(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let b=0;b<s.count;b++)h[b]=new J,m[b]=new J;const p=new J,S=new J,v=new J,g=new Re,E=new Re,T=new Re,w=new J,y=new J;function x(b,U,X){p.fromBufferAttribute(s,b),S.fromBufferAttribute(s,U),v.fromBufferAttribute(s,X),g.fromBufferAttribute(c,b),E.fromBufferAttribute(c,U),T.fromBufferAttribute(c,X),S.sub(p),v.sub(p),E.sub(g),T.sub(g);const G=1/(E.x*T.y-T.x*E.y);isFinite(G)&&(w.copy(S).multiplyScalar(T.y).addScaledVector(v,-E.y).multiplyScalar(G),y.copy(v).multiplyScalar(E.x).addScaledVector(S,-T.x).multiplyScalar(G),h[b].add(w),h[U].add(w),h[X].add(w),m[b].add(y),m[U].add(y),m[X].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let b=0,U=P.length;b<U;++b){const X=P[b],G=X.start,Z=X.count;for(let dt=G,ht=G+Z;dt<ht;dt+=3)x(t.getX(dt+0),t.getX(dt+1),t.getX(dt+2))}const F=new J,C=new J,N=new J,L=new J;function z(b){N.fromBufferAttribute(l,b),L.copy(N);const U=h[b];F.copy(U),F.sub(N.multiplyScalar(N.dot(U))).normalize(),C.crossVectors(L,U);const G=C.dot(m[b])<0?-1:1;d.setXYZW(b,F.x,F.y,F.z,G)}for(let b=0,U=P.length;b<U;++b){const X=P[b],G=X.start,Z=X.count;for(let dt=G,ht=G+Z;dt<ht;dt+=3)z(t.getX(dt+0)),z(t.getX(dt+1)),z(t.getX(dt+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new En(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new J,c=new J,d=new J,h=new J,m=new J,p=new J,S=new J,v=new J;if(t)for(let g=0,E=t.count;g<E;g+=3){const T=t.getX(g+0),w=t.getX(g+1),y=t.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),S.subVectors(d,c),v.subVectors(l,c),S.cross(v),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),h.add(S),m.add(S),p.add(S),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),S.subVectors(d,c),v.subVectors(l,c),S.cross(v),s.setXYZ(g+0,S.x,S.y,S.z),s.setXYZ(g+1,S.x,S.y,S.z),s.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,S=h.itemSize,v=h.normalized,g=new p.constructor(m.length*S);let E=0,T=0;for(let w=0,y=m.length;w<y;w++){h.isInterleavedBufferAttribute?E=m[w]*h.data.stride+h.offset:E=m[w]*S;for(let x=0;x<S;x++)g[T++]=p[E++]}return new En(g,S,v)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ri,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let S=0,v=p.length;S<v;S++){const g=p[S],E=t(g,s);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let v=0,g=p.length;v<g;v++){const E=p[v];S.push(E.toJSON(t.data))}S.length>0&&(l[m]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=t.morphAttributes;for(const p in c){const S=[],v=c[p];for(let g=0,E=v.length;g<E;g++)S.push(v[g].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,S=d.length;p<S;p++){const v=d[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let qM=0;class Ir extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Dr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xd,this.blendDst=kd,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){jt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){jt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xd&&(s.blendSrc=this.blendSrc),this.blendDst!==kd&&(s.blendDst=this.blendDst),this.blendEquation!==Ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new be().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Re().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Re().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const pa=new J,Ud=new J,gc=new J,ts=new J,Ld=new J,_c=new J,Nd=new J;class qh{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=pa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Ud.copy(t).add(i).multiplyScalar(.5),gc.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(Ud);const c=t.distanceTo(i)*.5,d=-this.direction.dot(gc),h=ts.dot(this.direction),m=-ts.dot(gc),p=ts.lengthSq(),S=Math.abs(1-d*d);let v,g,E,T;if(S>0)if(v=d*m-h,g=d*h-m,T=c*S,v>=0)if(g>=-T)if(g<=T){const w=1/S;v*=w,g*=w,E=v*(v+d*g+2*h)+g*(d*v+g+2*m)+p}else g=c,v=Math.max(0,-(d*g+h)),E=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(d*g+h)),E=-v*v+g*(g+2*m)+p;else g<=-T?(v=Math.max(0,-(-d*c+h)),g=v>0?-c:Math.min(Math.max(-c,-m),c),E=-v*v+g*(g+2*m)+p):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+p):(v=Math.max(0,-(d*c+h)),g=v>0?c:Math.min(Math.max(-c,-m),c),E=-v*v+g*(g+2*m)+p);else g=d>0?-c:c,v=Math.max(0,-(d*g+h)),E=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Ud).addScaledVector(gc,g),E}intersectSphere(t,i){pa.subVectors(t.center,this.origin);const s=pa.dot(this.direction),l=pa.dot(pa)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),S>=0?(c=(t.min.y-g.y)*S,d=(t.max.y-g.y)*S):(c=(t.max.y-g.y)*S,d=(t.min.y-g.y)*S),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(h=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(h=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,pa)!==null}intersectTriangle(t,i,s,l,c){Ld.subVectors(i,t),_c.subVectors(s,t),Nd.crossVectors(Ld,_c);let d=this.direction.dot(Nd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ts.subVectors(this.origin,t);const m=h*this.direction.dot(_c.crossVectors(ts,_c));if(m<0)return null;const p=h*this.direction.dot(Ld.cross(ts));if(p<0||m+p>d)return null;const S=-h*ts.dot(Nd);return S<0?null:this.at(S/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mv extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fs,this.combine=Y_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const s_=new rn,Rs=new qh,vc=new Zo,r_=new J,xc=new J,Sc=new J,Mc=new J,Od=new J,yc=new J,o_=new J,Ec=new J;class ya extends Bn{constructor(t=new ri,i=new mv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){yc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=h[m],v=c[m];S!==0&&(Od.fromBufferAttribute(v,t),d?yc.addScaledVector(Od,S):yc.addScaledVector(Od.sub(i),S))}i.add(yc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vc.copy(s.boundingSphere),vc.applyMatrix4(c),Rs.copy(t.ray).recast(t.near),!(vc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(vc,r_)===null||Rs.origin.distanceToSquared(r_)>(t.far-t.near)**2))&&(s_.copy(c).invert(),Rs.copy(t.ray).applyMatrix4(s_),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Rs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,v=c.attributes.normal,g=c.groups,E=c.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,w=g.length;T<w;T++){const y=g[T],x=d[y.materialIndex],P=Math.max(y.start,E.start),F=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let C=P,N=F;C<N;C+=3){const L=h.getX(C),z=h.getX(C+1),b=h.getX(C+2);l=bc(this,x,t,s,p,S,v,L,z,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(h.count,E.start+E.count);for(let y=T,x=w;y<x;y+=3){const P=h.getX(y),F=h.getX(y+1),C=h.getX(y+2);l=bc(this,d,t,s,p,S,v,P,F,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,w=g.length;T<w;T++){const y=g[T],x=d[y.materialIndex],P=Math.max(y.start,E.start),F=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let C=P,N=F;C<N;C+=3){const L=C,z=C+1,b=C+2;l=bc(this,x,t,s,p,S,v,L,z,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let y=T,x=w;y<x;y+=3){const P=y,F=y+1,C=y+2;l=bc(this,d,t,s,p,S,v,P,F,C),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function YM(o,t,i,s,l,c,d,h){let m;if(t.side===qn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===as,h),m===null)return null;Ec.copy(h),Ec.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Ec);return p<i.near||p>i.far?null:{distance:p,point:Ec.clone(),object:o}}function bc(o,t,i,s,l,c,d,h,m,p){o.getVertexPosition(h,xc),o.getVertexPosition(m,Sc),o.getVertexPosition(p,Mc);const S=YM(o,t,i,s,xc,Sc,Mc,o_);if(S){const v=new J;Ci.getBarycoord(o_,xc,Sc,Mc,v),l&&(S.uv=Ci.getInterpolatedAttribute(l,h,m,p,v,new Re)),c&&(S.uv1=Ci.getInterpolatedAttribute(c,h,m,p,v,new Re)),d&&(S.normal=Ci.getInterpolatedAttribute(d,h,m,p,v,new J),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new J,materialIndex:0};Ci.getNormal(xc,Sc,Mc,g.normal),S.face=g,S.barycoord=v}return S}class ZM extends Fn{constructor(t=null,i=1,s=1,l,c,d,h,m,p=wn,S=wn,v,g){super(null,d,h,m,p,S,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pd=new J,KM=new J,QM=new ee;class ws{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Pd.subVectors(s,i).cross(KM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(Pd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const d=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(t.start).addScaledVector(l,d)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||QM.getNormalMatrix(t),l=this.coplanarPoint(Pd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new Zo,JM=new Re(.5,.5),Tc=new J;class gv{constructor(t=new ws,i=new ws,s=new ws,l=new ws,c=new ws,d=new ws){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],S=c[4],v=c[5],g=c[6],E=c[7],T=c[8],w=c[9],y=c[10],x=c[11],P=c[12],F=c[13],C=c[14],N=c[15];if(l[0].setComponents(p-d,E-S,x-T,N-P).normalize(),l[1].setComponents(p+d,E+S,x+T,N+P).normalize(),l[2].setComponents(p+h,E+v,x+w,N+F).normalize(),l[3].setComponents(p-h,E-v,x-w,N-F).normalize(),s)l[4].setComponents(m,g,y,C).normalize(),l[5].setComponents(p-m,E-g,x-y,N-C).normalize();else if(l[4].setComponents(p-m,E-g,x-y,N-C).normalize(),i===Gi)l[5].setComponents(p+m,E+g,x+y,N+C).normalize();else if(i===Wc)l[5].setComponents(m,g,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);const i=JM.distanceTo(t.center);return Cs.radius=.7071067811865476+i,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Tc.x=l.normal.x>0?t.max.x:t.min.x,Tc.y=l.normal.y>0?t.max.y:t.min.y,Tc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jM extends Ir{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Yc=new J,Zc=new J,l_=new rn,Io=new qh,Ac=new Zo,Fd=new J,c_=new J;class $M extends Bn{constructor(t=new ri,i=new jM){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Yc.fromBufferAttribute(i,l-1),Zc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Yc.distanceTo(Zc);t.setAttribute("lineDistance",new Di(s,1))}else jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=c,t.ray.intersectsSphere(Ac)===!1)return;l_.copy(l).invert(),Io.copy(t.ray).applyMatrix4(l_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,S=s.index,g=s.attributes.position;if(S!==null){const E=Math.max(0,d.start),T=Math.min(S.count,d.start+d.count);for(let w=E,y=T-1;w<y;w+=p){const x=S.getX(w),P=S.getX(w+1),F=Rc(this,t,Io,m,x,P,w);F&&i.push(F)}if(this.isLineLoop){const w=S.getX(T-1),y=S.getX(E),x=Rc(this,t,Io,m,w,y,T-1);x&&i.push(x)}}else{const E=Math.max(0,d.start),T=Math.min(g.count,d.start+d.count);for(let w=E,y=T-1;w<y;w+=p){const x=Rc(this,t,Io,m,w,w+1,w);x&&i.push(x)}if(this.isLineLoop){const w=Rc(this,t,Io,m,T-1,E,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Rc(o,t,i,s,l,c,d){const h=o.geometry.attributes.position;if(Yc.fromBufferAttribute(h,l),Zc.fromBufferAttribute(h,c),i.distanceSqToSegment(Yc,Zc,Fd,c_)>s)return;Fd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Fd);if(!(p<t.near||p>t.far))return{distance:p,point:c_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const u_=new J,f_=new J;class ty extends $M{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)u_.fromBufferAttribute(i,l),f_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+u_.distanceTo(f_);t.setAttribute("lineDistance",new Di(s,1))}else jt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ey extends Ir{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const d_=new rn,Uh=new qh,Cc=new Zo,wc=new J;class ny extends Bn{constructor(t=new ri,i=new ey){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,t.ray.intersectsSphere(Cc)===!1)return;d_.copy(l).invert(),Uh.copy(t.ray).applyMatrix4(d_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,v=s.attributes.position;if(p!==null){const g=Math.max(0,d.start),E=Math.min(p.count,d.start+d.count);for(let T=g,w=E;T<w;T++){const y=p.getX(T);wc.fromBufferAttribute(v,y),h_(wc,y,m,l,t,i,this)}}else{const g=Math.max(0,d.start),E=Math.min(v.count,d.start+d.count);for(let T=g,w=E;T<w;T++)wc.fromBufferAttribute(v,T),h_(wc,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function h_(o,t,i,s,l,c,d){const h=Uh.distanceSqToPoint(o);if(h<i){const m=new J;Uh.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class _v extends Fn{constructor(t=[],i=Os,s,l,c,d,h,m,p,S){super(t,i,s,l,c,d,h,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fr extends Fn{constructor(t,i,s=ki,l,c,d,h=wn,m=wn,p,S=Ma,v=1){if(S!==Ma&&S!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,d,h,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class iy extends Fr{constructor(t,i=ki,s=Os,l,c,d=wn,h=wn,m,p=Ma){const S={width:t,height:t,depth:1},v=[S,S,S,S,S,S];super(t,t,i,s,l,c,d,h,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class vv extends Fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ko extends ri{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],S=[],v=[];let g=0,E=0;T("z","y","x",-1,-1,s,i,t,d,c,0),T("z","y","x",1,-1,s,i,-t,d,c,1),T("x","z","y",1,1,t,s,i,l,d,2),T("x","z","y",1,-1,t,s,-i,l,d,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Di(p,3)),this.setAttribute("normal",new Di(S,3)),this.setAttribute("uv",new Di(v,2));function T(w,y,x,P,F,C,N,L,z,b,U){const X=C/z,G=N/b,Z=C/2,dt=N/2,ht=L/2,j=z+1,O=b+1;let I=0,et=0;const mt=new J;for(let vt=0;vt<O;vt++){const St=vt*G-dt;for(let Mt=0;Mt<j;Mt++){const Gt=Mt*X-Z;mt[w]=Gt*P,mt[y]=St*F,mt[x]=ht,p.push(mt.x,mt.y,mt.z),mt[w]=0,mt[y]=0,mt[x]=L>0?1:-1,S.push(mt.x,mt.y,mt.z),v.push(Mt/z),v.push(1-vt/b),I+=1}}for(let vt=0;vt<b;vt++)for(let St=0;St<z;St++){const Mt=g+St+j*vt,Gt=g+St+j*(vt+1),se=g+(St+1)+j*(vt+1),ne=g+(St+1)+j*vt;m.push(Mt,Gt,ne),m.push(Gt,se,ne),et+=6}h.addGroup(E,et,U),E+=et,g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class jc extends ri{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,S=m+1,v=t/h,g=i/m,E=[],T=[],w=[],y=[];for(let x=0;x<S;x++){const P=x*g-d;for(let F=0;F<p;F++){const C=F*v-c;T.push(C,-P,0),w.push(0,0,1),y.push(F/h),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<h;P++){const F=P+p*x,C=P+p*(x+1),N=P+1+p*(x+1),L=P+1+p*x;E.push(F,C,L),E.push(C,N,L)}this.setIndex(E),this.setAttribute("position",new Di(T,3)),this.setAttribute("normal",new Di(w,3)),this.setAttribute("uv",new Di(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jc(t.width,t.height,t.widthSegments,t.heightSegments)}}function Br(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(p_(l))l.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(p_(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Pn(o){const t={};for(let i=0;i<o.length;i++){const s=Br(o[i]);for(const l in s)t[l]=s[l]}return t}function p_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function ay(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function xv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ve.workingColorSpace}const sy={clone:Br,merge:Pn};var ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ry,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=ay(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new be().setHex(l.value);break;case"v2":this.uniforms[s].value=new Re().fromArray(l.value);break;case"v3":this.uniforms[s].value=new J().fromArray(l.value);break;case"v4":this.uniforms[s].value=new sn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new ee().fromArray(l.value);break;case"m4":this.uniforms[s].value=new rn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ly extends xi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cy extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uy extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dc=new J,Uc=new zr,Bi=new J;class Sv extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dc,Uc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Uc,Bi.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Dc,Uc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Uc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const es=new J,m_=new Re,g_=new Re;class _i extends Sv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-t/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(es.x,es.y).multiplyScalar(-t/es.z)}getViewSize(t,i){return this.getViewBounds(t,m_,g_),i.subVectors(g_,m_)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(dd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Mv extends Sv{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=S*this.view.offsetY,m=h-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Rr=-90,Cr=1;class fy extends Bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Rr,Cr,t,i);l.layers=this.layers,this.add(l);const c=new _i(Rr,Cr,t,i);c.layers=this.layers,this.add(c);const d=new _i(Rr,Cr,t,i);d.layers=this.layers,this.add(d);const h=new _i(Rr,Cr,t,i);h.layers=this.layers,this.add(h);const m=new _i(Rr,Cr,t,i);m.layers=this.layers,this.add(m);const p=new _i(Rr,Cr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Wc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,S]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(v,g,E),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class dy extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const jh=class jh{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};jh.prototype.isMatrix2=!0;let __=jh;function v_(o,t,i,s){const l=hy(s);switch(i){case rv:return o*t;case lv:return o*t/l.components*l.byteLength;case Hh:return o*t/l.components*l.byteLength;case Ps:return o*t*2/l.components*l.byteLength;case Gh:return o*t*2/l.components*l.byteLength;case ov:return o*t*3/l.components*l.byteLength;case wi:return o*t*4/l.components*l.byteLength;case Vh:return o*t*4/l.components*l.byteLength;case Pc:case Fc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Bc:case zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case eh:case ih:return Math.max(o,16)*Math.max(t,8)/4;case th:case nh:return Math.max(o,8)*Math.max(t,8)/2;case ah:case sh:case oh:case lh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case rh:case Gc:case ch:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case hh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ph:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case mh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case gh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case _h:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case vh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case xh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Sh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case yh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bh:case Th:case Ah:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Rh:case Ch:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Vc:case wh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function hy(o){switch(o){case vi:case nv:return{byteLength:1,components:1};case ko:case iv:case Sa:return{byteLength:2,components:1};case zh:case Ih:return{byteLength:2,components:4};case ki:case Bh:case Hi:return{byteLength:4,components:1};case av:case sv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yv(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function py(o){const t=new WeakMap;function i(h,m){const p=h.array,S=h.usage,v=p.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,p,S),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)E=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function s(h,m,p){const S=m.array,v=m.updateRanges;if(o.bindBuffer(p,h),v.length===0)o.bufferSubData(p,0,S);else{v.sort((E,T)=>E.start-T.start);let g=0;for(let E=1;E<v.length;E++){const T=v[g],w=v[E];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++g,v[g]=w)}v.length=g+1;for(let E=0,T=v.length;E<T;E++){const w=v[E];o.bufferSubData(p,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=t.get(h);(!S||S.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var my=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ey=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,by=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ay=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ry=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ny=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,By=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Iy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",qy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$y=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,oE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ob=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ub=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ob=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:my,alphahash_pars_fragment:gy,alphamap_fragment:_y,alphamap_pars_fragment:vy,alphatest_fragment:xy,alphatest_pars_fragment:Sy,aomap_fragment:My,aomap_pars_fragment:yy,batching_pars_vertex:Ey,batching_vertex:by,begin_vertex:Ty,beginnormal_vertex:Ay,bsdfs:Ry,iridescence_fragment:Cy,bumpmap_pars_fragment:wy,clipping_planes_fragment:Dy,clipping_planes_pars_fragment:Uy,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Ny,color_fragment:Oy,color_pars_fragment:Py,color_pars_vertex:Fy,color_vertex:By,common:zy,cube_uv_reflection_fragment:Iy,defaultnormal_vertex:Hy,displacementmap_pars_vertex:Gy,displacementmap_vertex:Vy,emissivemap_fragment:Xy,emissivemap_pars_fragment:ky,colorspace_fragment:Wy,colorspace_pars_fragment:qy,envmap_fragment:Yy,envmap_common_pars_fragment:Zy,envmap_pars_fragment:Ky,envmap_pars_vertex:Qy,envmap_physical_pars_fragment:oE,envmap_vertex:Jy,fog_vertex:jy,fog_pars_vertex:$y,fog_fragment:tE,fog_pars_fragment:eE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:aE,lights_lambert_pars_fragment:sE,lights_pars_begin:rE,lights_toon_fragment:lE,lights_toon_pars_fragment:cE,lights_phong_fragment:uE,lights_phong_pars_fragment:fE,lights_physical_fragment:dE,lights_physical_pars_fragment:hE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,lightprobes_pars_fragment:_E,logdepthbuf_fragment:vE,logdepthbuf_pars_fragment:xE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:ME,map_fragment:yE,map_pars_fragment:EE,map_particle_fragment:bE,map_particle_pars_fragment:TE,metalnessmap_fragment:AE,metalnessmap_pars_fragment:RE,morphinstance_vertex:CE,morphcolor_vertex:wE,morphnormal_vertex:DE,morphtarget_pars_vertex:UE,morphtarget_vertex:LE,normal_fragment_begin:NE,normal_fragment_maps:OE,normal_pars_fragment:PE,normal_pars_vertex:FE,normal_vertex:BE,normalmap_pars_fragment:zE,clearcoat_normal_fragment_begin:IE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:GE,iridescence_pars_fragment:VE,opaque_fragment:XE,packing:kE,premultiplied_alpha_fragment:WE,project_vertex:qE,dithering_fragment:YE,dithering_pars_fragment:ZE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:JE,shadowmap_pars_vertex:jE,shadowmap_vertex:$E,shadowmask_pars_fragment:tb,skinbase_vertex:eb,skinning_pars_vertex:nb,skinning_vertex:ib,skinnormal_vertex:ab,specularmap_fragment:sb,specularmap_pars_fragment:rb,tonemapping_fragment:ob,tonemapping_pars_fragment:lb,transmission_fragment:cb,transmission_pars_fragment:ub,uv_pars_fragment:fb,uv_pars_vertex:db,uv_vertex:hb,worldpos_vertex:pb,background_vert:mb,background_frag:gb,backgroundCube_vert:_b,backgroundCube_frag:vb,cube_vert:xb,cube_frag:Sb,depth_vert:Mb,depth_frag:yb,distance_vert:Eb,distance_frag:bb,equirect_vert:Tb,equirect_frag:Ab,linedashed_vert:Rb,linedashed_frag:Cb,meshbasic_vert:wb,meshbasic_frag:Db,meshlambert_vert:Ub,meshlambert_frag:Lb,meshmatcap_vert:Nb,meshmatcap_frag:Ob,meshnormal_vert:Pb,meshnormal_frag:Fb,meshphong_vert:Bb,meshphong_frag:zb,meshphysical_vert:Ib,meshphysical_frag:Hb,meshtoon_vert:Gb,meshtoon_frag:Vb,points_vert:Xb,points_frag:kb,shadow_vert:Wb,shadow_frag:qb,sprite_vert:Yb,sprite_frag:Zb},Lt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Ii={basic:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Pn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Pn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Pn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Pn([Lt.points,Lt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Pn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Pn([Lt.common,Lt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Pn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Pn([Lt.sprite,Lt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:Pn([Lt.common,Lt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:Pn([Lt.lights,Lt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Ii.physical={uniforms:Pn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const Lc={r:0,b:0,g:0},Kb=new rn,Ev=new ee;Ev.set(-1,0,0,0,1,0,0,0,1);function Qb(o,t,i,s,l,c){const d=new be(0);let h=l===!0?0:1,m,p,S=null,v=0,g=null;function E(P){let F=P.isScene===!0?P.background:null;if(F&&F.isTexture){const C=P.backgroundBlurriness>0;F=t.get(F,C)}return F}function T(P){let F=!1;const C=E(P);C===null?y(d,h):C&&C.isColor&&(y(C,1),F=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,c):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(P,F){const C=E(F);C&&(C.isCubeTexture||C.mapping===Jc)?(p===void 0&&(p=new ya(new Ko(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Br(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,L,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Kb.makeRotationFromEuler(F.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Ev),p.material.toneMapped=ve.getTransfer(C.colorSpace)!==Pe,(S!==C||v!==C.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,S=C,v=C.version,g=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new ya(new jc(2,2),new xi({name:"BackgroundMaterial",uniforms:Br(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=ve.getTransfer(C.colorSpace)!==Pe,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||v!==C.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,S=C,v=C.version,g=o.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function y(P,F){P.getRGB(Lc,xv(o)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,F,c)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,F=1){d.set(P),h=F,y(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(P){h=P,y(d,h)},render:T,addToRenderList:w,dispose:x}}function Jb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function h(G,Z,dt,ht,j){let O=!1;const I=v(G,ht,dt,Z);c!==I&&(c=I,p(c.object)),O=E(G,ht,dt,j),O&&T(G,ht,dt,j),j!==null&&t.update(j,o.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,C(G,Z,dt,ht),j!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function m(){return o.createVertexArray()}function p(G){return o.bindVertexArray(G)}function S(G){return o.deleteVertexArray(G)}function v(G,Z,dt,ht){const j=ht.wireframe===!0;let O=s[Z.id];O===void 0&&(O={},s[Z.id]=O);const I=G.isInstancedMesh===!0?G.id:0;let et=O[I];et===void 0&&(et={},O[I]=et);let mt=et[dt.id];mt===void 0&&(mt={},et[dt.id]=mt);let vt=mt[j];return vt===void 0&&(vt=g(m()),mt[j]=vt),vt}function g(G){const Z=[],dt=[],ht=[];for(let j=0;j<i;j++)Z[j]=0,dt[j]=0,ht[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:dt,attributeDivisors:ht,object:G,attributes:{},index:null}}function E(G,Z,dt,ht){const j=c.attributes,O=Z.attributes;let I=0;const et=dt.getAttributes();for(const mt in et)if(et[mt].location>=0){const St=j[mt];let Mt=O[mt];if(Mt===void 0&&(mt==="instanceMatrix"&&G.instanceMatrix&&(Mt=G.instanceMatrix),mt==="instanceColor"&&G.instanceColor&&(Mt=G.instanceColor)),St===void 0||St.attribute!==Mt||Mt&&St.data!==Mt.data)return!0;I++}return c.attributesNum!==I||c.index!==ht}function T(G,Z,dt,ht){const j={},O=Z.attributes;let I=0;const et=dt.getAttributes();for(const mt in et)if(et[mt].location>=0){let St=O[mt];St===void 0&&(mt==="instanceMatrix"&&G.instanceMatrix&&(St=G.instanceMatrix),mt==="instanceColor"&&G.instanceColor&&(St=G.instanceColor));const Mt={};Mt.attribute=St,St&&St.data&&(Mt.data=St.data),j[mt]=Mt,I++}c.attributes=j,c.attributesNum=I,c.index=ht}function w(){const G=c.newAttributes;for(let Z=0,dt=G.length;Z<dt;Z++)G[Z]=0}function y(G){x(G,0)}function x(G,Z){const dt=c.newAttributes,ht=c.enabledAttributes,j=c.attributeDivisors;dt[G]=1,ht[G]===0&&(o.enableVertexAttribArray(G),ht[G]=1),j[G]!==Z&&(o.vertexAttribDivisor(G,Z),j[G]=Z)}function P(){const G=c.newAttributes,Z=c.enabledAttributes;for(let dt=0,ht=Z.length;dt<ht;dt++)Z[dt]!==G[dt]&&(o.disableVertexAttribArray(dt),Z[dt]=0)}function F(G,Z,dt,ht,j,O,I){I===!0?o.vertexAttribIPointer(G,Z,dt,j,O):o.vertexAttribPointer(G,Z,dt,ht,j,O)}function C(G,Z,dt,ht){w();const j=ht.attributes,O=dt.getAttributes(),I=Z.defaultAttributeValues;for(const et in O){const mt=O[et];if(mt.location>=0){let vt=j[et];if(vt===void 0&&(et==="instanceMatrix"&&G.instanceMatrix&&(vt=G.instanceMatrix),et==="instanceColor"&&G.instanceColor&&(vt=G.instanceColor)),vt!==void 0){const St=vt.normalized,Mt=vt.itemSize,Gt=t.get(vt);if(Gt===void 0)continue;const se=Gt.buffer,ne=Gt.type,ut=Gt.bytesPerElement,Tt=ne===o.INT||ne===o.UNSIGNED_INT||vt.gpuType===Bh;if(vt.isInterleavedBufferAttribute){const xt=vt.data,Qt=xt.stride,te=vt.offset;if(xt.isInstancedInterleavedBuffer){for(let qt=0;qt<mt.locationSize;qt++)x(mt.location+qt,xt.meshPerAttribute);G.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let qt=0;qt<mt.locationSize;qt++)y(mt.location+qt);o.bindBuffer(o.ARRAY_BUFFER,se);for(let qt=0;qt<mt.locationSize;qt++)F(mt.location+qt,Mt/mt.locationSize,ne,St,Qt*ut,(te+Mt/mt.locationSize*qt)*ut,Tt)}else{if(vt.isInstancedBufferAttribute){for(let xt=0;xt<mt.locationSize;xt++)x(mt.location+xt,vt.meshPerAttribute);G.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let xt=0;xt<mt.locationSize;xt++)y(mt.location+xt);o.bindBuffer(o.ARRAY_BUFFER,se);for(let xt=0;xt<mt.locationSize;xt++)F(mt.location+xt,Mt/mt.locationSize,ne,St,Mt*ut,Mt/mt.locationSize*xt*ut,Tt)}}else if(I!==void 0){const St=I[et];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(mt.location,St);break;case 3:o.vertexAttrib3fv(mt.location,St);break;case 4:o.vertexAttrib4fv(mt.location,St);break;default:o.vertexAttrib1fv(mt.location,St)}}}}P()}function N(){U();for(const G in s){const Z=s[G];for(const dt in Z){const ht=Z[dt];for(const j in ht){const O=ht[j];for(const I in O)S(O[I].object),delete O[I];delete ht[j]}}delete s[G]}}function L(G){if(s[G.id]===void 0)return;const Z=s[G.id];for(const dt in Z){const ht=Z[dt];for(const j in ht){const O=ht[j];for(const I in O)S(O[I].object),delete O[I];delete ht[j]}}delete s[G.id]}function z(G){for(const Z in s){const dt=s[Z];for(const ht in dt){const j=dt[ht];if(j[G.id]===void 0)continue;const O=j[G.id];for(const I in O)S(O[I].object),delete O[I];delete j[G.id]}}}function b(G){for(const Z in s){const dt=s[Z],ht=G.isInstancedMesh===!0?G.id:0,j=dt[ht];if(j!==void 0){for(const O in j){const I=j[O];for(const et in I)S(I[et].object),delete I[et];delete j[O]}delete dt[ht],Object.keys(dt).length===0&&delete s[Z]}}}function U(){X(),d=!0,c!==l&&(c=l,p(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:X,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function jb(o,t,i){let s;function l(m){s=m}function c(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function d(m,p,S){S!==0&&(o.drawArraysInstanced(s,m,p,S),i.update(p,s,S))}function h(m,p,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,S);let g=0;for(let E=0;E<S;E++)g+=p[E];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function $b(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==wi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const b=z===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==vi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Hi&&!b)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(jt("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),N=o.getParameter(o.MAX_SAMPLES),L=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:P,maxVaryings:F,maxFragmentUniforms:C,maxSamples:N,samples:L}}function tT(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new ws,h=new ee,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const E=v.length!==0||g||s!==0||l;return l=g,s=v.length,E},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=S(v,g,0)},this.setState=function(v,g,E){const T=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,x=o.get(v);if(!l||T===null||T.length===0||c&&!y)c?S(null):p();else{const P=c?0:s,F=P*4;let C=x.clippingState||null;m.value=C,C=S(T,g,F,E);for(let N=0;N!==F;++N)C[N]=i[N];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(v,g,E,T){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,T!==!0||y===null){const x=E+w*4,P=g.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<x)&&(y=new Float32Array(x));for(let F=0,C=E;F!==w;++F,C+=4)d.copy(v[F]).applyMatrix4(P,h),d.normal.toArray(y,C),y[C+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}const is=4,x_=[.125,.215,.35,.446,.526,.582],Us=20,eT=256,Ho=new Mv,S_=new be;let Bd=null,zd=0,Id=0,Hd=!1;const nT=new J;class M_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=nT}=c;Bd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bd,zd,Id),this._renderer.xr.enabled=Hd,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Os||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Sa,format:wi,colorSpace:Xc,depthBuffer:!1},l=y_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iT(c)),this._blurMaterial=sT(c,t,i),this._ggxMaterial=aT(c,t,i)}return l}_compileMaterial(t){const i=new ya(new ri,t);this._renderer.compile(i,Ho)}_sceneToCubeUV(t,i,s,l,c){const m=new _i(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,E=v.toneMapping;v.getClearColor(S_),v.toneMapping=Vi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ya(new Ko,new mv({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let x=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,x=!0):(y.color.copy(S_),x=!0);for(let F=0;F<6;F++){const C=F%3;C===0?(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[F],c.y,c.z)):C===1?(m.up.set(0,0,p[F]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[F],c.z)):(m.up.set(0,p[F],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[F]));const N=this._cubeSize;wr(l,C*N,F>2?N:0,N,N),v.setRenderTarget(l),x&&v.render(w,m),v.render(t,m)}v.toneMapping=E,v.autoClear=g,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Os||t.mapping===Pr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=b_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;wr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Ho)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-S*S),g=0+p*1.25,E=v*g,{_lodMax:T}=this,w=this._sizeLods[s],y=3*w*(s>T-is?s-T+is:0),x=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=E,m.mipInt.value=T-i,wr(c,y,x,3*w,2*w),l.setRenderTarget(c),l.render(h,Ho),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,wr(t,y,x,3*w,2*w),l.setRenderTarget(t),l.render(h,Ho)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Se("blur direction must be either latitudinal or longitudinal!");const S=3,v=this._lodMeshes[l];v.material=p;const g=p.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Us-1),w=c/T,y=isFinite(c)?1+Math.floor(S*w):Us;y>Us&&jt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const x=[];let P=0;for(let z=0;z<Us;++z){const b=z/w,U=Math.exp(-b*b/2);x.push(U),z===0?P+=U:z<y&&(P+=2*U)}for(let z=0;z<x.length;z++)x[z]=x[z]/P;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=d==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:F}=this;g.dTheta.value=T,g.mipInt.value=F-s;const C=this._sizeLods[l],N=3*C*(l>F-is?l-F+is:0),L=4*(this._cubeSize-C);wr(i,N,L,3*C,2*C),m.setRenderTarget(i),m.render(v,Ho)}}function iT(o){const t=[],i=[],s=[];let l=o;const c=o-is+1+x_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-is?m=x_[d-o+is-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),S=-p,v=1+p,g=[S,S,v,S,v,v,S,S,v,v,S,v],E=6,T=6,w=3,y=2,x=1,P=new Float32Array(w*T*E),F=new Float32Array(y*T*E),C=new Float32Array(x*T*E);for(let L=0;L<E;L++){const z=L%3*2/3-1,b=L>2?0:-1,U=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];P.set(U,w*T*L),F.set(g,y*T*L);const X=[L,L,L,L,L,L];C.set(X,x*T*L)}const N=new ri;N.setAttribute("position",new En(P,w)),N.setAttribute("uv",new En(F,y)),N.setAttribute("faceIndex",new En(C,x)),s.push(new ya(N,null)),l>is&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function y_(o,t,i){const s=new Xi(o,t,i);return s.texture.mapping=Jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function aT(o,t,i){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function sT(o,t,i){const s=new Float32Array(Us),l=new J(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function E_(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function b_(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function $c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class bv extends Xi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new _v(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ko(5,5,5),c=new xi({name:"CubemapFromEquirect",uniforms:Br(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:va});c.uniforms.tEquirect.value=i;const d=new ya(l,c),h=i.minFilter;return i.minFilter===Ls&&(i.minFilter=Nn),new fy(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function rT(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?d(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===cd||E===ud)if(t.has(g)){const T=t.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const w=new bv(T.height);return w.fromEquirectangularTexture(o,g),t.set(g,w),g.addEventListener("dispose",p),h(w.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const E=g.mapping,T=E===cd||E===ud,w=E===Os||E===Pr;if(T||w){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new M_(o)),y=T?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const P=g.image;return T&&P&&P.height>0||w&&P&&m(P)?(s===null&&(s=new M_(o)),y=T?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",S),y.texture):null}}}return g}function h(g,E){return E===cd?g.mapping=Os:E===ud&&(g.mapping=Pr),g}function m(g){let E=0;const T=6;for(let w=0;w<T;w++)g[w]!==void 0&&E++;return E===T}function p(g){const E=g.target;E.removeEventListener("dispose",p);const T=t.get(E);T!==void 0&&(t.delete(E),T.dispose())}function S(g){const E=g.target;E.removeEventListener("dispose",S);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function oT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ur("WebGLRenderer: "+s+" extension not supported."),l}}}function lT(o,t,i,s){const l={},c=new WeakMap;function d(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const T in g.attributes)t.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const E=c.get(g);E&&(t.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(v,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const E in g)t.update(g[E],o.ARRAY_BUFFER)}function p(v){const g=[],E=v.index,T=v.attributes.position;let w=0;if(T===void 0)return;if(E!==null){const P=E.array;w=E.version;for(let F=0,C=P.length;F<C;F+=3){const N=P[F+0],L=P[F+1],z=P[F+2];g.push(N,L,L,z,z,N)}}else{const P=T.array;w=T.version;for(let F=0,C=P.length/3-1;F<C;F+=3){const N=F+0,L=F+1,z=F+2;g.push(N,L,L,z,z,N)}}const y=new(T.count>=65535?pv:hv)(g,1);y.version=w;const x=c.get(v);x&&t.remove(x),c.set(v,y)}function S(v){const g=c.get(v);if(g){const E=v.index;E!==null&&g.version<E.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:S}}function cT(o,t,i){let s;function l(v){s=v}let c,d;function h(v){c=v.type,d=v.bytesPerElement}function m(v,g){o.drawElements(s,g,c,v*d),i.update(g,s,1)}function p(v,g,E){E!==0&&(o.drawElementsInstanced(s,g,c,v*d,E),i.update(g,s,E))}function S(v,g,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,E);let w=0;for(let y=0;y<E;y++)w+=g[y];i.update(w,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=S}function uT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:Se("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function fT(o,t,i){const s=new WeakMap,l=new sn;function c(d,h,m){const p=d.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=S!==void 0?S.length:0;let g=s.get(h);if(g===void 0||g.count!==v){let U=function(){z.dispose(),s.delete(h),h.removeEventListener("dispose",U)};g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let F=0;E===!0&&(F=1),T===!0&&(F=2),w===!0&&(F=3);let C=h.attributes.position.count*F,N=1;C>t.maxTextureSize&&(N=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const L=new Float32Array(C*N*4*v),z=new uv(L,C,N,v);z.type=Hi,z.needsUpdate=!0;const b=F*4;for(let X=0;X<v;X++){const G=y[X],Z=x[X],dt=P[X],ht=C*N*4*X;for(let j=0;j<G.count;j++){const O=j*b;E===!0&&(l.fromBufferAttribute(G,j),L[ht+O+0]=l.x,L[ht+O+1]=l.y,L[ht+O+2]=l.z,L[ht+O+3]=0),T===!0&&(l.fromBufferAttribute(Z,j),L[ht+O+4]=l.x,L[ht+O+5]=l.y,L[ht+O+6]=l.z,L[ht+O+7]=0),w===!0&&(l.fromBufferAttribute(dt,j),L[ht+O+8]=l.x,L[ht+O+9]=l.y,L[ht+O+10]=l.z,L[ht+O+11]=dt.itemSize===4?l.w:1)}}g={count:v,texture:z,size:new Re(C,N)},s.set(h,g),h.addEventListener("dispose",U)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let w=0;w<p.length;w++)E+=p[w];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function dT(o,t,i,s,l){let c=new WeakMap;function d(p){const S=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==S&&(t.update(g),c.set(g,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==S&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,S))),p.isSkinnedMesh){const E=p.skeleton;c.get(E)!==S&&(E.update(),c.set(E,S))}return g}function h(){c=new WeakMap}function m(p){const S=p.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:d,dispose:h}}const hT={[Z_]:"LINEAR_TONE_MAPPING",[K_]:"REINHARD_TONE_MAPPING",[Q_]:"CINEON_TONE_MAPPING",[J_]:"ACES_FILMIC_TONE_MAPPING",[$_]:"AGX_TONE_MAPPING",[tv]:"NEUTRAL_TONE_MAPPING",[j_]:"CUSTOM_TONE_MAPPING"};function pT(o,t,i,s,l,c){const d=new Xi(t,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Fr(t,i):void 0}),h=new Xi(t,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),m=new ri;m.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Di([0,2,0,0,2,0],2));const p=new ly({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new ya(m,p),v=new Mv(-1,1,1,-1,0,1);let g=null,E=null,T=!1,w,y=null,x=[],P=!1;this.setSize=function(F,C){d.setSize(F,C),h.setSize(F,C);for(let N=0;N<x.length;N++){const L=x[N];L.setSize&&L.setSize(F,C)}},this.setEffects=function(F){x=F,P=x.length>0&&x[0].isRenderPass===!0;const C=d.width,N=d.height;for(let L=0;L<x.length;L++){const z=x[L];z.setSize&&z.setSize(C,N)}},this.begin=function(F,C){if(T||F.toneMapping===Vi&&x.length===0)return!1;if(y=C,C!==null){const N=C.width,L=C.height;(d.width!==N||d.height!==L)&&this.setSize(N,L)}return P===!1&&F.setRenderTarget(d),w=F.toneMapping,F.toneMapping=Vi,!0},this.hasRenderPass=function(){return P},this.end=function(F,C){F.toneMapping=w,T=!0;let N=d,L=h;for(let z=0;z<x.length;z++){const b=x[z];if(b.enabled!==!1&&(b.render(F,L,N,C),b.needsSwap!==!1)){const U=N;N=L,L=U}}if(g!==F.outputColorSpace||E!==F.toneMapping){g=F.outputColorSpace,E=F.toneMapping,p.defines={},ve.getTransfer(g)===Pe&&(p.defines.SRGB_TRANSFER="");const z=hT[E];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,F.setRenderTarget(y),F.render(S,v),y=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),h.dispose(),m.dispose(),p.dispose()}}const Tv=new Fn,Lh=new Fr(1,1),Av=new uv,Rv=new OM,Cv=new _v,T_=[],A_=[],R_=new Float32Array(16),C_=new Float32Array(9),w_=new Float32Array(4);function Hr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=T_[l];if(c===void 0&&(c=new Float32Array(l),T_[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function xn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Sn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function tu(o,t){let i=A_[t];i===void 0&&(i=new Int32Array(t),A_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function mT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2fv(this.addr,t),Sn(i,t)}}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;o.uniform3fv(this.addr,t),Sn(i,t)}}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4fv(this.addr,t),Sn(i,t)}}function xT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;w_.set(s),o.uniformMatrix2fv(this.addr,!1,w_),Sn(i,s)}}function ST(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;C_.set(s),o.uniformMatrix3fv(this.addr,!1,C_),Sn(i,s)}}function MT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;R_.set(s),o.uniformMatrix4fv(this.addr,!1,R_),Sn(i,s)}}function yT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2iv(this.addr,t),Sn(i,t)}}function bT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3iv(this.addr,t),Sn(i,t)}}function TT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4iv(this.addr,t),Sn(i,t)}}function AT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function RT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2uiv(this.addr,t),Sn(i,t)}}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3uiv(this.addr,t),Sn(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4uiv(this.addr,t),Sn(i,t)}}function DT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Lh.compareFunction=i.isReversedDepthBuffer()?kh:Xh,c=Lh):c=Tv,i.setTexture2D(t||c,l)}function UT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Rv,l)}function LT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Cv,l)}function NT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Av,l)}function OT(o){switch(o){case 5126:return mT;case 35664:return gT;case 35665:return _T;case 35666:return vT;case 35674:return xT;case 35675:return ST;case 35676:return MT;case 5124:case 35670:return yT;case 35667:case 35671:return ET;case 35668:case 35672:return bT;case 35669:case 35673:return TT;case 5125:return AT;case 36294:return RT;case 36295:return CT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return DT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return NT}}function PT(o,t){o.uniform1fv(this.addr,t)}function FT(o,t){const i=Hr(t,this.size,2);o.uniform2fv(this.addr,i)}function BT(o,t){const i=Hr(t,this.size,3);o.uniform3fv(this.addr,i)}function zT(o,t){const i=Hr(t,this.size,4);o.uniform4fv(this.addr,i)}function IT(o,t){const i=Hr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function HT(o,t){const i=Hr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function GT(o,t){const i=Hr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function VT(o,t){o.uniform1iv(this.addr,t)}function XT(o,t){o.uniform2iv(this.addr,t)}function kT(o,t){o.uniform3iv(this.addr,t)}function WT(o,t){o.uniform4iv(this.addr,t)}function qT(o,t){o.uniform1uiv(this.addr,t)}function YT(o,t){o.uniform2uiv(this.addr,t)}function ZT(o,t){o.uniform3uiv(this.addr,t)}function KT(o,t){o.uniform4uiv(this.addr,t)}function QT(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Lh:d=Tv;for(let h=0;h!==l;++h)i.setTexture2D(t[h]||d,c[h])}function JT(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Rv,c[d])}function jT(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Cv,c[d])}function $T(o,t,i){const s=this.cache,l=t.length,c=tu(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Av,c[d])}function tA(o){switch(o){case 5126:return PT;case 35664:return FT;case 35665:return BT;case 35666:return zT;case 35674:return IT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return VT;case 35667:case 35671:return XT;case 35668:case 35672:return kT;case 35669:case 35673:return WT;case 5125:return qT;case 36294:return YT;case 36295:return ZT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return JT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return $T}}class eA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=OT(i.type)}}class nA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tA(i.type)}}class iA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function D_(o,t){o.seq.push(t),o.map[t.id]=t}function aA(o,t,i){const s=o.name,l=s.length;for(Gd.lastIndex=0;;){const c=Gd.exec(s),d=Gd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){D_(i,p===void 0?new eA(h,o,t):new nA(h,o,t));break}else{let v=i.map[h];v===void 0&&(v=new iA(h),D_(i,v)),i=v}}}class Ic{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=t.getActiveUniform(i,d),m=t.getUniformLocation(i,h.name);aA(h,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function U_(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const sA=37297;let rA=0;function oA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const L_=new ee;function lA(o){ve._getMatrix(L_,ve.workingColorSpace,o);const t=`mat3( ${L_.elements.map(i=>i.toFixed(4))} )`;switch(ve.getTransfer(o)){case kc:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function N_(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+oA(o.getShaderSource(t),h)}else return c}function cA(o,t){const i=lA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const uA={[Z_]:"Linear",[K_]:"Reinhard",[Q_]:"Cineon",[J_]:"ACESFilmic",[$_]:"AgX",[tv]:"Neutral",[j_]:"Custom"};function fA(o,t){const i=uA[t];return i===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nc=new J;function dA(){ve.getLuminanceCoefficients(Nc);const o=Nc.x.toFixed(4),t=Nc.y.toFixed(4),i=Nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function pA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function mA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Xo(o){return o!==""}function O_(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function P_(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(o){return o.replace(gA,vA)}const _A=new Map;function vA(o,t){let i=oe[t];if(i===void 0){const s=_A.get(t);if(s!==void 0)i=oe[s],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nh(i)}const xA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F_(o){return o.replace(xA,SA)}function SA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function B_(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const MA={[Oc]:"SHADOWMAP_TYPE_PCF",[Vo]:"SHADOWMAP_TYPE_VSM"};function yA(o){return MA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const EA={[Os]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[Jc]:"ENVMAP_TYPE_CUBE_UV"};function bA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":EA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const TA={[Pr]:"ENVMAP_MODE_REFRACTION"};function AA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":TA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RA={[Y_]:"ENVMAP_BLENDING_MULTIPLY",[hM]:"ENVMAP_BLENDING_MIX",[pM]:"ENVMAP_BLENDING_ADD"};function CA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":RA[o.combine]||"ENVMAP_BLENDING_NONE"}function wA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function DA(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=yA(i),p=bA(i),S=AA(i),v=CA(i),g=wA(i),E=hA(i),T=pA(c),w=l.createProgram();let y,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(y=[B_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[B_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?oe.tonemapping_pars_fragment:"",i.toneMapping!==Vi?fA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,cA("linearToOutputTexel",i.outputColorSpace),dA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),d=Nh(d),d=O_(d,i),d=P_(d,i),h=Nh(h),h=O_(h,i),h=P_(h,i),d=F_(d),h=F_(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===W0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===W0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=P+y+d,C=P+x+h,N=U_(l,l.VERTEX_SHADER,F),L=U_(l,l.FRAGMENT_SHADER,C);l.attachShader(w,N),l.attachShader(w,L),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(G){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(w)||"",dt=l.getShaderInfoLog(N)||"",ht=l.getShaderInfoLog(L)||"",j=Z.trim(),O=dt.trim(),I=ht.trim();let et=!0,mt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(et=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,N,L);else{const vt=N_(l,N,"vertex"),St=N_(l,L,"fragment");Se("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+vt+`
`+St)}else j!==""?jt("WebGLProgram: Program Info Log:",j):(O===""||I==="")&&(mt=!1);mt&&(G.diagnostics={runnable:et,programLog:j,vertexShader:{log:O,prefix:y},fragmentShader:{log:I,prefix:x}})}l.deleteShader(N),l.deleteShader(L),b=new Ic(l,w),U=mA(l,w)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let X=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=l.getProgramParameter(w,sA)),X},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=L,this}let UA=0;class LA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new NA(t),i.set(t,s)),s}}class NA{constructor(t){this.id=UA++,this.code=t,this.usedTimes=0}}function OA(o){return o===Ps||o===Gc||o===Vc}function PA(o,t,i,s,l,c){const d=new fv,h=new LA,m=new Set,p=[],S=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,U,X,G,Z,dt){const ht=G.fog,j=Z.geometry,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,I=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,et=t.get(b.envMap||O,I),mt=et&&et.mapping===Jc?et.image.height:null,vt=E[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&jt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const St=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Mt=St!==void 0?St.length:0;let Gt=0;j.morphAttributes.position!==void 0&&(Gt=1),j.morphAttributes.normal!==void 0&&(Gt=2),j.morphAttributes.color!==void 0&&(Gt=3);let se,ne,ut,Tt;if(vt){const Bt=Ii[vt];se=Bt.vertexShader,ne=Bt.fragmentShader}else{se=b.vertexShader,ne=b.fragmentShader;const Bt=h.getVertexShaderStage(b),Ze=h.getFragmentShaderStage(b);h.update(b,Bt,Ze),ut=Bt.id,Tt=Ze.id}const xt=o.getRenderTarget(),Qt=o.state.buffers.depth.getReversed(),te=Z.isInstancedMesh===!0,qt=Z.isBatchedMesh===!0,ke=!!b.map,le=!!b.matcap,me=!!et,ge=!!b.aoMap,ce=!!b.lightMap,je=!!b.bumpMap&&b.wireframe===!1,$e=!!b.normalMap,tn=!!b.displacementMap,on=!!b.emissiveMap,Xe=!!b.metalnessMap,en=!!b.roughnessMap,W=b.anisotropy>0,Fe=b.clearcoat>0,Te=b.dispersion>0,D=b.iridescence>0,M=b.sheen>0,Y=b.transmission>0,nt=W&&!!b.anisotropyMap,ot=Fe&&!!b.clearcoatMap,yt=Fe&&!!b.clearcoatNormalMap,Rt=Fe&&!!b.clearcoatRoughnessMap,rt=D&&!!b.iridescenceMap,lt=D&&!!b.iridescenceThicknessMap,bt=M&&!!b.sheenColorMap,Ot=M&&!!b.sheenRoughnessMap,Dt=!!b.specularMap,Ct=!!b.specularColorMap,Wt=!!b.specularIntensityMap,Yt=Y&&!!b.transmissionMap,$t=Y&&!!b.thicknessMap,V=!!b.gradientMap,Et=!!b.alphaMap,ft=b.alphaTest>0,At=!!b.alphaHash,Nt=!!b.extensions;let _t=Vi;b.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(_t=o.toneMapping);const Vt={shaderID:vt,shaderType:b.type,shaderName:b.name,vertexShader:se,fragmentShader:ne,defines:b.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:qt,batchingColor:qt&&Z._colorsTexture!==null,instancing:te,instancingColor:te&&Z.instanceColor!==null,instancingMorph:te&&Z.morphTexture!==null,outputColorSpace:xt===null?o.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:ve.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:le,envMap:me,envMapMode:me&&et.mapping,envMapCubeUVHeight:mt,aoMap:ge,lightMap:ce,bumpMap:je,normalMap:$e,displacementMap:tn,emissiveMap:on,normalMapObjectSpace:$e&&b.normalMapType===_M,normalMapTangentSpace:$e&&b.normalMapType===V0,packedNormalMap:$e&&b.normalMapType===V0&&OA(b.normalMap.format),metalnessMap:Xe,roughnessMap:en,anisotropy:W,anisotropyMap:nt,clearcoat:Fe,clearcoatMap:ot,clearcoatNormalMap:yt,clearcoatRoughnessMap:Rt,dispersion:Te,iridescence:D,iridescenceMap:rt,iridescenceThicknessMap:lt,sheen:M,sheenColorMap:bt,sheenRoughnessMap:Ot,specularMap:Dt,specularColorMap:Ct,specularIntensityMap:Wt,transmission:Y,transmissionMap:Yt,thicknessMap:$t,gradientMap:V,opaque:b.transparent===!1&&b.blending===Dr&&b.alphaToCoverage===!1,alphaMap:Et,alphaTest:ft,alphaHash:At,combine:b.combine,mapUv:ke&&T(b.map.channel),aoMapUv:ge&&T(b.aoMap.channel),lightMapUv:ce&&T(b.lightMap.channel),bumpMapUv:je&&T(b.bumpMap.channel),normalMapUv:$e&&T(b.normalMap.channel),displacementMapUv:tn&&T(b.displacementMap.channel),emissiveMapUv:on&&T(b.emissiveMap.channel),metalnessMapUv:Xe&&T(b.metalnessMap.channel),roughnessMapUv:en&&T(b.roughnessMap.channel),anisotropyMapUv:nt&&T(b.anisotropyMap.channel),clearcoatMapUv:ot&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:yt&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&T(b.sheenRoughnessMap.channel),specularMapUv:Dt&&T(b.specularMap.channel),specularColorMapUv:Ct&&T(b.specularColorMap.channel),specularIntensityMapUv:Wt&&T(b.specularIntensityMap.channel),transmissionMapUv:Yt&&T(b.transmissionMap.channel),thicknessMapUv:$t&&T(b.thicknessMap.channel),alphaMapUv:Et&&T(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&($e||W),vertexNormals:!!j.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(ke||Et),fog:!!ht,useFog:b.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||j.attributes.normal===void 0&&$e===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Qt,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Gt,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:dt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:_t,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&ve.getTransfer(b.map.colorSpace)===Pe,decodeVideoTextureEmissive:on&&b.emissiveMap.isVideoTexture===!0&&ve.getTransfer(b.emissiveMap.colorSpace)===Pe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ga,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Nt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&b.extensions.multiDraw===!0||qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Vt.vertexUv1s=m.has(1),Vt.vertexUv2s=m.has(2),Vt.vertexUv3s=m.has(3),m.clear(),Vt}function y(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const X in b.defines)U.push(X),U.push(b.defines[X]);return b.isRawShaderMaterial===!1&&(x(U,b),P(U,b),U.push(o.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function x(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function P(b,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),U.packedNormalMap&&d.enable(22),U.vertexNormals&&d.enable(23),b.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),U.numLightProbeGrids>0&&d.enable(22),U.hasPositionAttribute&&d.enable(23),b.push(d.mask)}function F(b){const U=E[b.type];let X;if(U){const G=Ii[U];X=sy.clone(G.uniforms)}else X=b.uniforms;return X}function C(b,U){let X=S.get(U);return X!==void 0?++X.usedTimes:(X=new DA(o,U,b,l),p.push(X),S.set(U,X)),X}function N(b){if(--b.usedTimes===0){const U=p.indexOf(b);p[U]=p[p.length-1],p.pop(),S.delete(b.cacheKey),b.destroy()}}function L(b){h.remove(b)}function z(){h.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:F,acquireProgram:C,releaseProgram:N,releaseShaderCache:L,programs:p,dispose:z}}function FA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function BA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function z_(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function I_(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function h(g,E,T,w,y,x){let P=o[t];return P===void 0?(P={id:g.id,object:g,geometry:E,material:T,materialVariant:d(g),groupOrder:w,renderOrder:g.renderOrder,z:y,group:x},o[t]=P):(P.id=g.id,P.object=g,P.geometry=E,P.material=T,P.materialVariant=d(g),P.groupOrder=w,P.renderOrder=g.renderOrder,P.z=y,P.group=x),t++,P}function m(g,E,T,w,y,x){const P=h(g,E,T,w,y,x);T.transmission>0?s.push(P):T.transparent===!0?l.push(P):i.push(P)}function p(g,E,T,w,y,x){const P=h(g,E,T,w,y,x);T.transmission>0?s.unshift(P):T.transparent===!0?l.unshift(P):i.unshift(P)}function S(g,E,T){i.length>1&&i.sort(g||BA),s.length>1&&s.sort(E||z_),l.length>1&&l.sort(E||z_),T&&(i.reverse(),s.reverse(),l.reverse())}function v(){for(let g=t,E=o.length;g<E;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:S}}function zA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new I_,o.set(s,[d])):l>=c.length?(d=new I_,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function IA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new be};break;case"SpotLight":i={position:new J,direction:new J,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new J,halfWidth:new J,halfHeight:new J};break}return o[t.id]=i,i}}}function HA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let GA=0;function VA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function XA(o){const t=new IA,i=HA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new J);const l=new J,c=new rn,d=new rn;function h(p){let S=0,v=0,g=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let E=0,T=0,w=0,y=0,x=0,P=0,F=0,C=0,N=0,L=0,z=0;p.sort(VA);for(let U=0,X=p.length;U<X;U++){const G=p[U],Z=G.color,dt=G.intensity,ht=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ps?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)S+=Z.r*dt,v+=Z.g*dt,g+=Z.b*dt;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],dt);z++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const I=G.shadow,et=i.get(G);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,s.directionalShadow[E]=et,s.directionalShadowMap[E]=j,s.directionalShadowMatrix[E]=G.shadow.matrix,P++}s.directional[E]=O,E++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(Z).multiplyScalar(dt),O.distance=ht,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[w]=O;const I=G.shadow;if(G.map&&(s.spotLightMap[N]=G.map,N++,I.updateMatrices(G),G.castShadow&&L++),s.spotLightMatrix[w]=I.matrix,G.castShadow){const et=i.get(G);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,s.spotShadow[w]=et,s.spotShadowMap[w]=j,C++}w++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(Z).multiplyScalar(dt),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=O,y++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const I=G.shadow,et=i.get(G);et.shadowIntensity=I.intensity,et.shadowBias=I.bias,et.shadowNormalBias=I.normalBias,et.shadowRadius=I.radius,et.shadowMapSize=I.mapSize,et.shadowCameraNear=I.camera.near,et.shadowCameraFar=I.camera.far,s.pointShadow[T]=et,s.pointShadowMap[T]=j,s.pointShadowMatrix[T]=G.shadow.matrix,F++}s.point[T]=O,T++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(dt),O.groundColor.copy(G.groundColor).multiplyScalar(dt),s.hemi[x]=O,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==E||b.pointLength!==T||b.spotLength!==w||b.rectAreaLength!==y||b.hemiLength!==x||b.numDirectionalShadows!==P||b.numPointShadows!==F||b.numSpotShadows!==C||b.numSpotMaps!==N||b.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=y,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=C+N-L,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=z,b.directionalLength=E,b.pointLength=T,b.spotLength=w,b.rectAreaLength=y,b.hemiLength=x,b.numDirectionalShadows=P,b.numPointShadows=F,b.numSpotShadows=C,b.numSpotMaps=N,b.numLightProbes=z,s.version=GA++)}function m(p,S){let v=0,g=0,E=0,T=0,w=0;const y=S.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const F=p[x];if(F.isDirectionalLight){const C=s.directional[v];C.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),v++}else if(F.isSpotLight){const C=s.spot[E];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(y),E++}else if(F.isRectAreaLight){const C=s.rectArea[T];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(y),d.identity(),c.copy(F.matrixWorld),c.premultiply(y),d.extractRotation(c),C.halfWidth.set(F.width*.5,0,0),C.halfHeight.set(0,F.height*.5,0),C.halfWidth.applyMatrix4(d),C.halfHeight.applyMatrix4(d),T++}else if(F.isPointLight){const C=s.point[g];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(y),g++}else if(F.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(F.matrixWorld),C.direction.transformDirection(y),w++}}}return{setup:h,setupView:m,state:s}}function H_(o){const t=new XA(o),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function S(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:S,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function kA(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new H_(o),t.set(l,[h])):c>=d.length?(h=new H_(o),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YA=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],ZA=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],G_=new rn,Go=new J,Vd=new J;function KA(o,t,i){let s=new gv;const l=new Re,c=new Re,d=new sn,h=new cy,m=new uy,p={},S=i.maxTextureSize,v={[as]:qn,[qn]:as,[ga]:ga},g=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:WA,fragmentShader:qA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const T=new ri;T.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ya(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let x=this.type;this.render=function(L,z,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===ZS&&(jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Oc);const U=o.getRenderTarget(),X=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(va),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const dt=x!==this.type;dt&&z.traverse(function(ht){ht.material&&(Array.isArray(ht.material)?ht.material.forEach(j=>j.needsUpdate=!0):ht.material.needsUpdate=!0)});for(let ht=0,j=L.length;ht<j;ht++){const O=L[ht],I=O.shadow;if(I===void 0){jt("WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const et=I.getFrameExtents();l.multiply(et),c.copy(I.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/et.x),l.x=c.x*et.x,I.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/et.y),l.y=c.y*et.y,I.mapSize.y=c.y));const mt=o.state.buffers.depth.getReversed();if(I.camera._reversedDepth=mt,I.map===null||dt===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Vo){if(O.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Xi(l.x,l.y,{format:Ps,type:Sa,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),I.map.texture.name=O.name+".shadowMap",I.map.depthTexture=new Fr(l.x,l.y,Hi),I.map.depthTexture.name=O.name+".shadowMapDepth",I.map.depthTexture.format=Ma,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=wn,I.map.depthTexture.magFilter=wn}else O.isPointLight?(I.map=new bv(l.x),I.map.depthTexture=new iy(l.x,ki)):(I.map=new Xi(l.x,l.y),I.map.depthTexture=new Fr(l.x,l.y,ki)),I.map.depthTexture.name=O.name+".shadowMap",I.map.depthTexture.format=Ma,this.type===Oc?(I.map.depthTexture.compareFunction=mt?kh:Xh,I.map.depthTexture.minFilter=Nn,I.map.depthTexture.magFilter=Nn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=wn,I.map.depthTexture.magFilter=wn);I.camera.updateProjectionMatrix()}const vt=I.map.isWebGLCubeRenderTarget?6:1;for(let St=0;St<vt;St++){if(I.map.isWebGLCubeRenderTarget)o.setRenderTarget(I.map,St),o.clear();else{St===0&&(o.setRenderTarget(I.map),o.clear());const Mt=I.getViewport(St);d.set(c.x*Mt.x,c.y*Mt.y,c.x*Mt.z,c.y*Mt.w),Z.viewport(d)}if(O.isPointLight){const Mt=I.camera,Gt=I.matrix,se=O.distance||Mt.far;se!==Mt.far&&(Mt.far=se,Mt.updateProjectionMatrix()),Go.setFromMatrixPosition(O.matrixWorld),Mt.position.copy(Go),Vd.copy(Mt.position),Vd.add(YA[St]),Mt.up.copy(ZA[St]),Mt.lookAt(Vd),Mt.updateMatrixWorld(),Gt.makeTranslation(-Go.x,-Go.y,-Go.z),G_.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),I._frustum.setFromProjectionMatrix(G_,Mt.coordinateSystem,Mt.reversedDepth)}else I.updateMatrices(O);s=I.getFrustum(),C(z,b,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===Vo&&P(I,b),I.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(U,X,G)};function P(L,z){const b=t.update(w);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,E.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Xi(l.x,l.y,{format:Ps,type:Sa})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,o.setRenderTarget(L.mapPass),o.clear(),o.renderBufferDirect(z,null,b,g,w,null),E.uniforms.shadow_pass.value=L.mapPass.texture,E.uniforms.resolution.value=L.mapSize,E.uniforms.radius.value=L.radius,o.setRenderTarget(L.map),o.clear(),o.renderBufferDirect(z,null,b,E,w,null)}function F(L,z,b,U){let X=null;const G=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)X=G;else if(X=b.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=X.uuid,dt=z.uuid;let ht=p[Z];ht===void 0&&(ht={},p[Z]=ht);let j=ht[dt];j===void 0&&(j=X.clone(),ht[dt]=j,z.addEventListener("dispose",N)),X=j}if(X.visible=z.visible,X.wireframe=z.wireframe,U===Vo?X.side=z.shadowSide!==null?z.shadowSide:z.side:X.side=z.shadowSide!==null?z.shadowSide:v[z.side],X.alphaMap=z.alphaMap,X.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,X.map=z.map,X.clipShadows=z.clipShadows,X.clippingPlanes=z.clippingPlanes,X.clipIntersection=z.clipIntersection,X.displacementMap=z.displacementMap,X.displacementScale=z.displacementScale,X.displacementBias=z.displacementBias,X.wireframeLinewidth=z.wireframeLinewidth,X.linewidth=z.linewidth,b.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Z=o.properties.get(X);Z.light=b}return X}function C(L,z,b,U,X){if(L.visible===!1)return;if(L.layers.test(z.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&X===Vo)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const dt=t.update(L),ht=L.material;if(Array.isArray(ht)){const j=dt.groups;for(let O=0,I=j.length;O<I;O++){const et=j[O],mt=ht[et.materialIndex];if(mt&&mt.visible){const vt=F(L,mt,U,X);L.onBeforeShadow(o,L,z,b,dt,vt,et),o.renderBufferDirect(b,null,dt,vt,L,et),L.onAfterShadow(o,L,z,b,dt,vt,et)}}}else if(ht.visible){const j=F(L,ht,U,X);L.onBeforeShadow(o,L,z,b,dt,j,null),o.renderBufferDirect(b,null,dt,j,L,null),L.onAfterShadow(o,L,z,b,dt,j,null)}}const Z=L.children;for(let dt=0,ht=Z.length;dt<ht;dt++)C(Z[dt],z,b,U,X)}function N(L){L.target.removeEventListener("dispose",N);for(const b in p){const U=p[b],X=L.target.uuid;X in U&&(U[X].dispose(),delete U[X])}}}function QA(o,t){function i(){let V=!1;const Et=new sn;let ft=null;const At=new sn(0,0,0,0);return{setMask:function(Nt){ft!==Nt&&!V&&(o.colorMask(Nt,Nt,Nt,Nt),ft=Nt)},setLocked:function(Nt){V=Nt},setClear:function(Nt,_t,Vt,Bt,Ze){Ze===!0&&(Nt*=Bt,_t*=Bt,Vt*=Bt),Et.set(Nt,_t,Vt,Bt),At.equals(Et)===!1&&(o.clearColor(Nt,_t,Vt,Bt),At.copy(Et))},reset:function(){V=!1,ft=null,At.set(-1,0,0,0)}}}function s(){let V=!1,Et=!1,ft=null,At=null,Nt=null;return{setReversed:function(_t){if(Et!==_t){const Vt=t.get("EXT_clip_control");_t?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Et=_t;const Bt=Nt;Nt=null,this.setClear(Bt)}},getReversed:function(){return Et},setTest:function(_t){_t?xt(o.DEPTH_TEST):Qt(o.DEPTH_TEST)},setMask:function(_t){ft!==_t&&!V&&(o.depthMask(_t),ft=_t)},setFunc:function(_t){if(Et&&(_t=RM[_t]),At!==_t){switch(_t){case Wd:o.depthFunc(o.NEVER);break;case qd:o.depthFunc(o.ALWAYS);break;case Yd:o.depthFunc(o.LESS);break;case Or:o.depthFunc(o.LEQUAL);break;case Zd:o.depthFunc(o.EQUAL);break;case Kd:o.depthFunc(o.GEQUAL);break;case Qd:o.depthFunc(o.GREATER);break;case Jd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}At=_t}},setLocked:function(_t){V=_t},setClear:function(_t){Nt!==_t&&(Nt=_t,Et&&(_t=1-_t),o.clearDepth(_t))},reset:function(){V=!1,ft=null,At=null,Nt=null,Et=!1}}}function l(){let V=!1,Et=null,ft=null,At=null,Nt=null,_t=null,Vt=null,Bt=null,Ze=null;return{setTest:function(we){V||(we?xt(o.STENCIL_TEST):Qt(o.STENCIL_TEST))},setMask:function(we){Et!==we&&!V&&(o.stencilMask(we),Et=we)},setFunc:function(we,Yn,Zn){(ft!==we||At!==Yn||Nt!==Zn)&&(o.stencilFunc(we,Yn,Zn),ft=we,At=Yn,Nt=Zn)},setOp:function(we,Yn,Zn){(_t!==we||Vt!==Yn||Bt!==Zn)&&(o.stencilOp(we,Yn,Zn),_t=we,Vt=Yn,Bt=Zn)},setLocked:function(we){V=we},setClear:function(we){Ze!==we&&(o.clearStencil(we),Ze=we)},reset:function(){V=!1,Et=null,ft=null,At=null,Nt=null,_t=null,Vt=null,Bt=null,Ze=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let S={},v={},g={},E=new WeakMap,T=[],w=null,y=!1,x=null,P=null,F=null,C=null,N=null,L=null,z=null,b=new be(0,0,0),U=0,X=!1,G=null,Z=null,dt=null,ht=null,j=null;const O=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,et=0;const mt=o.getParameter(o.VERSION);mt.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(mt)[1]),I=et>=1):mt.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(mt)[1]),I=et>=2);let vt=null,St={};const Mt=o.getParameter(o.SCISSOR_BOX),Gt=o.getParameter(o.VIEWPORT),se=new sn().fromArray(Mt),ne=new sn().fromArray(Gt);function ut(V,Et,ft,At){const Nt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(V,_t),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Vt=0;Vt<ft;Vt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Et,0,o.RGBA,1,1,At,0,o.RGBA,o.UNSIGNED_BYTE,Nt):o.texImage2D(Et+Vt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Nt);return _t}const Tt={};Tt[o.TEXTURE_2D]=ut(o.TEXTURE_2D,o.TEXTURE_2D,1),Tt[o.TEXTURE_CUBE_MAP]=ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[o.TEXTURE_2D_ARRAY]=ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Tt[o.TEXTURE_3D]=ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),xt(o.DEPTH_TEST),d.setFunc(Or),je(!1),$e(z0),xt(o.CULL_FACE),ge(va);function xt(V){S[V]!==!0&&(o.enable(V),S[V]=!0)}function Qt(V){S[V]!==!1&&(o.disable(V),S[V]=!1)}function te(V,Et){return g[V]!==Et?(o.bindFramebuffer(V,Et),g[V]=Et,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Et),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Et),!0):!1}function qt(V,Et){let ft=T,At=!1;if(V){ft=E.get(Et),ft===void 0&&(ft=[],E.set(Et,ft));const Nt=V.textures;if(ft.length!==Nt.length||ft[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Vt=Nt.length;_t<Vt;_t++)ft[_t]=o.COLOR_ATTACHMENT0+_t;ft.length=Nt.length,At=!0}}else ft[0]!==o.BACK&&(ft[0]=o.BACK,At=!0);At&&o.drawBuffers(ft)}function ke(V){return w!==V?(o.useProgram(V),w=V,!0):!1}const le={[Ds]:o.FUNC_ADD,[QS]:o.FUNC_SUBTRACT,[JS]:o.FUNC_REVERSE_SUBTRACT};le[jS]=o.MIN,le[$S]=o.MAX;const me={[tM]:o.ZERO,[eM]:o.ONE,[nM]:o.SRC_COLOR,[Xd]:o.SRC_ALPHA,[lM]:o.SRC_ALPHA_SATURATE,[rM]:o.DST_COLOR,[aM]:o.DST_ALPHA,[iM]:o.ONE_MINUS_SRC_COLOR,[kd]:o.ONE_MINUS_SRC_ALPHA,[oM]:o.ONE_MINUS_DST_COLOR,[sM]:o.ONE_MINUS_DST_ALPHA,[cM]:o.CONSTANT_COLOR,[uM]:o.ONE_MINUS_CONSTANT_COLOR,[fM]:o.CONSTANT_ALPHA,[dM]:o.ONE_MINUS_CONSTANT_ALPHA};function ge(V,Et,ft,At,Nt,_t,Vt,Bt,Ze,we){if(V===va){y===!0&&(Qt(o.BLEND),y=!1);return}if(y===!1&&(xt(o.BLEND),y=!0),V!==KS){if(V!==x||we!==X){if((P!==Ds||N!==Ds)&&(o.blendEquation(o.FUNC_ADD),P=Ds,N=Ds),we)switch(V){case Dr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I0:o.blendFunc(o.ONE,o.ONE);break;case H0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case G0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Se("WebGLState: Invalid blending: ",V);break}else switch(V){case Dr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case H0:Se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G0:Se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Se("WebGLState: Invalid blending: ",V);break}F=null,C=null,L=null,z=null,b.set(0,0,0),U=0,x=V,X=we}return}Nt=Nt||Et,_t=_t||ft,Vt=Vt||At,(Et!==P||Nt!==N)&&(o.blendEquationSeparate(le[Et],le[Nt]),P=Et,N=Nt),(ft!==F||At!==C||_t!==L||Vt!==z)&&(o.blendFuncSeparate(me[ft],me[At],me[_t],me[Vt]),F=ft,C=At,L=_t,z=Vt),(Bt.equals(b)===!1||Ze!==U)&&(o.blendColor(Bt.r,Bt.g,Bt.b,Ze),b.copy(Bt),U=Ze),x=V,X=!1}function ce(V,Et){V.side===ga?Qt(o.CULL_FACE):xt(o.CULL_FACE);let ft=V.side===qn;Et&&(ft=!ft),je(ft),V.blending===Dr&&V.transparent===!1?ge(va):ge(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const At=V.stencilWrite;h.setTest(At),At&&(h.setMask(V.stencilWriteMask),h.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),h.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),on(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):Qt(o.SAMPLE_ALPHA_TO_COVERAGE)}function je(V){G!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),G=V)}function $e(V){V!==qS?(xt(o.CULL_FACE),V!==Z&&(V===z0?o.cullFace(o.BACK):V===YS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Qt(o.CULL_FACE),Z=V}function tn(V){V!==dt&&(I&&o.lineWidth(V),dt=V)}function on(V,Et,ft){V?(xt(o.POLYGON_OFFSET_FILL),(ht!==Et||j!==ft)&&(ht=Et,j=ft,d.getReversed()&&(Et=-Et),o.polygonOffset(Et,ft))):Qt(o.POLYGON_OFFSET_FILL)}function Xe(V){V?xt(o.SCISSOR_TEST):Qt(o.SCISSOR_TEST)}function en(V){V===void 0&&(V=o.TEXTURE0+O-1),vt!==V&&(o.activeTexture(V),vt=V)}function W(V,Et,ft){ft===void 0&&(vt===null?ft=o.TEXTURE0+O-1:ft=vt);let At=St[ft];At===void 0&&(At={type:void 0,texture:void 0},St[ft]=At),(At.type!==V||At.texture!==Et)&&(vt!==ft&&(o.activeTexture(ft),vt=ft),o.bindTexture(V,Et||Tt[V]),At.type=V,At.texture=Et)}function Fe(){const V=St[vt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Te(){try{o.compressedTexImage2D(...arguments)}catch(V){Se("WebGLState:",V)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(V){Se("WebGLState:",V)}}function M(){try{o.texSubImage2D(...arguments)}catch(V){Se("WebGLState:",V)}}function Y(){try{o.texSubImage3D(...arguments)}catch(V){Se("WebGLState:",V)}}function nt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){Se("WebGLState:",V)}}function ot(){try{o.compressedTexSubImage3D(...arguments)}catch(V){Se("WebGLState:",V)}}function yt(){try{o.texStorage2D(...arguments)}catch(V){Se("WebGLState:",V)}}function Rt(){try{o.texStorage3D(...arguments)}catch(V){Se("WebGLState:",V)}}function rt(){try{o.texImage2D(...arguments)}catch(V){Se("WebGLState:",V)}}function lt(){try{o.texImage3D(...arguments)}catch(V){Se("WebGLState:",V)}}function bt(V){return v[V]!==void 0?v[V]:o.getParameter(V)}function Ot(V,Et){v[V]!==Et&&(o.pixelStorei(V,Et),v[V]=Et)}function Dt(V){se.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),se.copy(V))}function Ct(V){ne.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),ne.copy(V))}function Wt(V,Et){let ft=p.get(Et);ft===void 0&&(ft=new WeakMap,p.set(Et,ft));let At=ft.get(V);At===void 0&&(At=o.getUniformBlockIndex(Et,V.name),ft.set(V,At))}function Yt(V,Et){const At=p.get(Et).get(V);m.get(Et)!==At&&(o.uniformBlockBinding(Et,At,V.__bindingPointIndex),m.set(Et,At))}function $t(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},v={},vt=null,St={},g={},E=new WeakMap,T=[],w=null,y=!1,x=null,P=null,F=null,C=null,N=null,L=null,z=null,b=new be(0,0,0),U=0,X=!1,G=null,Z=null,dt=null,ht=null,j=null,se.set(0,0,o.canvas.width,o.canvas.height),ne.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:xt,disable:Qt,bindFramebuffer:te,drawBuffers:qt,useProgram:ke,setBlending:ge,setMaterial:ce,setFlipSided:je,setCullFace:$e,setLineWidth:tn,setPolygonOffset:on,setScissorTest:Xe,activeTexture:en,bindTexture:W,unbindTexture:Fe,compressedTexImage2D:Te,compressedTexImage3D:D,texImage2D:rt,texImage3D:lt,pixelStorei:Ot,getParameter:bt,updateUBOMapping:Wt,uniformBlockBinding:Yt,texStorage2D:yt,texStorage3D:Rt,texSubImage2D:M,texSubImage3D:Y,compressedTexSubImage2D:nt,compressedTexSubImage3D:ot,scissor:Dt,viewport:Ct,reset:$t}}function JA(o,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Re,S=new WeakMap,v=new Set;let g;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,M){return T?new OffscreenCanvas(D,M):qc("canvas")}function y(D,M,Y){let nt=1;const ot=Te(D);if((ot.width>Y||ot.height>Y)&&(nt=Y/Math.max(ot.width,ot.height)),nt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const yt=Math.floor(nt*ot.width),Rt=Math.floor(nt*ot.height);g===void 0&&(g=w(yt,Rt));const rt=M?w(yt,Rt):g;return rt.width=yt,rt.height=Rt,rt.getContext("2d").drawImage(D,0,0,yt,Rt),jt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+yt+"x"+Rt+")."),rt}else return"data"in D&&jt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),D;return D}function x(D){return D.generateMipmaps}function P(D){o.generateMipmap(D)}function F(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(D,M,Y,nt,ot,yt=!1){if(D!==null){if(o[D]!==void 0)return o[D];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Rt;nt&&(Rt=t.get("EXT_texture_norm16"),Rt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let rt=M;if(M===o.RED&&(Y===o.FLOAT&&(rt=o.R32F),Y===o.HALF_FLOAT&&(rt=o.R16F),Y===o.UNSIGNED_BYTE&&(rt=o.R8),Y===o.UNSIGNED_SHORT&&Rt&&(rt=Rt.R16_EXT),Y===o.SHORT&&Rt&&(rt=Rt.R16_SNORM_EXT)),M===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(rt=o.R8UI),Y===o.UNSIGNED_SHORT&&(rt=o.R16UI),Y===o.UNSIGNED_INT&&(rt=o.R32UI),Y===o.BYTE&&(rt=o.R8I),Y===o.SHORT&&(rt=o.R16I),Y===o.INT&&(rt=o.R32I)),M===o.RG&&(Y===o.FLOAT&&(rt=o.RG32F),Y===o.HALF_FLOAT&&(rt=o.RG16F),Y===o.UNSIGNED_BYTE&&(rt=o.RG8),Y===o.UNSIGNED_SHORT&&Rt&&(rt=Rt.RG16_EXT),Y===o.SHORT&&Rt&&(rt=Rt.RG16_SNORM_EXT)),M===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(rt=o.RG8UI),Y===o.UNSIGNED_SHORT&&(rt=o.RG16UI),Y===o.UNSIGNED_INT&&(rt=o.RG32UI),Y===o.BYTE&&(rt=o.RG8I),Y===o.SHORT&&(rt=o.RG16I),Y===o.INT&&(rt=o.RG32I)),M===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(rt=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(rt=o.RGB16UI),Y===o.UNSIGNED_INT&&(rt=o.RGB32UI),Y===o.BYTE&&(rt=o.RGB8I),Y===o.SHORT&&(rt=o.RGB16I),Y===o.INT&&(rt=o.RGB32I)),M===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(rt=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(rt=o.RGBA16UI),Y===o.UNSIGNED_INT&&(rt=o.RGBA32UI),Y===o.BYTE&&(rt=o.RGBA8I),Y===o.SHORT&&(rt=o.RGBA16I),Y===o.INT&&(rt=o.RGBA32I)),M===o.RGB&&(Y===o.UNSIGNED_SHORT&&Rt&&(rt=Rt.RGB16_EXT),Y===o.SHORT&&Rt&&(rt=Rt.RGB16_SNORM_EXT),Y===o.UNSIGNED_INT_5_9_9_9_REV&&(rt=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(rt=o.R11F_G11F_B10F)),M===o.RGBA){const lt=yt?kc:ve.getTransfer(ot);Y===o.FLOAT&&(rt=o.RGBA32F),Y===o.HALF_FLOAT&&(rt=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(rt=lt===Pe?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT&&Rt&&(rt=Rt.RGBA16_EXT),Y===o.SHORT&&Rt&&(rt=Rt.RGBA16_SNORM_EXT),Y===o.UNSIGNED_SHORT_4_4_4_4&&(rt=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(rt=o.RGB5_A1)}return(rt===o.R16F||rt===o.R32F||rt===o.RG16F||rt===o.RG32F||rt===o.RGBA16F||rt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function N(D,M){let Y;return D?M===null||M===ki||M===Wo?Y=o.DEPTH24_STENCIL8:M===Hi?Y=o.DEPTH32F_STENCIL8:M===ko&&(Y=o.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ki||M===Wo?Y=o.DEPTH_COMPONENT24:M===Hi?Y=o.DEPTH_COMPONENT32F:M===ko&&(Y=o.DEPTH_COMPONENT16),Y}function L(D,M){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function z(D){const M=D.target;M.removeEventListener("dispose",z),U(M),M.isVideoTexture&&S.delete(M),M.isHTMLTexture&&v.delete(M)}function b(D){const M=D.target;M.removeEventListener("dispose",b),G(M)}function U(D){const M=s.get(D);if(M.__webglInit===void 0)return;const Y=D.source,nt=E.get(Y);if(nt){const ot=nt[M.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&X(D),Object.keys(nt).length===0&&E.delete(Y)}s.remove(D)}function X(D){const M=s.get(D);o.deleteTexture(M.__webglTexture);const Y=D.source,nt=E.get(Y);delete nt[M.__cacheKey],d.memory.textures--}function G(D){const M=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(M.__webglFramebuffer[nt]))for(let ot=0;ot<M.__webglFramebuffer[nt].length;ot++)o.deleteFramebuffer(M.__webglFramebuffer[nt][ot]);else o.deleteFramebuffer(M.__webglFramebuffer[nt]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[nt])}else{if(Array.isArray(M.__webglFramebuffer))for(let nt=0;nt<M.__webglFramebuffer.length;nt++)o.deleteFramebuffer(M.__webglFramebuffer[nt]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let nt=0;nt<M.__webglColorRenderbuffer.length;nt++)M.__webglColorRenderbuffer[nt]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[nt]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=D.textures;for(let nt=0,ot=Y.length;nt<ot;nt++){const yt=s.get(Y[nt]);yt.__webglTexture&&(o.deleteTexture(yt.__webglTexture),d.memory.textures--),s.remove(Y[nt])}s.remove(D)}let Z=0;function dt(){Z=0}function ht(){return Z}function j(D){Z=D}function O(){const D=Z;return D>=l.maxTextures&&jt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),Z+=1,D}function I(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function et(D,M){const Y=s.get(D);if(D.isVideoTexture&&W(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Y.__version!==D.version){const nt=D.image;if(nt===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(Y,D,M);return}}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+M)}function mt(D,M){const Y=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Qt(Y,D,M);return}else D.isExternalTexture&&(Y.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+M)}function vt(D,M){const Y=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){Qt(Y,D,M);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+M)}function St(D,M){const Y=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Y.__version!==D.version){te(Y,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+M)}const Mt={[jd]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[$d]:o.MIRRORED_REPEAT},Gt={[wn]:o.NEAREST,[mM]:o.NEAREST_MIPMAP_NEAREST,[oc]:o.NEAREST_MIPMAP_LINEAR,[Nn]:o.LINEAR,[fd]:o.LINEAR_MIPMAP_NEAREST,[Ls]:o.LINEAR_MIPMAP_LINEAR},se={[vM]:o.NEVER,[EM]:o.ALWAYS,[xM]:o.LESS,[Xh]:o.LEQUAL,[SM]:o.EQUAL,[kh]:o.GEQUAL,[MM]:o.GREATER,[yM]:o.NOTEQUAL};function ne(D,M){if(M.type===Hi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===fd||M.magFilter===oc||M.magFilter===Ls||M.minFilter===Nn||M.minFilter===fd||M.minFilter===oc||M.minFilter===Ls)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Mt[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Mt[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Mt[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Gt[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Gt[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===wn||M.minFilter!==oc&&M.minFilter!==Ls||M.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function ut(D,M){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",z));const nt=M.source;let ot=E.get(nt);ot===void 0&&(ot={},E.set(nt,ot));const yt=I(M);if(yt!==D.__cacheKey){ot[yt]===void 0&&(ot[yt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),ot[yt].usedTimes++;const Rt=ot[D.__cacheKey];Rt!==void 0&&(ot[D.__cacheKey].usedTimes--,Rt.usedTimes===0&&X(M)),D.__cacheKey=yt,D.__webglTexture=ot[yt].texture}return Y}function Tt(D,M,Y){return Math.floor(Math.floor(D/Y)/M)}function xt(D,M,Y,nt){const yt=D.updateRanges;if(yt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,Y,nt,M.data);else{yt.sort((Ot,Dt)=>Ot.start-Dt.start);let Rt=0;for(let Ot=1;Ot<yt.length;Ot++){const Dt=yt[Rt],Ct=yt[Ot],Wt=Dt.start+Dt.count,Yt=Tt(Ct.start,M.width,4),$t=Tt(Dt.start,M.width,4);Ct.start<=Wt+1&&Yt===$t&&Tt(Ct.start+Ct.count-1,M.width,4)===Yt?Dt.count=Math.max(Dt.count,Ct.start+Ct.count-Dt.start):(++Rt,yt[Rt]=Ct)}yt.length=Rt+1;const rt=i.getParameter(o.UNPACK_ROW_LENGTH),lt=i.getParameter(o.UNPACK_SKIP_PIXELS),bt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Ot=0,Dt=yt.length;Ot<Dt;Ot++){const Ct=yt[Ot],Wt=Math.floor(Ct.start/4),Yt=Math.ceil(Ct.count/4),$t=Wt%M.width,V=Math.floor(Wt/M.width),Et=Yt,ft=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,$t,V,Et,ft,Y,nt,M.data)}D.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,rt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,lt),i.pixelStorei(o.UNPACK_SKIP_ROWS,bt)}}function Qt(D,M,Y){let nt=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(nt=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(nt=o.TEXTURE_3D);const ot=ut(D,M),yt=M.source;i.bindTexture(nt,D.__webglTexture,o.TEXTURE0+Y);const Rt=s.get(yt);if(yt.version!==Rt.__version||ot===!0){if(i.activeTexture(o.TEXTURE0+Y),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ft=ve.getPrimaries(ve.workingColorSpace),At=M.colorSpace===ns?null:ve.getPrimaries(M.colorSpace),Nt=M.colorSpace===ns||ft===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let lt=y(M.image,!1,l.maxTextureSize);lt=Fe(M,lt);const bt=c.convert(M.format,M.colorSpace),Ot=c.convert(M.type);let Dt=C(M.internalFormat,bt,Ot,M.normalized,M.colorSpace,M.isVideoTexture);ne(nt,M);let Ct;const Wt=M.mipmaps,Yt=M.isVideoTexture!==!0,$t=Rt.__version===void 0||ot===!0,V=yt.dataReady,Et=L(M,lt);if(M.isDepthTexture)Dt=N(M.format===Ns,M.type),$t&&(Yt?i.texStorage2D(o.TEXTURE_2D,1,Dt,lt.width,lt.height):i.texImage2D(o.TEXTURE_2D,0,Dt,lt.width,lt.height,0,bt,Ot,null));else if(M.isDataTexture)if(Wt.length>0){Yt&&$t&&i.texStorage2D(o.TEXTURE_2D,Et,Dt,Wt[0].width,Wt[0].height);for(let ft=0,At=Wt.length;ft<At;ft++)Ct=Wt[ft],Yt?V&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Ct.width,Ct.height,bt,Ot,Ct.data):i.texImage2D(o.TEXTURE_2D,ft,Dt,Ct.width,Ct.height,0,bt,Ot,Ct.data);M.generateMipmaps=!1}else Yt?($t&&i.texStorage2D(o.TEXTURE_2D,Et,Dt,lt.width,lt.height),V&&xt(M,lt,bt,Ot)):i.texImage2D(o.TEXTURE_2D,0,Dt,lt.width,lt.height,0,bt,Ot,lt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Yt&&$t&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Et,Dt,Wt[0].width,Wt[0].height,lt.depth);for(let ft=0,At=Wt.length;ft<At;ft++)if(Ct=Wt[ft],M.format!==wi)if(bt!==null)if(Yt){if(V)if(M.layerUpdates.size>0){const Nt=v_(Ct.width,Ct.height,M.format,M.type);for(const _t of M.layerUpdates){const Vt=Ct.data.subarray(_t*Nt/Ct.data.BYTES_PER_ELEMENT,(_t+1)*Nt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,_t,Ct.width,Ct.height,1,bt,Vt)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Ct.width,Ct.height,lt.depth,bt,Ct.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ft,Dt,Ct.width,Ct.height,lt.depth,0,Ct.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ft,0,0,0,Ct.width,Ct.height,lt.depth,bt,Ot,Ct.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ft,Dt,Ct.width,Ct.height,lt.depth,0,bt,Ot,Ct.data)}else{Yt&&$t&&i.texStorage2D(o.TEXTURE_2D,Et,Dt,Wt[0].width,Wt[0].height);for(let ft=0,At=Wt.length;ft<At;ft++)Ct=Wt[ft],M.format!==wi?bt!==null?Yt?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,ft,0,0,Ct.width,Ct.height,bt,Ct.data):i.compressedTexImage2D(o.TEXTURE_2D,ft,Dt,Ct.width,Ct.height,0,Ct.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?V&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,Ct.width,Ct.height,bt,Ot,Ct.data):i.texImage2D(o.TEXTURE_2D,ft,Dt,Ct.width,Ct.height,0,bt,Ot,Ct.data)}else if(M.isDataArrayTexture)if(Yt){if($t&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Et,Dt,lt.width,lt.height,lt.depth),V)if(M.layerUpdates.size>0){const ft=v_(lt.width,lt.height,M.format,M.type);for(const At of M.layerUpdates){const Nt=lt.data.subarray(At*ft/lt.data.BYTES_PER_ELEMENT,(At+1)*ft/lt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,At,lt.width,lt.height,1,bt,Ot,Nt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Ot,lt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Dt,lt.width,lt.height,lt.depth,0,bt,Ot,lt.data);else if(M.isData3DTexture)Yt?($t&&i.texStorage3D(o.TEXTURE_3D,Et,Dt,lt.width,lt.height,lt.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Ot,lt.data)):i.texImage3D(o.TEXTURE_3D,0,Dt,lt.width,lt.height,lt.depth,0,bt,Ot,lt.data);else if(M.isFramebufferTexture){if($t)if(Yt)i.texStorage2D(o.TEXTURE_2D,Et,Dt,lt.width,lt.height);else{let ft=lt.width,At=lt.height;for(let Nt=0;Nt<Et;Nt++)i.texImage2D(o.TEXTURE_2D,Nt,Dt,ft,At,0,bt,Ot,null),ft>>=1,At>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const ft=o.canvas;if(ft.hasAttribute("layoutsubtree")||ft.setAttribute("layoutsubtree","true"),lt.parentNode!==ft){ft.appendChild(lt),v.add(M),ft.onpaint=At=>{const Nt=At.changedElements;for(const _t of v)Nt.includes(_t.image)&&(_t.needsUpdate=!0)},ft.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,lt);else{const Nt=o.RGBA,_t=o.RGBA,Vt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Nt,_t,Vt,lt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Yt&&$t){const ft=Te(Wt[0]);i.texStorage2D(o.TEXTURE_2D,Et,Dt,ft.width,ft.height)}for(let ft=0,At=Wt.length;ft<At;ft++)Ct=Wt[ft],Yt?V&&i.texSubImage2D(o.TEXTURE_2D,ft,0,0,bt,Ot,Ct):i.texImage2D(o.TEXTURE_2D,ft,Dt,bt,Ot,Ct);M.generateMipmaps=!1}else if(Yt){if($t){const ft=Te(lt);i.texStorage2D(o.TEXTURE_2D,Et,Dt,ft.width,ft.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt,Ot,lt)}else i.texImage2D(o.TEXTURE_2D,0,Dt,bt,Ot,lt);x(M)&&P(nt),Rt.__version=yt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function te(D,M,Y){if(M.image.length!==6)return;const nt=ut(D,M),ot=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+Y);const yt=s.get(ot);if(ot.version!==yt.__version||nt===!0){i.activeTexture(o.TEXTURE0+Y);const Rt=ve.getPrimaries(ve.workingColorSpace),rt=M.colorSpace===ns?null:ve.getPrimaries(M.colorSpace),lt=M.colorSpace===ns||Rt===rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const bt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ot=M.image[0]&&M.image[0].isDataTexture,Dt=[];for(let _t=0;_t<6;_t++)!bt&&!Ot?Dt[_t]=y(M.image[_t],!0,l.maxCubemapSize):Dt[_t]=Ot?M.image[_t].image:M.image[_t],Dt[_t]=Fe(M,Dt[_t]);const Ct=Dt[0],Wt=c.convert(M.format,M.colorSpace),Yt=c.convert(M.type),$t=C(M.internalFormat,Wt,Yt,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,Et=yt.__version===void 0||nt===!0,ft=ot.dataReady;let At=L(M,Ct);ne(o.TEXTURE_CUBE_MAP,M);let Nt;if(bt){V&&Et&&i.texStorage2D(o.TEXTURE_CUBE_MAP,At,$t,Ct.width,Ct.height);for(let _t=0;_t<6;_t++){Nt=Dt[_t].mipmaps;for(let Vt=0;Vt<Nt.length;Vt++){const Bt=Nt[Vt];M.format!==wi?Wt!==null?V?ft&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,Bt.width,Bt.height,Wt,Bt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,$t,Bt.width,Bt.height,0,Bt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,Bt.width,Bt.height,Wt,Yt,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,$t,Bt.width,Bt.height,0,Wt,Yt,Bt.data)}}}else{if(Nt=M.mipmaps,V&&Et){Nt.length>0&&At++;const _t=Te(Dt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,At,$t,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Ot){V?ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Dt[_t].width,Dt[_t].height,Wt,Yt,Dt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,$t,Dt[_t].width,Dt[_t].height,0,Wt,Yt,Dt[_t].data);for(let Vt=0;Vt<Nt.length;Vt++){const Ze=Nt[Vt].image[_t].image;V?ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Ze.width,Ze.height,Wt,Yt,Ze.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,$t,Ze.width,Ze.height,0,Wt,Yt,Ze.data)}}else{V?ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Wt,Yt,Dt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,$t,Wt,Yt,Dt[_t]);for(let Vt=0;Vt<Nt.length;Vt++){const Bt=Nt[Vt];V?ft&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Wt,Yt,Bt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,$t,Wt,Yt,Bt.image[_t])}}}x(M)&&P(o.TEXTURE_CUBE_MAP),yt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function qt(D,M,Y,nt,ot,yt){const Rt=c.convert(Y.format,Y.colorSpace),rt=c.convert(Y.type),lt=C(Y.internalFormat,Rt,rt,Y.normalized,Y.colorSpace),bt=s.get(M),Ot=s.get(Y);if(Ot.__renderTarget=M,!bt.__hasExternalTextures){const Dt=Math.max(1,M.width>>yt),Ct=Math.max(1,M.height>>yt);ot===o.TEXTURE_3D||ot===o.TEXTURE_2D_ARRAY?i.texImage3D(ot,yt,lt,Dt,Ct,M.depth,0,Rt,rt,null):i.texImage2D(ot,yt,lt,Dt,Ct,0,Rt,rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),en(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,nt,ot,Ot.__webglTexture,0,Xe(M)):(ot===o.TEXTURE_2D||ot>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,nt,ot,Ot.__webglTexture,yt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(D,M,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const nt=M.depthTexture,ot=nt&&nt.isDepthTexture?nt.type:null,yt=N(M.stencilBuffer,ot),Rt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;en(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xe(M),yt,M.width,M.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe(M),yt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,yt,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Rt,o.RENDERBUFFER,D)}else{const nt=M.textures;for(let ot=0;ot<nt.length;ot++){const yt=nt[ot],Rt=c.convert(yt.format,yt.colorSpace),rt=c.convert(yt.type),lt=C(yt.internalFormat,Rt,rt,yt.normalized,yt.colorSpace);en(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xe(M),lt,M.width,M.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe(M),lt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,lt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function le(D,M,Y){const nt=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ot=s.get(M.depthTexture);if(ot.__renderTarget=M,(!ot.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),nt){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,M.depthTexture.addEventListener("dispose",z)),ot.__webglTexture===void 0){ot.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture),ne(o.TEXTURE_CUBE_MAP,M.depthTexture);const bt=c.convert(M.depthTexture.format),Ot=c.convert(M.depthTexture.type);let Dt;M.depthTexture.format===Ma?Dt=o.DEPTH_COMPONENT24:M.depthTexture.format===Ns&&(Dt=o.DEPTH24_STENCIL8);for(let Ct=0;Ct<6;Ct++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0,Dt,M.width,M.height,0,bt,Ot,null)}}else et(M.depthTexture,0);const yt=ot.__webglTexture,Rt=Xe(M),rt=nt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,lt=M.depthTexture.format===Ns?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ma)en(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,rt,yt,0,Rt):o.framebufferTexture2D(o.FRAMEBUFFER,lt,rt,yt,0);else if(M.depthTexture.format===Ns)en(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,lt,rt,yt,0,Rt):o.framebufferTexture2D(o.FRAMEBUFFER,lt,rt,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(D){const M=s.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const nt=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),nt){const ot=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,nt.removeEventListener("dispose",ot)};nt.addEventListener("dispose",ot),M.__depthDisposeCallback=ot}M.__boundDepthTexture=nt}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(Y)for(let nt=0;nt<6;nt++)le(M.__webglFramebuffer[nt],D,nt);else{const nt=D.texture.mipmaps;nt&&nt.length>0?le(M.__webglFramebuffer[0],D,0):le(M.__webglFramebuffer,D,0)}else if(Y){M.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[nt]),M.__webglDepthbuffer[nt]===void 0)M.__webglDepthbuffer[nt]=o.createRenderbuffer(),ke(M.__webglDepthbuffer[nt],D,!1);else{const ot=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=M.__webglDepthbuffer[nt];o.bindRenderbuffer(o.RENDERBUFFER,yt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,yt)}}else{const nt=D.texture.mipmaps;if(nt&&nt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),ke(M.__webglDepthbuffer,D,!1);else{const ot=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,yt=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,yt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ot,o.RENDERBUFFER,yt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ge(D,M,Y){const nt=s.get(D);M!==void 0&&qt(nt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&me(D)}function ce(D){const M=D.texture,Y=s.get(D),nt=s.get(M);D.addEventListener("dispose",b);const ot=D.textures,yt=D.isWebGLCubeRenderTarget===!0,Rt=ot.length>1;if(Rt||(nt.__webglTexture===void 0&&(nt.__webglTexture=o.createTexture()),nt.__version=M.version,d.memory.textures++),yt){Y.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[rt]=[];for(let lt=0;lt<M.mipmaps.length;lt++)Y.__webglFramebuffer[rt][lt]=o.createFramebuffer()}else Y.__webglFramebuffer[rt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)Y.__webglFramebuffer[rt]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Rt)for(let rt=0,lt=ot.length;rt<lt;rt++){const bt=s.get(ot[rt]);bt.__webglTexture===void 0&&(bt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&en(D)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let rt=0;rt<ot.length;rt++){const lt=ot[rt];Y.__webglColorRenderbuffer[rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[rt]);const bt=c.convert(lt.format,lt.colorSpace),Ot=c.convert(lt.type),Dt=C(lt.internalFormat,bt,Ot,lt.normalized,lt.colorSpace,D.isXRRenderTarget===!0),Ct=Xe(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,Dt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+rt,o.RENDERBUFFER,Y.__webglColorRenderbuffer[rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(Y.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(yt){i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture),ne(o.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)qt(Y.__webglFramebuffer[rt][lt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,lt);else qt(Y.__webglFramebuffer[rt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);x(M)&&P(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Rt){for(let rt=0,lt=ot.length;rt<lt;rt++){const bt=ot[rt],Ot=s.get(bt);let Dt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Dt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,Ot.__webglTexture),ne(Dt,bt),qt(Y.__webglFramebuffer,D,bt,o.COLOR_ATTACHMENT0+rt,Dt,0),x(bt)&&P(Dt)}i.unbindTexture()}else{let rt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(rt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(rt,nt.__webglTexture),ne(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let lt=0;lt<M.mipmaps.length;lt++)qt(Y.__webglFramebuffer[lt],D,M,o.COLOR_ATTACHMENT0,rt,lt);else qt(Y.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,rt,0);x(M)&&P(rt),i.unbindTexture()}D.depthBuffer&&me(D)}function je(D){const M=D.textures;for(let Y=0,nt=M.length;Y<nt;Y++){const ot=M[Y];if(x(ot)){const yt=F(D),Rt=s.get(ot).__webglTexture;i.bindTexture(yt,Rt),P(yt),i.unbindTexture()}}}const $e=[],tn=[];function on(D){if(D.samples>0){if(en(D)===!1){const M=D.textures,Y=D.width,nt=D.height;let ot=o.COLOR_BUFFER_BIT;const yt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=s.get(D),rt=M.length>1;if(rt)for(let bt=0;bt<M.length;bt++)i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+bt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+bt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);const lt=D.texture.mipmaps;lt&&lt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let bt=0;bt<M.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ot|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ot|=o.STENCIL_BUFFER_BIT)),rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);const Ot=s.get(M[bt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ot,0)}o.blitFramebuffer(0,0,Y,nt,0,0,Y,nt,ot,o.NEAREST),m===!0&&($e.length=0,tn.length=0,$e.push(o.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&($e.push(yt),tn.push(yt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,tn)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,$e))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),rt)for(let bt=0;bt<M.length;bt++){i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+bt,o.RENDERBUFFER,Rt.__webglColorRenderbuffer[bt]);const Ot=s.get(M[bt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Rt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+bt,o.TEXTURE_2D,Ot,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Xe(D){return Math.min(l.maxSamples,D.samples)}function en(D){const M=s.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function W(D){const M=d.render.frame;S.get(D)!==M&&(S.set(D,M),D.update())}function Fe(D,M){const Y=D.colorSpace,nt=D.format,ot=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Xc&&Y!==ns&&(ve.getTransfer(Y)===Pe?(nt!==wi||ot!==vi)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Se("WebGLTextures: Unsupported texture color space:",Y)),M}function Te(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=O,this.resetTextureUnits=dt,this.getTextureUnits=ht,this.setTextureUnits=j,this.setTexture2D=et,this.setTexture2DArray=mt,this.setTexture3D=vt,this.setTextureCube=St,this.rebindTextures=ge,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=qt,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function jA(o,t){function i(s,l=ns){let c;const d=ve.getTransfer(l);if(s===vi)return o.UNSIGNED_BYTE;if(s===zh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Ih)return o.UNSIGNED_SHORT_5_5_5_1;if(s===av)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===sv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===nv)return o.BYTE;if(s===iv)return o.SHORT;if(s===ko)return o.UNSIGNED_SHORT;if(s===Bh)return o.INT;if(s===ki)return o.UNSIGNED_INT;if(s===Hi)return o.FLOAT;if(s===Sa)return o.HALF_FLOAT;if(s===rv)return o.ALPHA;if(s===ov)return o.RGB;if(s===wi)return o.RGBA;if(s===Ma)return o.DEPTH_COMPONENT;if(s===Ns)return o.DEPTH_STENCIL;if(s===lv)return o.RED;if(s===Hh)return o.RED_INTEGER;if(s===Ps)return o.RG;if(s===Gh)return o.RG_INTEGER;if(s===Vh)return o.RGBA_INTEGER;if(s===Pc||s===Fc||s===Bc||s===zc)if(d===Pe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===th||s===eh||s===nh||s===ih)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ih)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ah||s===sh||s===rh||s===oh||s===lh||s===Gc||s===ch)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ah||s===sh)return d===Pe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===rh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===oh)return c.COMPRESSED_R11_EAC;if(s===lh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Gc)return c.COMPRESSED_RG11_EAC;if(s===ch)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===Sh||s===Mh||s===yh||s===Eh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===uh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ph)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_h)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Eh)return d===Pe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bh||s===Th||s===Ah)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===bh)return d===Pe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Th)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ah)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rh||s===Ch||s===Vc||s===wh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Rh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ch)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===wh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const $A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new vv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new xi({vertexShader:$A,fragmentShader:t1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ya(new jc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n1 extends Bs{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,S=null,v=null,g=null,E=null,T=null;const w=typeof XRWebGLBinding<"u",y=new e1,x={},P=i.getContextAttributes();let F=null,C=null;const N=[],L=[],z=new Re;let b=null;const U=new _i;U.viewport=new sn;const X=new _i;X.viewport=new sn;const G=[U,X],Z=new dy;let dt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let Tt=N[ut];return Tt===void 0&&(Tt=new xd,N[ut]=Tt),Tt.getTargetRaySpace()},this.getControllerGrip=function(ut){let Tt=N[ut];return Tt===void 0&&(Tt=new xd,N[ut]=Tt),Tt.getGripSpace()},this.getHand=function(ut){let Tt=N[ut];return Tt===void 0&&(Tt=new xd,N[ut]=Tt),Tt.getHandSpace()};function j(ut){const Tt=L.indexOf(ut.inputSource);if(Tt===-1)return;const xt=N[Tt];xt!==void 0&&(xt.update(ut.inputSource,ut.frame,p||d),xt.dispatchEvent({type:ut.type,data:ut.inputSource}))}function O(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",I);for(let ut=0;ut<N.length;ut++){const Tt=L[ut];Tt!==null&&(L[ut]=null,N[ut].disconnect(Tt))}dt=null,ht=null,y.reset();for(const ut in x)delete x[ut];t.setRenderTarget(F),E=null,g=null,v=null,l=null,C=null,ne.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){c=ut,s.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){h=ut,s.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ut){p=ut},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ut){if(l=ut,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",O),l.addEventListener("inputsourceschange",I),P.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Qt=null,te=null;P.depth&&(te=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=P.stencil?Ns:Ma,Qt=P.stencil?Wo:ki);const qt={colorFormat:i.RGBA8,depthFormat:te,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(qt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new Xi(g.textureWidth,g.textureHeight,{format:wi,type:vi,depthTexture:new Fr(g.textureWidth,g.textureHeight,Qt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const xt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),C=new Xi(E.framebufferWidth,E.framebufferHeight,{format:wi,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ne.setContext(l),ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function I(ut){for(let Tt=0;Tt<ut.removed.length;Tt++){const xt=ut.removed[Tt],Qt=L.indexOf(xt);Qt>=0&&(L[Qt]=null,N[Qt].disconnect(xt))}for(let Tt=0;Tt<ut.added.length;Tt++){const xt=ut.added[Tt];let Qt=L.indexOf(xt);if(Qt===-1){for(let qt=0;qt<N.length;qt++)if(qt>=L.length){L.push(xt),Qt=qt;break}else if(L[qt]===null){L[qt]=xt,Qt=qt;break}if(Qt===-1)break}const te=N[Qt];te&&te.connect(xt)}}const et=new J,mt=new J;function vt(ut,Tt,xt){et.setFromMatrixPosition(Tt.matrixWorld),mt.setFromMatrixPosition(xt.matrixWorld);const Qt=et.distanceTo(mt),te=Tt.projectionMatrix.elements,qt=xt.projectionMatrix.elements,ke=te[14]/(te[10]-1),le=te[14]/(te[10]+1),me=(te[9]+1)/te[5],ge=(te[9]-1)/te[5],ce=(te[8]-1)/te[0],je=(qt[8]+1)/qt[0],$e=ke*ce,tn=ke*je,on=Qt/(-ce+je),Xe=on*-ce;if(Tt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(Xe),ut.translateZ(on),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),te[10]===-1)ut.projectionMatrix.copy(Tt.projectionMatrix),ut.projectionMatrixInverse.copy(Tt.projectionMatrixInverse);else{const en=ke+on,W=le+on,Fe=$e-Xe,Te=tn+(Qt-Xe),D=me*le/W*en,M=ge*le/W*en;ut.projectionMatrix.makePerspective(Fe,Te,D,M,en,W),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function St(ut,Tt){Tt===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(Tt.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(l===null)return;let Tt=ut.near,xt=ut.far;y.texture!==null&&(y.depthNear>0&&(Tt=y.depthNear),y.depthFar>0&&(xt=y.depthFar)),Z.near=X.near=U.near=Tt,Z.far=X.far=U.far=xt,(dt!==Z.near||ht!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),dt=Z.near,ht=Z.far),Z.layers.mask=ut.layers.mask|6,U.layers.mask=Z.layers.mask&-5,X.layers.mask=Z.layers.mask&-3;const Qt=ut.parent,te=Z.cameras;St(Z,Qt);for(let qt=0;qt<te.length;qt++)St(te[qt],Qt);te.length===2?vt(Z,U,X):Z.projectionMatrix.copy(U.projectionMatrix),Mt(ut,Z,Qt)};function Mt(ut,Tt,xt){xt===null?ut.matrix.copy(Tt.matrixWorld):(ut.matrix.copy(xt.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(Tt.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(Tt.projectionMatrix),ut.projectionMatrixInverse.copy(Tt.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=Dh*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(ut){m=ut,g!==null&&(g.fixedFoveation=ut),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ut)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(ut){return x[ut]};let Gt=null;function se(ut,Tt){if(S=Tt.getViewerPose(p||d),T=Tt,S!==null){const xt=S.views;E!==null&&(t.setRenderTargetFramebuffer(C,E.framebuffer),t.setRenderTarget(C));let Qt=!1;xt.length!==Z.cameras.length&&(Z.cameras.length=0,Qt=!0);for(let le=0;le<xt.length;le++){const me=xt[le];let ge=null;if(E!==null)ge=E.getViewport(me);else{const je=v.getViewSubImage(g,me);ge=je.viewport,le===0&&(t.setRenderTargetTextures(C,je.colorTexture,je.depthStencilTexture),t.setRenderTarget(C))}let ce=G[le];ce===void 0&&(ce=new _i,ce.layers.enable(le),ce.viewport=new sn,G[le]=ce),ce.matrix.fromArray(me.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(me.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(ge.x,ge.y,ge.width,ge.height),le===0&&(Z.matrix.copy(ce.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Qt===!0&&Z.cameras.push(ce)}const te=l.enabledFeatures;if(te&&te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const le=v.getDepthInformation(xt[0]);le&&le.isValid&&le.texture&&y.init(le,l.renderState)}if(te&&te.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let le=0;le<xt.length;le++){const me=xt[le].camera;if(me){let ge=x[me];ge||(ge=new vv,x[me]=ge);const ce=v.getCameraImage(me);ge.sourceTexture=ce}}}}for(let xt=0;xt<N.length;xt++){const Qt=L[xt],te=N[xt];Qt!==null&&te!==void 0&&te.update(Qt,Tt,p||d)}Gt&&Gt(ut,Tt),Tt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Tt}),T=null}const ne=new yv;ne.setAnimationLoop(se),this.setAnimationLoop=function(ut){Gt=ut},this.dispose=function(){}}}const i1=new rn,wv=new ee;wv.set(-1,0,0,0,1,0,0,0,1);function a1(o,t){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,xv(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,P,F,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),S(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&E(y,x,C)):x.isMeshMatcapMaterial?(c(y,x),T(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),w(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&h(y,x)):x.isPointsMaterial?m(y,x,P,F):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===qn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===qn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const P=t.get(x),F=P.envMap,C=P.envMapRotation;F&&(y.envMap.value=F,y.envMapRotation.value.setFromMatrix4(i1.makeRotationFromEuler(C)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(wv),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function h(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,P,F){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*P,y.scale.value=F*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function S(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,P){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===qn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function w(y,x){const P=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function s1(o,t,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const L=N.program;s.uniformBlockBinding(C,L)}function p(C,N){let L=l[C.id];L===void 0&&(y(C),L=S(C),l[C.id]=L,C.addEventListener("dispose",P));const z=N.program;s.updateUBOMapping(C,z);const b=t.render.frame;c[C.id]!==b&&(g(C),c[C.id]=b)}function S(C){const N=v();C.__bindingPointIndex=N;const L=o.createBuffer(),z=C.__size,b=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,z,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,L),L}function v(){for(let C=0;C<h;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=l[C.id],L=C.uniforms,z=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let b=0,U=L.length;b<U;b++){const X=L[b];if(Array.isArray(X))for(let G=0,Z=X.length;G<Z;G++)E(X[G],b,G,z);else E(X,b,0,z)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(C,N,L,z){if(w(C,N,L,z)===!0){const b=C.__offset,U=C.value;if(Array.isArray(U)){let X=0;for(let G=0;G<U.length;G++){const Z=U[G],dt=x(Z);T(Z,C.__data,X),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(X+=dt.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(U,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,C.__data)}}function T(C,N,L){typeof C=="number"||typeof C=="boolean"?N[0]=C:C.isMatrix3?(N[0]=C.elements[0],N[1]=C.elements[1],N[2]=C.elements[2],N[3]=0,N[4]=C.elements[3],N[5]=C.elements[4],N[6]=C.elements[5],N[7]=0,N[8]=C.elements[6],N[9]=C.elements[7],N[10]=C.elements[8],N[11]=0):ArrayBuffer.isView(C)?N.set(new C.constructor(C.buffer,C.byteOffset,N.length)):C.toArray(N,L)}function w(C,N,L,z){const b=C.value,U=N+"_"+L;if(z[U]===void 0)return typeof b=="number"||typeof b=="boolean"?z[U]=b:ArrayBuffer.isView(b)?z[U]=b.slice():z[U]=b.clone(),!0;{const X=z[U];if(typeof b=="number"||typeof b=="boolean"){if(X!==b)return z[U]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(X.equals(b)===!1)return X.copy(b),!0}}return!1}function y(C){const N=C.uniforms;let L=0;const z=16;for(let U=0,X=N.length;U<X;U++){const G=Array.isArray(N[U])?N[U]:[N[U]];for(let Z=0,dt=G.length;Z<dt;Z++){const ht=G[Z],j=Array.isArray(ht.value)?ht.value:[ht.value];for(let O=0,I=j.length;O<I;O++){const et=j[O],mt=x(et),vt=L%z,St=vt%mt.boundary,Mt=vt+St;L+=St,Mt!==0&&z-Mt<mt.storage&&(L+=z-Mt),ht.__data=new Float32Array(mt.storage/Float32Array.BYTES_PER_ELEMENT),ht.__offset=L,L+=mt.storage}}}const b=L%z;return b>0&&(L+=z-b),C.__size=L,C.__cache={},this}function x(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",C),N}function P(C){const N=C.target;N.removeEventListener("dispose",P);const L=d.indexOf(N.__bindingPointIndex);d.splice(L,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function F(){for(const C in l)o.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:p,dispose:F}}const r1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function o1(){return zi===null&&(zi=new ZM(r1,16,16,Ps,Sa),zi.name="DFG_LUT",zi.minFilter=Nn,zi.magFilter=Nn,zi.wrapS=_a,zi.wrapT=_a,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class l1{constructor(t={}){const{canvas:i=TM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:E=vi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const w=E,y=new Set([Vh,Gh,Hh]),x=new Set([vi,ki,ko,Wo,zh,Ih]),P=new Uint32Array(4),F=new Int32Array(4),C=new J;let N=null,L=null;const z=[],b=[];let U=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let G=!1,Z=null,dt=null,ht=null,j=null;this._outputColorSpace=gi;let O=0,I=0,et=null,mt=-1,vt=null;const St=new sn,Mt=new sn;let Gt=null;const se=new be(0);let ne=0,ut=i.width,Tt=i.height,xt=1,Qt=null,te=null;const qt=new sn(0,0,ut,Tt),ke=new sn(0,0,ut,Tt);let le=!1;const me=new gv;let ge=!1,ce=!1;const je=new rn,$e=new J,tn=new sn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function en(){return et===null?xt:1}let W=s;function Fe(A,k){return i.getContext(A,k)}try{const A={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fh}`),i.addEventListener("webglcontextlost",Ze,!1),i.addEventListener("webglcontextrestored",we,!1),i.addEventListener("webglcontextcreationerror",Yn,!1),W===null){const k="webgl2";if(W=Fe(k,A),W===null)throw Fe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Se("WebGLRenderer: "+A.message),A}let Te,D,M,Y,nt,ot,yt,Rt,rt,lt,bt,Ot,Dt,Ct,Wt,Yt,$t,V,Et,ft,At,Nt,_t;function Vt(){Te=new oT(W),Te.init(),At=new jA(W,Te),D=new $b(W,Te,t,At),M=new QA(W,Te),D.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),dt=W.createFramebuffer(),ht=W.createFramebuffer(),j=W.createFramebuffer(),Y=new uT(W),nt=new FA,ot=new JA(W,Te,M,nt,D,At,Y),yt=new rT(X),Rt=new py(W),Nt=new Jb(W,Rt),rt=new lT(W,Rt,Y,Nt),lt=new dT(W,rt,Rt,Nt,Y),V=new fT(W,D,ot),Wt=new tT(nt),bt=new PA(X,yt,Te,D,Nt,Wt),Ot=new a1(X,nt),Dt=new zA,Ct=new kA(Te),$t=new Qb(X,yt,M,lt,T,m),Yt=new KA(X,lt,D),_t=new s1(W,Y,D,M),Et=new jb(W,Te,Y),ft=new cT(W,Te,Y),Y.programs=bt.programs,X.capabilities=D,X.extensions=Te,X.properties=nt,X.renderLists=Dt,X.shadowMap=Yt,X.state=M,X.info=Y}Vt(),w!==vi&&(U=new pT(w,i.width,i.height,h,l,c));const Bt=new n1(X,W);this.xr=Bt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(A){A!==void 0&&(xt=A,this.setSize(ut,Tt,!1))},this.getSize=function(A){return A.set(ut,Tt)},this.setSize=function(A,k,it=!0){if(Bt.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=A,Tt=k,i.width=Math.floor(A*xt),i.height=Math.floor(k*xt),it===!0&&(i.style.width=A+"px",i.style.height=k+"px"),U!==null&&U.setSize(i.width,i.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(ut*xt,Tt*xt).floor()},this.setDrawingBufferSize=function(A,k,it){ut=A,Tt=k,xt=it,i.width=Math.floor(A*it),i.height=Math.floor(k*it),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(w===vi){Se("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(St)},this.getViewport=function(A){return A.copy(qt)},this.setViewport=function(A,k,it,$){A.isVector4?qt.set(A.x,A.y,A.z,A.w):qt.set(A,k,it,$),M.viewport(St.copy(qt).multiplyScalar(xt).round())},this.getScissor=function(A){return A.copy(ke)},this.setScissor=function(A,k,it,$){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,k,it,$),M.scissor(Mt.copy(ke).multiplyScalar(xt).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){M.setScissorTest(le=A)},this.setOpaqueSort=function(A){Qt=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,it=!0){let $=0;if(A){let tt=!1;if(et!==null){const Ut=et.texture.format;tt=y.has(Ut)}if(tt){const Ut=et.texture.type,Ft=x.has(Ut),wt=$t.getClearColor(),It=$t.getClearAlpha(),zt=wt.r,Zt=wt.g,ie=wt.b;Ft?(P[0]=zt,P[1]=Zt,P[2]=ie,P[3]=It,W.clearBufferuiv(W.COLOR,0,P)):(F[0]=zt,F[1]=Zt,F[2]=ie,F[3]=It,W.clearBufferiv(W.COLOR,0,F))}else $|=W.COLOR_BUFFER_BIT}k&&($|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&($|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&W.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Ze,!1),i.removeEventListener("webglcontextrestored",we,!1),i.removeEventListener("webglcontextcreationerror",Yn,!1),$t.dispose(),Dt.dispose(),Ct.dispose(),nt.dispose(),yt.dispose(),lt.dispose(),Nt.dispose(),_t.dispose(),bt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",un),Bt.removeEventListener("sessionend",bn),zn.stop()};function Ze(A){A.preventDefault(),Y0("WebGLRenderer: Context Lost."),G=!0}function we(){Y0("WebGLRenderer: Context Restored."),G=!1;const A=Y.autoReset,k=Yt.enabled,it=Yt.autoUpdate,$=Yt.needsUpdate,tt=Yt.type;Vt(),Y.autoReset=A,Yt.enabled=k,Yt.autoUpdate=it,Yt.needsUpdate=$,Yt.type=tt}function Yn(A){Se("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zn(A){const k=A.target;k.removeEventListener("dispose",Zn),Gr(k)}function Gr(A){Vr(A),nt.remove(A)}function Vr(A){const k=nt.get(A).programs;k!==void 0&&(k.forEach(function(it){bt.releaseProgram(it)}),A.isShaderMaterial&&bt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,it,$,tt,Ut){k===null&&(k=on);const Ft=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,wt=Ta(A,k,it,$,tt);M.setMaterial($,Ft);let It=it.index,zt=1;if($.wireframe===!0){if(It=rt.getWireframeAttribute(it),It===void 0)return;zt=2}const Zt=it.drawRange,ie=it.attributes.position;let kt=Zt.start*zt,Me=(Zt.start+Zt.count)*zt;Ut!==null&&(kt=Math.max(kt,Ut.start*zt),Me=Math.min(Me,(Ut.start+Ut.count)*zt)),It!==null?(kt=Math.max(kt,0),Me=Math.min(Me,It.count)):ie!=null&&(kt=Math.max(kt,0),Me=Math.min(Me,ie.count));const Ke=Me-kt;if(Ke<0||Ke===1/0)return;Nt.setup(tt,$,wt,it,It);let Ge,De=Et;if(It!==null&&(Ge=Rt.get(It),De=ft,De.setIndex(Ge)),tt.isMesh)$.wireframe===!0?(M.setLineWidth($.wireframeLinewidth*en()),De.setMode(W.LINES)):De.setMode(W.TRIANGLES);else if(tt.isLine){let Ue=$.linewidth;Ue===void 0&&(Ue=1),M.setLineWidth(Ue*en()),tt.isLineSegments?De.setMode(W.LINES):tt.isLineLoop?De.setMode(W.LINE_LOOP):De.setMode(W.LINE_STRIP)}else tt.isPoints?De.setMode(W.POINTS):tt.isSprite&&De.setMode(W.TRIANGLES);if(tt.isBatchedMesh)if(Te.get("WEBGL_multi_draw"))De.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const Ue=tt._multiDrawStarts,Pt=tt._multiDrawCounts,Dn=tt._multiDrawCount,ue=It?Rt.get(It).bytesPerElement:1,_n=nt.get($).currentProgram.getUniforms();for(let Kn=0;Kn<Dn;Kn++)_n.setValue(W,"_gl_DrawID",Kn),De.render(Ue[Kn]/ue,Pt[Kn])}else if(tt.isInstancedMesh)De.renderInstances(kt,Ke,tt.count);else if(it.isInstancedBufferGeometry){const Ue=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Pt=Math.min(it.instanceCount,Ue);De.renderInstances(kt,Ke,Pt)}else De.render(kt,Ke)};function Xr(A,k,it){A.transparent===!0&&A.side===ga&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,ba(A,k,it),A.side=as,A.needsUpdate=!0,ba(A,k,it),A.side=ga):ba(A,k,it)}this.compile=function(A,k,it=null){it===null&&(it=A),L=Ct.get(it),L.init(k),b.push(L),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(k.layers)&&(L.pushLight(tt),tt.castShadow&&L.pushShadow(tt))}),A!==it&&A.traverseVisible(function(tt){tt.isLight&&tt.layers.test(k.layers)&&(L.pushLight(tt),tt.castShadow&&L.pushShadow(tt))}),L.setupLights();const $=new Set;return A.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Ut=tt.material;if(Ut)if(Array.isArray(Ut))for(let Ft=0;Ft<Ut.length;Ft++){const wt=Ut[Ft];Xr(wt,it,tt),$.add(wt)}else Xr(Ut,it,tt),$.add(Ut)}),L=b.pop(),$},this.compileAsync=function(A,k,it=null){const $=this.compile(A,k,it);return new Promise(tt=>{function Ut(){if($.forEach(function(Ft){nt.get(Ft).currentProgram.isReady()&&$.delete(Ft)}),$.size===0){tt(A);return}setTimeout(Ut,10)}Te.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let zs=null;function Ui(A){zs&&zs(A)}function un(){zn.stop()}function bn(){zn.start()}const zn=new yv;zn.setAnimationLoop(Ui),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){zs=A,Bt.setAnimationLoop(A),A===null?zn.stop():zn.start()},Bt.addEventListener("sessionstart",un),Bt.addEventListener("sessionend",bn),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Z!==null&&Z.renderStart(A,k);const it=Bt.enabled===!0&&Bt.isPresenting===!0,$=U!==null&&(et===null||it)&&U.begin(X,et);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(k),k=Bt.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,k,et),L=Ct.get(A,b.length),L.init(k),L.state.textureUnits=ot.getTextureUnits(),b.push(L),je.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),me.setFromProjectionMatrix(je,Gi,k.reversedDepth),ce=this.localClippingEnabled,ge=Wt.init(this.clippingPlanes,ce),N=Dt.get(A,z.length),N.init(),z.push(N),Bt.enabled===!0&&Bt.isPresenting===!0){const Ft=X.xr.getDepthSensingMesh();Ft!==null&&ss(Ft,k,-1/0,X.sortObjects)}ss(A,k,0,X.sortObjects),N.finish(),X.sortObjects===!0&&N.sort(Qt,te,k.reversedDepth),Xe=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Xe&&$t.addToRenderList(N,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ge===!0&&Wt.beginShadows();const tt=L.state.shadowsArray;if(Yt.render(tt,A,k),ge===!0&&Wt.endShadows(),($&&U.hasRenderPass())===!1){const Ft=N.opaque,wt=N.transmissive;if(L.setupLights(),k.isArrayCamera){const It=k.cameras;if(wt.length>0)for(let zt=0,Zt=It.length;zt<Zt;zt++){const ie=It[zt];Jo(Ft,wt,A,ie)}Xe&&$t.render(A);for(let zt=0,Zt=It.length;zt<Zt;zt++){const ie=It[zt];Qo(N,A,ie,ie.viewport)}}else wt.length>0&&Jo(Ft,wt,A,k),Xe&&$t.render(A),Qo(N,A,k)}et!==null&&I===0&&(ot.updateMultisampleRenderTarget(et),ot.updateRenderTargetMipmap(et)),$&&U.end(X),A.isScene===!0&&A.onAfterRender(X,A,k),Nt.resetDefaultState(),mt=-1,vt=null,b.pop(),b.length>0?(L=b[b.length-1],ot.setTextureUnits(L.state.textureUnits),ge===!0&&Wt.setGlobalState(X.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?N=z[z.length-1]:N=null,Z!==null&&Z.renderEnd()};function ss(A,k,it,$){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)it=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||me.intersectsSprite(A)){$&&tn.setFromMatrixPosition(A.matrixWorld).applyMatrix4(je);const Ft=lt.update(A),wt=A.material;wt.visible&&N.push(A,Ft,wt,it,tn.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||me.intersectsObject(A))){const Ft=lt.update(A),wt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),tn.copy(A.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),tn.copy(Ft.boundingSphere.center)),tn.applyMatrix4(A.matrixWorld).applyMatrix4(je)),Array.isArray(wt)){const It=Ft.groups;for(let zt=0,Zt=It.length;zt<Zt;zt++){const ie=It[zt],kt=wt[ie.materialIndex];kt&&kt.visible&&N.push(A,Ft,kt,it,tn.z,ie)}}else wt.visible&&N.push(A,Ft,wt,it,tn.z,null)}}const Ut=A.children;for(let Ft=0,wt=Ut.length;Ft<wt;Ft++)ss(Ut[Ft],k,it,$)}function Qo(A,k,it,$){const{opaque:tt,transmissive:Ut,transparent:Ft}=A;L.setupLightsView(it),ge===!0&&Wt.setGlobalState(X.clippingPlanes,it),$&&M.viewport(St.copy($)),tt.length>0&&rs(tt,k,it),Ut.length>0&&rs(Ut,k,it),Ft.length>0&&rs(Ft,k,it),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Jo(A,k,it,$){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[$.id]===void 0){const kt=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[$.id]=new Xi(1,1,{generateMipmaps:!0,type:kt?Sa:vi,minFilter:Ls,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ve.workingColorSpace})}const Ut=L.state.transmissionRenderTarget[$.id],Ft=$.viewport||St;Ut.setSize(Ft.z*X.transmissionResolutionScale,Ft.w*X.transmissionResolutionScale);const wt=X.getRenderTarget(),It=X.getActiveCubeFace(),zt=X.getActiveMipmapLevel();X.setRenderTarget(Ut),X.getClearColor(se),ne=X.getClearAlpha(),ne<1&&X.setClearColor(16777215,.5),X.clear(),Xe&&$t.render(it);const Zt=X.toneMapping;X.toneMapping=Vi;const ie=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),L.setupLightsView($),ge===!0&&Wt.setGlobalState(X.clippingPlanes,$),rs(A,it,$),ot.updateMultisampleRenderTarget(Ut),ot.updateRenderTargetMipmap(Ut),Te.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Me=0,Ke=k.length;Me<Ke;Me++){const Ge=k[Me],{object:De,geometry:Ue,material:Pt,group:Dn}=Ge;if(Pt.side===ga&&De.layers.test($.layers)){const ue=Pt.side;Pt.side=qn,Pt.needsUpdate=!0,Ea(De,it,$,Ue,Pt,Dn),Pt.side=ue,Pt.needsUpdate=!0,kt=!0}}kt===!0&&(ot.updateMultisampleRenderTarget(Ut),ot.updateRenderTargetMipmap(Ut))}X.setRenderTarget(wt,It,zt),X.setClearColor(se,ne),ie!==void 0&&($.viewport=ie),X.toneMapping=Zt}function rs(A,k,it){const $=k.isScene===!0?k.overrideMaterial:null;for(let tt=0,Ut=A.length;tt<Ut;tt++){const Ft=A[tt],{object:wt,geometry:It,group:zt}=Ft;let Zt=Ft.material;Zt.allowOverride===!0&&$!==null&&(Zt=$),wt.layers.test(it.layers)&&Ea(wt,k,it,It,Zt,zt)}}function Ea(A,k,it,$,tt,Ut){A.onBeforeRender(X,k,it,$,tt,Ut),A.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),tt.onBeforeRender(X,k,it,$,A,Ut),tt.transparent===!0&&tt.side===ga&&tt.forceSinglePass===!1?(tt.side=qn,tt.needsUpdate=!0,X.renderBufferDirect(it,k,$,tt,A,Ut),tt.side=as,tt.needsUpdate=!0,X.renderBufferDirect(it,k,$,tt,A,Ut),tt.side=ga):X.renderBufferDirect(it,k,$,tt,A,Ut),A.onAfterRender(X,k,it,$,tt,Ut)}function ba(A,k,it){k.isScene!==!0&&(k=on);const $=nt.get(A),tt=L.state.lights,Ut=L.state.shadowsArray,Ft=tt.state.version,wt=bt.getParameters(A,tt.state,Ut,k,it,L.state.lightProbeGridArray),It=bt.getProgramCacheKey(wt);let zt=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,$.fog=k.fog;const Zt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=yt.get(A.envMap||$.environment,Zt),$.envMapRotation=$.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,zt===void 0&&(A.addEventListener("dispose",Zn),zt=new Map,$.programs=zt);let ie=zt.get(It);if(ie!==void 0){if($.currentProgram===ie&&$.lightsStateVersion===Ft)return qi(A,wt),ie}else wt.uniforms=bt.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,it,wt),A.onBeforeCompile(wt,X),ie=bt.acquireProgram(wt,It),zt.set(It,ie),$.uniforms=wt.uniforms;const kt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Wt.uniform),qi(A,wt),$.needsLights=jo(A),$.lightsStateVersion=Ft,$.needsLights&&(kt.ambientLightColor.value=tt.state.ambient,kt.lightProbe.value=tt.state.probe,kt.directionalLights.value=tt.state.directional,kt.directionalLightShadows.value=tt.state.directionalShadow,kt.spotLights.value=tt.state.spot,kt.spotLightShadows.value=tt.state.spotShadow,kt.rectAreaLights.value=tt.state.rectArea,kt.ltc_1.value=tt.state.rectAreaLTC1,kt.ltc_2.value=tt.state.rectAreaLTC2,kt.pointLights.value=tt.state.point,kt.pointLightShadows.value=tt.state.pointShadow,kt.hemisphereLights.value=tt.state.hemi,kt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,kt.spotLightMatrix.value=tt.state.spotLightMatrix,kt.spotLightMap.value=tt.state.spotLightMap,kt.pointShadowMatrix.value=tt.state.pointShadowMatrix),$.lightProbeGrid=L.state.lightProbeGridArray.length>0,$.currentProgram=ie,$.uniformsList=null,ie}function Wi(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Ic.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function qi(A,k){const it=nt.get(A);it.outputColorSpace=k.outputColorSpace,it.batching=k.batching,it.batchingColor=k.batchingColor,it.instancing=k.instancing,it.instancingColor=k.instancingColor,it.instancingMorph=k.instancingMorph,it.skinning=k.skinning,it.morphTargets=k.morphTargets,it.morphNormals=k.morphNormals,it.morphColors=k.morphColors,it.morphTargetsCount=k.morphTargetsCount,it.numClippingPlanes=k.numClippingPlanes,it.numIntersection=k.numClipIntersection,it.vertexAlphas=k.vertexAlphas,it.vertexTangents=k.vertexTangents,it.toneMapping=k.toneMapping}function os(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(k.matrixWorld);for(let it=0,$=A.length;it<$;it++){const tt=A[it];if(tt.texture!==null&&tt.boundingBox.containsPoint(C))return tt}return null}function Ta(A,k,it,$,tt){k.isScene!==!0&&(k=on),ot.resetTextureUnits();const Ut=k.fog,Ft=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?k.environment:null,wt=et===null?X.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ve.workingColorSpace,It=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,zt=yt.get($.envMap||Ft,It),Zt=$.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ie=!!it.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),kt=!!it.morphAttributes.position,Me=!!it.morphAttributes.normal,Ke=!!it.morphAttributes.color;let Ge=Vi;$.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ge=X.toneMapping);const De=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Ue=De!==void 0?De.length:0,Pt=nt.get($),Dn=L.state.lights;if(ge===!0&&(ce===!0||A!==vt)){const Ce=A===vt&&$.id===mt;Wt.setState($,A,Ce)}let ue=!1;$.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Dn.state.version||Pt.outputColorSpace!==wt||tt.isBatchedMesh&&Pt.batching===!1||!tt.isBatchedMesh&&Pt.batching===!0||tt.isBatchedMesh&&Pt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Pt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Pt.instancing===!1||!tt.isInstancedMesh&&Pt.instancing===!0||tt.isSkinnedMesh&&Pt.skinning===!1||!tt.isSkinnedMesh&&Pt.skinning===!0||tt.isInstancedMesh&&Pt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Pt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Pt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Pt.instancingMorph===!1&&tt.morphTexture!==null||Pt.envMap!==zt||$.fog===!0&&Pt.fog!==Ut||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Wt.numPlanes||Pt.numIntersection!==Wt.numIntersection)||Pt.vertexAlphas!==Zt||Pt.vertexTangents!==ie||Pt.morphTargets!==kt||Pt.morphNormals!==Me||Pt.morphColors!==Ke||Pt.toneMapping!==Ge||Pt.morphTargetsCount!==Ue||!!Pt.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,Pt.__version=$.version);let _n=Pt.currentProgram;ue===!0&&(_n=ba($,k,tt),Z&&$.isNodeMaterial&&Z.onUpdateProgram($,_n,Pt));let Kn=!1,Si=!1,Qn=!1;const Le=_n.getUniforms(),Qe=Pt.uniforms;if(M.useProgram(_n.program)&&(Kn=!0,Si=!0,Qn=!0),$.id!==mt&&(mt=$.id,Si=!0),Pt.needsLights){const Ce=os(L.state.lightProbeGridArray,tt);Pt.lightProbeGrid!==Ce&&(Pt.lightProbeGrid=Ce,Si=!0)}if(Kn||vt!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Le.setValue(W,"projectionMatrix",A.projectionMatrix),Le.setValue(W,"viewMatrix",A.matrixWorldInverse);const Li=Le.map.cameraPosition;Li!==void 0&&Li.setValue(W,$e.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Le.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Le.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),vt!==A&&(vt=A,Si=!0,Qn=!0)}if(Pt.needsLights&&(Dn.state.directionalShadowMap.length>0&&Le.setValue(W,"directionalShadowMap",Dn.state.directionalShadowMap,ot),Dn.state.spotShadowMap.length>0&&Le.setValue(W,"spotShadowMap",Dn.state.spotShadowMap,ot),Dn.state.pointShadowMap.length>0&&Le.setValue(W,"pointShadowMap",Dn.state.pointShadowMap,ot)),tt.isSkinnedMesh){Le.setOptional(W,tt,"bindMatrix"),Le.setOptional(W,tt,"bindMatrixInverse");const Ce=tt.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Le.setValue(W,"boneTexture",Ce.boneTexture,ot))}tt.isBatchedMesh&&(Le.setOptional(W,tt,"batchingTexture"),Le.setValue(W,"batchingTexture",tt._matricesTexture,ot),Le.setOptional(W,tt,"batchingIdTexture"),Le.setValue(W,"batchingIdTexture",tt._indirectTexture,ot),Le.setOptional(W,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Le.setValue(W,"batchingColorTexture",tt._colorsTexture,ot));const Mi=it.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&V.update(tt,it,_n),(Si||Pt.receiveShadow!==tt.receiveShadow)&&(Pt.receiveShadow=tt.receiveShadow,Le.setValue(W,"receiveShadow",tt.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&k.environment!==null&&(Qe.envMapIntensity.value=k.environmentIntensity),Qe.dfgLUT!==void 0&&(Qe.dfgLUT.value=o1()),Si){if(Le.setValue(W,"toneMappingExposure",X.toneMappingExposure),Pt.needsLights&&fn(Qe,Qn),Ut&&$.fog===!0&&Ot.refreshFogUniforms(Qe,Ut),Ot.refreshMaterialUniforms(Qe,$,xt,Tt,L.state.transmissionRenderTarget[A.id]),Pt.needsLights&&Pt.lightProbeGrid){const Ce=Pt.lightProbeGrid;Qe.probesSH.value=Ce.texture,Qe.probesMin.value.copy(Ce.boundingBox.min),Qe.probesMax.value.copy(Ce.boundingBox.max),Qe.probesResolution.value.copy(Ce.resolution)}Ic.upload(W,Wi(Pt),Qe,ot)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ic.upload(W,Wi(Pt),Qe,ot),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Le.setValue(W,"center",tt.center),Le.setValue(W,"modelViewMatrix",tt.modelViewMatrix),Le.setValue(W,"normalMatrix",tt.normalMatrix),Le.setValue(W,"modelMatrix",tt.matrixWorld),$.uniformsGroups!==void 0){const Ce=$.uniformsGroups;for(let Li=0,Aa=Ce.length;Li<Aa;Li++){const ls=Ce[Li];_t.update(ls,_n),_t.bind(ls,_n)}}return _n}function fn(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function jo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(A,k,it){const $=nt.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),nt.get(A.texture).__webglTexture=k,nt.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:it,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const it=nt.get(A);it.__webglFramebuffer=k,it.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,it=0){et=A,O=k,I=it;let $=null,tt=!1,Ut=!1;if(A){const wt=nt.get(A);if(wt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(W.FRAMEBUFFER,wt.__webglFramebuffer),St.copy(A.viewport),Mt.copy(A.scissor),Gt=A.scissorTest,M.viewport(St),M.scissor(Mt),M.setScissorTest(Gt),mt=-1;return}else if(wt.__webglFramebuffer===void 0)ot.setupRenderTarget(A);else if(wt.__hasExternalTextures)ot.rebindTextures(A,nt.get(A.texture).__webglTexture,nt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(wt.__boundDepthTexture!==Zt){if(Zt!==null&&nt.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(A)}}const It=A.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Ut=!0);const zt=nt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(zt[k])?$=zt[k][it]:$=zt[k],tt=!0):A.samples>0&&ot.useMultisampledRTT(A)===!1?$=nt.get(A).__webglMultisampledFramebuffer:Array.isArray(zt)?$=zt[it]:$=zt,St.copy(A.viewport),Mt.copy(A.scissor),Gt=A.scissorTest}else St.copy(qt).multiplyScalar(xt).floor(),Mt.copy(ke).multiplyScalar(xt).floor(),Gt=le;if(it!==0&&($=dt),M.bindFramebuffer(W.FRAMEBUFFER,$)&&M.drawBuffers(A,$),M.viewport(St),M.scissor(Mt),M.setScissorTest(Gt),tt){const wt=nt.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,it)}else if(Ut){const wt=k;for(let It=0;It<A.textures.length;It++){const zt=nt.get(A.textures[It]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+It,zt.__webglTexture,it,wt)}}else if(A!==null&&it!==0){const wt=nt.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,wt.__webglTexture,it)}mt=-1},this.readRenderTargetPixels=function(A,k,it,$,tt,Ut,Ft,wt=0){if(!(A&&A.isWebGLRenderTarget)){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(It=It[Ft]),It){M.bindFramebuffer(W.FRAMEBUFFER,It);try{const zt=A.textures[wt],Zt=zt.format,ie=zt.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+wt),!D.textureFormatReadable(Zt)){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(ie)){Se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-$&&it>=0&&it<=A.height-tt&&W.readPixels(k,it,$,tt,At.convert(Zt),At.convert(ie),Ut)}finally{const zt=et!==null?nt.get(et).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(A,k,it,$,tt,Ut,Ft,wt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=nt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ft!==void 0&&(It=It[Ft]),It)if(k>=0&&k<=A.width-$&&it>=0&&it<=A.height-tt){M.bindFramebuffer(W.FRAMEBUFFER,It);const zt=A.textures[wt],Zt=zt.format,ie=zt.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+wt),!D.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const kt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,kt),W.bufferData(W.PIXEL_PACK_BUFFER,Ut.byteLength,W.STREAM_READ),W.readPixels(k,it,$,tt,At.convert(Zt),At.convert(ie),0);const Me=et!==null?nt.get(et).__webglFramebuffer:null;M.bindFramebuffer(W.FRAMEBUFFER,Me);const Ke=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await AM(W,Ke,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,kt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ut),W.deleteBuffer(kt),W.deleteSync(Ke),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,it=0){const $=Math.pow(2,-it),tt=Math.floor(A.image.width*$),Ut=Math.floor(A.image.height*$),Ft=k!==null?k.x:0,wt=k!==null?k.y:0;ot.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,it,0,0,Ft,wt,tt,Ut),M.unbindTexture()},this.copyTextureToTexture=function(A,k,it=null,$=null,tt=0,Ut=0){let Ft,wt,It,zt,Zt,ie,kt,Me,Ke;const Ge=A.isCompressedTexture?A.mipmaps[Ut]:A.image;if(it!==null)Ft=it.max.x-it.min.x,wt=it.max.y-it.min.y,It=it.isBox3?it.max.z-it.min.z:1,zt=it.min.x,Zt=it.min.y,ie=it.isBox3?it.min.z:0;else{const Qe=Math.pow(2,-tt);Ft=Math.floor(Ge.width*Qe),wt=Math.floor(Ge.height*Qe),A.isDataArrayTexture?It=Ge.depth:A.isData3DTexture?It=Math.floor(Ge.depth*Qe):It=1,zt=0,Zt=0,ie=0}$!==null?(kt=$.x,Me=$.y,Ke=$.z):(kt=0,Me=0,Ke=0);const De=At.convert(k.format),Ue=At.convert(k.type);let Pt;k.isData3DTexture?(ot.setTexture3D(k,0),Pt=W.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ot.setTexture2DArray(k,0),Pt=W.TEXTURE_2D_ARRAY):(ot.setTexture2D(k,0),Pt=W.TEXTURE_2D),M.activeTexture(W.TEXTURE0),M.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,k.flipY),M.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),M.pixelStorei(W.UNPACK_ALIGNMENT,k.unpackAlignment);const Dn=M.getParameter(W.UNPACK_ROW_LENGTH),ue=M.getParameter(W.UNPACK_IMAGE_HEIGHT),_n=M.getParameter(W.UNPACK_SKIP_PIXELS),Kn=M.getParameter(W.UNPACK_SKIP_ROWS),Si=M.getParameter(W.UNPACK_SKIP_IMAGES);M.pixelStorei(W.UNPACK_ROW_LENGTH,Ge.width),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ge.height),M.pixelStorei(W.UNPACK_SKIP_PIXELS,zt),M.pixelStorei(W.UNPACK_SKIP_ROWS,Zt),M.pixelStorei(W.UNPACK_SKIP_IMAGES,ie);const Qn=A.isDataArrayTexture||A.isData3DTexture,Le=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const Qe=nt.get(A),Mi=nt.get(k),Ce=nt.get(Qe.__renderTarget),Li=nt.get(Mi.__renderTarget);M.bindFramebuffer(W.READ_FRAMEBUFFER,Ce.__webglFramebuffer),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Aa=0;Aa<It;Aa++)Qn&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,nt.get(A).__webglTexture,tt,ie+Aa),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,nt.get(k).__webglTexture,Ut,Ke+Aa)),W.blitFramebuffer(zt,Zt,Ft,wt,kt,Me,Ft,wt,W.DEPTH_BUFFER_BIT,W.NEAREST);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(tt!==0||A.isRenderTargetTexture||nt.has(A)){const Qe=nt.get(A),Mi=nt.get(k);M.bindFramebuffer(W.READ_FRAMEBUFFER,ht),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,j);for(let Ce=0;Ce<It;Ce++)Qn?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.__webglTexture,tt,ie+Ce):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Qe.__webglTexture,tt),Le?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Mi.__webglTexture,Ut,Ke+Ce):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Mi.__webglTexture,Ut),tt!==0?W.blitFramebuffer(zt,Zt,Ft,wt,kt,Me,Ft,wt,W.COLOR_BUFFER_BIT,W.NEAREST):Le?W.copyTexSubImage3D(Pt,Ut,kt,Me,Ke+Ce,zt,Zt,Ft,wt):W.copyTexSubImage2D(Pt,Ut,kt,Me,zt,Zt,Ft,wt);M.bindFramebuffer(W.READ_FRAMEBUFFER,null),M.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Le?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Pt,Ut,kt,Me,Ke,Ft,wt,It,De,Ue,Ge.data):k.isCompressedArrayTexture?W.compressedTexSubImage3D(Pt,Ut,kt,Me,Ke,Ft,wt,It,De,Ge.data):W.texSubImage3D(Pt,Ut,kt,Me,Ke,Ft,wt,It,De,Ue,Ge):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ut,kt,Me,Ft,wt,De,Ue,Ge.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ut,kt,Me,Ge.width,Ge.height,De,Ge.data):W.texSubImage2D(W.TEXTURE_2D,Ut,kt,Me,Ft,wt,De,Ue,Ge);M.pixelStorei(W.UNPACK_ROW_LENGTH,Dn),M.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ue),M.pixelStorei(W.UNPACK_SKIP_PIXELS,_n),M.pixelStorei(W.UNPACK_SKIP_ROWS,Kn),M.pixelStorei(W.UNPACK_SKIP_IMAGES,Si),Ut===0&&k.generateMipmaps&&W.generateMipmap(Pt),M.unbindTexture()},this.initRenderTarget=function(A){nt.get(A).__webglFramebuffer===void 0&&ot.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ot.setTextureCube(A,0):A.isData3DTexture?ot.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ot.setTexture2DArray(A,0):ot.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){O=0,I=0,et=null,M.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ve._getDrawingBufferColorSpace(t),i.unpackColorSpace=ve._getUnpackColorSpace()}}const Nr=165,Oh=2.25,Ph=.052,Yh=52;function Kc(o,t,i){return Math.min(i,Math.max(t,o))}function c1(o){return o<720}function V_(o){const t=o.getBoundingClientRect(),i=Math.max(1,Math.round(t.width||window.innerWidth)),s=Math.max(1,Math.round(t.height||window.innerHeight)),l=c1(i),c=Math.min(l?1.5:2,Math.max(1,window.devicePixelRatio||1));return{width:i,height:s,mobile:l,pixelRatio:c}}function Dv(o,t,i){const s=Kc(o*t/1e6,.62,1.15),l=Math.round((i?600:1400)*s),c=Math.max(8,Math.round(l*(i?.025:.038))),d=o/Math.max(1,t),h=2*Nr*Math.tan(Yh*Math.PI/360),m=h*d*1.16/2,p=h*1.16/2,S=[];for(let v=0;v<l;v+=1){const g=Math.random()*Math.PI*2,E=.15+Math.sqrt(Math.random())*.96;S.push({x:Math.cos(g)*m*E,y:Math.sin(g)*p*E,phase:Math.random(),size:.78+Math.random()*1.15,alpha:.55+Math.random()*.4,streak:v<c})}for(let v=S.length-1;v>0;v-=1){const g=Math.floor(Math.random()*(v+1));[S[v],S[g]]=[S[g],S[v]]}return S}function u1(o,t,i,s,l){let c=null,d=null,h=null,m=null,p=null;try{c=new l1({canvas:o,alpha:!1,antialias:!1,powerPreference:"high-performance"}),c.setClearColor(0,1),c.setPixelRatio(s),c.setSize(t,i,!1);const S=new VM,v=new _i(Yh,t/i,.1,Nr+10),g=Dv(t,i,l),E=new Float32Array(g.length*3),T=new Float32Array(g.length),w=new Float32Array(g.length),y=new Float32Array(g.length);g.forEach((b,U)=>{const X=U*3;E[X]=b.x,E[X+1]=b.y,T[U]=b.phase,w[U]=b.size,y[U]=b.alpha}),d=new ri,d.setAttribute("position",new En(E,3)),d.setAttribute("aPhase",new En(T,1)),d.setAttribute("aSize",new En(w,1)),d.setAttribute("aAlpha",new En(y,1)),m=new xi({transparent:!0,depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0},uPixelRatio:{value:s}},vertexShader:`
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aPhase;
        attribute float aSize;
        attribute float aAlpha;
        varying float vAlpha;

        void main() {
          float progress = fract(aPhase + uTime * ${Ph.toFixed(3)});
          float distance = mix(${Nr.toFixed(1)}, ${Oh.toFixed(2)}, progress);
          vec4 viewPosition = modelViewMatrix * vec4(position.xy, -distance, 1.0);
          gl_Position = projectionMatrix * viewPosition;
          gl_PointSize = clamp(aSize * (0.85 + progress * 1.40) * 115.0 / -viewPosition.z, 1.0, 3.30) * uPixelRatio;
          vAlpha = aAlpha * (0.70 + progress * 0.25);
        }
      `,fragmentShader:`
        varying float vAlpha;

        void main() {
          float radius = length(gl_PointCoord - 0.5);
          float halo = 1.0 - smoothstep(0.12, 0.50, radius);
          float core = 1.0 - smoothstep(0.14, 0.46, radius);
          float alpha = vAlpha * (halo * 0.5 + core * 0.9);
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(vec3(1.0), alpha);
        }
      `});const x=new ny(d,m);x.frustumCulled=!1,S.add(x);const P=g.filter(b=>b.streak),F=new Float32Array(P.length*2*3),C=new Float32Array(P.length*2),N=new Float32Array(P.length*2),L=new Float32Array(P.length*2);P.forEach((b,U)=>{const X=U*2,G=X*3;F[G]=b.x,F[G+1]=b.y,F[G+3]=b.x,F[G+4]=b.y,C[X]=b.phase,C[X+1]=b.phase,N[X+1]=1,L[X]=b.alpha*.42,L[X+1]=b.alpha*.42}),h=new ri,h.setAttribute("position",new En(F,3)),h.setAttribute("aPhase",new En(C,1)),h.setAttribute("aTail",new En(N,1)),h.setAttribute("aAlpha",new En(L,1)),p=new xi({transparent:!0,depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0}},vertexShader:`
        uniform float uTime;
        attribute float aPhase;
        attribute float aTail;
        attribute float aAlpha;
        varying float vAlpha;

        void main() {
          float progress = fract(aPhase + uTime * ${Ph.toFixed(3)});
          float distance = mix(${Nr.toFixed(1)}, ${Oh.toFixed(2)}, progress);
          distance += aTail * (0.55 + progress * 3.25);
          vec4 viewPosition = modelViewMatrix * vec4(position.xy, -distance, 1.0);
          gl_Position = projectionMatrix * viewPosition;
          vAlpha = aAlpha * smoothstep(0.58, 0.96, progress);
        }
      `,fragmentShader:`
        varying float vAlpha;

        void main() {
          if (vAlpha < 0.01) discard;
          gl_FragColor = vec4(vec3(1.0), vAlpha);
        }
      `});const z=new ty(h,p);return z.frustumCulled=!1,S.add(z),{kind:"webgl",resize(b,U,X){v.aspect=b/Math.max(1,U);const G=v.aspect/(t/i);x.scale.x=G,z.scale.x=G,v.updateProjectionMatrix(),m&&(m.uniforms.uPixelRatio.value=X),c?.setPixelRatio(X),c?.setSize(b,U,!1)},render(b,U,X){!c||!m||!p||(v.position.set(U*.38,-X*.28,0),v.updateMatrixWorld(),m.uniforms.uTime.value=b,p.uniforms.uTime.value=b,c.render(S,v))},dispose(){S.remove(x,z),d?.dispose(),h?.dispose(),m?.dispose(),p?.dispose(),c?.dispose()}}}catch{return d?.dispose(),h?.dispose(),m?.dispose(),p?.dispose(),c?.dispose(),null}}function f1(o,t,i,s,l){const c=o.getContext("2d",{alpha:!1,desynchronized:!0}),d=Dv(t,i,l);let h=t,m=i,p=s;const S=(v,g,E)=>{h=v,m=g,p=E,o.width=Math.max(1,Math.round(h*p)),o.height=Math.max(1,Math.round(m*p))};return S(t,i,s),{kind:"canvas2d",resize:S,render(v,g,E){if(!c)return;const T=m/(2*Math.tan(Yh*Math.PI/360));c.setTransform(p,0,0,p,0,0),c.fillStyle="#000",c.fillRect(0,0,h,m);for(const w of d){const y=(w.phase+v*Ph)%1,x=Nr+(Oh-Nr)*y,P=T/x,F=h/m/(t/i),C=h/2+(w.x*F-g*.38)*P,N=m/2+(w.y+E*.28)*P;if(C<-4||C>h+4||N<-4||N>m+4)continue;const L=Kc(w.size*(.6+y*1.7)*115/x,.5,2.1);if(c.globalAlpha=w.alpha*(.7+y*.25),w.streak&&y>.58){const z=x+.55+y*3.25,b=T/z;c.beginPath(),c.moveTo(h/2+(w.x-g*.38)*b,m/2+(w.y+E*.28)*b),c.lineTo(C,N),c.lineWidth=.55,c.strokeStyle="#fff",c.globalAlpha*=(y-.58)/.42*.42,c.stroke(),c.globalAlpha=w.alpha*(.7+y*.25)}c.beginPath(),c.arc(C,N,L,0,Math.PI*2),c.fillStyle="#fff",c.fill()}c.globalAlpha=1},dispose(){c?.clearRect(0,0,o.width,o.height)}}}function d1({enabled:o}){const t=Ye.useRef(null),i=Ye.useRef(o),s=Ye.useRef(null);return i.current=o,Ye.useEffect(()=>{const l=t.current;if(!l)return;let c=!1,d=0,h=0,m=0,p=performance.now(),S=0,v=0,g=0,E=0,T=V_(l),w=u1(l,T.width,T.height,T.pixelRatio,T.mobile);w||(w=f1(l,T.width,T.height,T.pixelRatio,T.mobile)),l.dataset.renderer=w.kind;const y=()=>{w?.render(m,S,v),d+=1,l.dataset.frame=String(d)},x=()=>{h&&(window.cancelAnimationFrame(h),h=0),l.dataset.motion="paused"},P=b=>{if(c||document.hidden||!i.current){x();return}const U=Math.max(0,(b-p)/1e3);p=b,m+=U;const X=1-Math.exp(-U*3.2);S+=(g-S)*X,v+=(E-v)*X,y(),h=window.requestAnimationFrame(P)},F=()=>{if(c||!i.current||document.hidden){l.dataset.motion="paused";return}h||(p=performance.now(),l.dataset.motion="playing",h=window.requestAnimationFrame(P))},C=()=>{T=V_(l),w?.resize(T.width,T.height,T.pixelRatio),y()},N=()=>{document.hidden?x():F()},L=b=>{if(!i.current||b.pointerType==="touch")return;const U=l.getBoundingClientRect();!U.width||!U.height||(g=Kc((b.clientX-U.left)/U.width-.5,-.5,.5),E=Kc((b.clientY-U.top)/U.height-.5,-.5,.5))},z=typeof ResizeObserver>"u"?null:new ResizeObserver(C);return z?.observe(l),window.addEventListener("resize",C,{passive:!0}),document.addEventListener("visibilitychange",N),window.addEventListener("pointermove",L,{passive:!0}),s.current=()=>{i.current&&!document.hidden?F():x()},C(),i.current&&!document.hidden?F():l.dataset.motion="paused",()=>{c=!0,s.current=null,x(),z?.disconnect(),window.removeEventListener("resize",C),document.removeEventListener("visibilitychange",N),window.removeEventListener("pointermove",L),w?.dispose(),w=null}},[]),Ye.useEffect(()=>{s.current?.()},[o]),He.jsx("canvas",{ref:t,"aria-hidden":"true","data-renderer":"webgl","data-frame":"0","data-motion":o?"playing":"paused",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",pointerEvents:"none",background:"#000"}})}ma.registerPlugin(k_);const h1=.42;function p1(o){return`${"/".replace(/\/+$/,"")}/${o.replace(/^\/+/,"")}`}function m1({src:o="media/ambient.mp3"}={}){const t=Ye.useRef(null),i=Ye.useRef(null),s=Ye.useRef(!1),l=Ye.useRef(!1),c=Ye.useRef(0),[d,h]=Ye.useState(!1),[m,p]=Ye.useState("");return k_((S,v)=>{const g=t.current;if(!g)return;const E=v,T=()=>{if(!i.current){const C=new Audio(p1(o));C.loop=!0,C.preload="auto",C.volume=0,i.current=C}return i.current},w=E((C,N)=>{N!==c.current||!s.current||document.hidden||(ma.killTweensOf(C,"volume"),ma.to(C,{duration:.55,ease:"power2.out",overwrite:!0,volume:h1}))}),y=E((C,N)=>{ma.killTweensOf(C,"volume"),ma.to(C,{duration:.35,ease:"power2.out",overwrite:!0,volume:0,onComplete:()=>{N===c.current&&!s.current&&C.pause()}})}),x=()=>{const C=T(),N=++c.current;C.loop=!0,C.play().then(()=>{if(N!==c.current||!s.current||document.hidden){C.pause();return}h(!0),p(""),w(C,N)}).catch(()=>{N!==c.current||!s.current||(s.current=!1,l.current=!1,h(!1),p("Sound could not play. Check your browser audio settings."))})},P=E(()=>{if(s.current){s.current=!1,l.current=!1,h(!1),p("");const C=i.current,N=++c.current;C&&y(C,N);return}s.current=!0,l.current=!1,p(""),x()}),F=E(()=>{const C=i.current;if(document.hidden){s.current&&C&&(l.current=!0,c.current+=1,ma.killTweensOf(C,"volume"),C.pause(),h(!1));return}s.current&&l.current&&(l.current=!1,x())});return g.addEventListener("click",P),document.addEventListener("visibilitychange",F),()=>{g.removeEventListener("click",P),document.removeEventListener("visibilitychange",F),s.current=!1,l.current=!1,c.current+=1;const C=i.current;C&&(ma.killTweensOf(C,"volume"),C.pause(),C.removeAttribute("src"),C.load(),i.current=null)}},{scope:t,dependencies:[o],revertOnUpdate:!0}),He.jsxs("button",{ref:t,type:"button",className:"audio-control","aria-label":d?"Turn sound off":"Turn sound on","aria-pressed":d,children:[He.jsxs("span",{className:"audio-bars","aria-hidden":"true",children:[He.jsx("span",{className:"audio-bar"}),He.jsx("span",{className:"audio-bar"}),He.jsx("span",{className:"audio-bar"})]}),He.jsxs("span",{className:"audio-label",children:["Sound ",d?"on":"off"]}),He.jsx("span",{className:"audio-status",role:"status","aria-live":"polite",children:m})]})}function g1(){const[o,t]=Ye.useState(!1),[i,s]=Ye.useState(!1),[l,c]=Ye.useState(!1),[d,h]=Ye.useState(!1);Ye.useEffect(()=>{const p=window.matchMedia("(prefers-reduced-motion: reduce)"),S=window.matchMedia("(min-width: 768px) and (pointer: fine)"),v=()=>{h(p.matches),c(S.matches);let g=null;try{g=localStorage.getItem("epac-motion")}catch{}s(!p.matches&&g!=="off")};return v(),t(!0),p.addEventListener("change",v),S.addEventListener("change",v),()=>{p.removeEventListener("change",v),S.removeEventListener("change",v)}},[]);const m=Ye.useCallback(()=>{s(p=>{const S=!p;try{localStorage.setItem("epac-motion",S?"on":"off")}catch{}return S})},[]);return{hydrated:o,enabled:i,desktop:l,reduced:d,toggle:m}}const _1="/brand/epac-logo-restored.webp";function X_(){const o=Ye.useRef(null),[t,i]=Ye.useState(!1),{enabled:s,desktop:l,toggle:c}=g1(),d=m=>{if(!s||!l||m.pointerType==="touch"||!o.current)return;const p=m.currentTarget.getBoundingClientRect(),S=(m.clientX-p.left)/p.width-.5,v=(m.clientY-p.top)/p.height-.5;ma.to(o.current,{rotationX:-v*5,rotationY:S*5,duration:.6,ease:"power2.out",overwrite:!0})},h=()=>{o.current&&ma.to(o.current,{rotationX:0,rotationY:0,duration:.8,ease:"power3.out",overwrite:!0})};return He.jsxs("div",{className:`space-home ${s?"motion-enabled":"motion-disabled"} ${t?"entry-finished":""}`,children:[He.jsx("a",{className:"skip-link",href:"#main",children:"Skip to content"}),He.jsx(d1,{enabled:s}),He.jsx("div",{className:"space-shade","aria-hidden":"true"}),He.jsx("div",{className:"film-gate gate-top","aria-hidden":"true"}),He.jsx("div",{className:"film-gate gate-bottom","aria-hidden":"true"}),He.jsx("main",{id:"main",className:"center-mark","aria-label":"ePAC",children:He.jsx("div",{className:"mark-perspective",onPointerMove:d,onPointerLeave:h,children:He.jsx("div",{className:"mark-tilt",ref:o,children:He.jsx("h1",{className:"mark-arrival",onAnimationEnd:()=>i(!0),children:He.jsx("img",{className:"logo",src:_1,width:"1200",height:"1200",alt:"ePAC",fetchPriority:"high"})})})})}),He.jsx("footer",{className:"space-footer",children:He.jsx("span",{children:"© ePAC, LLC"})}),He.jsxs("div",{className:"space-controls","aria-label":"Experience controls",children:[He.jsx(m1,{src:"media/space-ambient.mp3"}),He.jsx("button",{className:"motion-toggle",type:"button",title:s?"Pause motion":"Resume motion","aria-label":s?"Pause space flight":"Resume space flight","aria-pressed":!s,onClick:()=>{h(),c()},children:s?He.jsx(kS,{size:14,"aria-hidden":"true"}):He.jsx(WS,{size:14,"aria-hidden":"true"})})]})]})}const Hc=document.getElementById("root");if(!Hc)throw new Error("Missing landing page root.");Hc.children.length>0?B0.hydrateRoot(Hc,He.jsx(X_,{})):B0.createRoot(Hc).render(He.jsx(X_,{}));
