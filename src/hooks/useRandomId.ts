export function useRandomId(): string {
  let n: number = 30;
  let chars = "0123456789";
  let id: string = "";
  for (var i = 0; i < n; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
