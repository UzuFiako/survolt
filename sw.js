// Survolt : mise en cache pour jouer hors ligne. Le jeu se met à jour tout seul quand il y a du réseau.
// v133 (MAJ 25) : corrections et confort.
// v132 (MAJ 24) : battle royale, trouver quelqu’un, forge et équipement premium, relevé des monnaies, défi premium.
// v95 (MAJ 8) : cosmétiques animés, atelier et garage premium, reprise de partie, zoom, perks Super rare, paliers d’emplacement.
const CACHE = 'survolt-v143';
const FILES = ['./', './index.html', './comptes.html', './manifest.webmanifest', './sv-icon-192.png', './sv-icon-512.png', './sv-icon-maskable.png', './sv-apple-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f => c.add(f).catch(() => {})))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url);   // le classement en ligne n'est jamais mis en cache
  if (u.origin !== location.origin && !/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) return;
  const page = req.mode === 'navigate' || /\.html$/.test(u.pathname);
  if (page) {   // les pages : d'abord le réseau (pour avoir la dernière version), sinon le cache — chaque page garde sa propre copie
    const key = /comptes\.html$/.test(u.pathname) ? './comptes.html' : './index.html';
    e.respondWith(fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(key, c)); } return r; }).catch(() => caches.match(key).then(h => h || caches.match('./index.html'))));
    return;
  }
  // le reste (icônes, polices) : d'abord le cache
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return r; })));
});
// MAJ 22 : toucher une notification ouvre (ou ramène) le jeu
self.addEventListener('notificationclick', e => { e.notification.close(); e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(L => { for (const c of L) if ('focus' in c) return c.focus(); return self.clients.openWindow('./'); })); });
