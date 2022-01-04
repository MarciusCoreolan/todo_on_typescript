export function useRandomId(n = 50) {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for(var i = 0; i < n; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
}
