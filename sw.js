// Survolt : mise en cache pour jouer hors ligne. Le jeu se met à jour tout seul quand il y a du réseau.
const CACHE = 'survolt-v54';
const FILES = ['./', './index.html', './manifest.webmanifest', './sv-icon-192.png', './sv-icon-512.png', './sv-apple-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => Promise.all(FILES.map(f => c.add(f).catch(() => {})))).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== CACHE).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url);   // le classement en ligne n'est jamais mis en cache
  if (u.origin !== location.origin && !/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) return;
  const page = req.mode === 'navigate' || req.url.endsWith('index.html');
  if (page) {   // la page : d'abord le réseau (pour avoir la dernière version), sinon le cache
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put('./index.html', c)); return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  // le reste (icônes, polices) : d'abord le cache
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok || r.type === 'opaque') { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return r; })));
});
