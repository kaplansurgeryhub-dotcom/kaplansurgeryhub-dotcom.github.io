// Kaplan Surgical Hub · service worker for push notifications only (no offline cache).
// The server sends data-only messages through Firebase Cloud Messaging: { title, body, tag }.
// A tap opens the app on the address it was last opened with (the page keeps it in the 'ksh' cache).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

// a heartbeat vibration (Android) and a notification that stays until it is tapped; an open app also gets the message for its own sound and banner (1/11/2026)
const VIB = [70, 90, 70, 420, 70, 90, 70, 420, 70, 90, 70];
self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { title: e.data && e.data.text() }; }
  const m = d.data || d.notification || d, title = m.title || 'Kaplan Surgical Hub', body = m.body || '';
  e.waitUntil(Promise.all([
    self.registration.showNotification(title, { body: body, icon: 'icon-192.png', badge: 'icon-192.png', tag: m.tag || undefined, renotify: !!m.tag, requireInteraction: true, vibrate: VIB, lang: 'he', dir: 'rtl', data: { at: Date.now() } }),
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(L => L.forEach(c => { try { c.postMessage({ ksh: 'push', title: title, body: body }); } catch (x) {} })).catch(() => {})
  ]));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil((async () => {
    const L = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const open = L.find(c => c.url.indexOf(self.registration.scope) === 0);
    if (open) { open.postMessage({ ksh: 'refresh' }); return open.focus(); }
    let q = '';
    try { const r = await (await caches.open('ksh')).match('start'); if (r) q = await r.text(); } catch (x) {}
    return self.clients.openWindow(self.registration.scope + q);
  })());
});
