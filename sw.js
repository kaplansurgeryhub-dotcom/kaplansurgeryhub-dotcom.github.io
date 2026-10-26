// Kaplan Surgical Hub · interns · service worker for push notifications only (no offline cache).
// Kaplan Ops sends data-only messages through Firebase Cloud Messaging: { title, body, tag }.
// A tap opens the app on the address it was last opened with (the page keeps it in the 'kshi' cache).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { title: e.data && e.data.text() }; }
  const m = d.data || d.notification || d;
  e.waitUntil(self.registration.showNotification(m.title || 'Kaplan Surgical Hub', {
    body: m.body || '', icon: '/ops/icon-192.png', badge: '/ops/icon-192.png', tag: m.tag || undefined, lang: 'he', dir: 'rtl', data: { at: Date.now() }
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil((async () => {
    const L = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const open = L.find(c => c.url.indexOf(self.registration.scope) === 0 && c.url.indexOf('/ops/') < 0);
    if (open) return open.focus();
    let q = '';
    try { const r = await (await caches.open('kshi')).match('start'); if (r) q = await r.text(); } catch (x) {}
    return self.clients.openWindow(self.registration.scope + q);
  })());
});
