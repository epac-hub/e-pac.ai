export function mediaPath(filename: string): string {
  return `${import.meta.env.BASE_URL}manus-storage/${filename}`;
}
