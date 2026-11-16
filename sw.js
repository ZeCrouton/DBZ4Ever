// Service worker : installation hors ligne (cache versionné).
// Mise en cache à l'installation, puis « cache d'abord » avec mise à jour en arrière-plan.
// Pour publier une nouvelle version des fichiers, incrémenter VERSION.
const VERSION = 'dbz-v8';
const STATIQUES = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icons/dragonball.webp',
  './music/track-1.mp3',
  './music/track-2.mp3',
  './music/track-3.mp3',
  './img/bg-0.jpg',
  './img/bg-1.jpg',
  './img/bg-2.jpg',
  './img/bg-3.jpg',
  './img/bg-4.jpg',
  './img/card-00.jpg',
  './img/card-01.jpg',
  './img/card-02.jpg',
  './img/card-03.jpg',
  './img/card-04.jpg',
  './img/card-05.jpg',
  './img/card-06.jpg',
  './img/card-07.jpg',
  './img/card-08.jpg',
  './img/card-09.jpg',
  './img/card-10.jpg',
  './img/card-11.jpg',
  './img/card-12.jpg',
  './img/card-13.jpg',
  './img/card-14.jpg',
  './img/card-15.jpg',
  './img/card-16.jpg',
  './img/card-17.jpg',
  './img/card-18.jpg',
  './img/card-19.jpg',
  './img/card-20.jpg',
  './img/card-21.jpg',
  './img/card-22.jpg',
  './img/card-23.jpg',
  './img/card-24.jpg',
  './img/card-25.jpg',
  './img/card-26.jpg',
  './img/card-27.jpg',
  './img/card-28.jpg',
  './img/card-29.jpg',
  './img/card-30.jpg',
  './img/card-31.jpg',
  './img/card-32.jpg',
  './img/card-33.jpg',
  './img/card-34.jpg',
  './img/card-35.jpg',
  './img/card-36.jpg',
  './img/card-37.jpg',
  './img/card-38.jpg',
  './img/card-39.jpg',
  './img/card-40.jpg',
  './img/card-41.jpg',
  './img/card-42.jpg',
  './img/card-43.jpg',
  './img/card-44.jpg',
  './img/card-45.jpg',
  './img/card-46.jpg',
  './img/card-47.jpg',
  './img/card-48.jpg',
  './img/card-49.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION).then(c => c.addAll(STATIQUES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(noms => Promise.all(noms.filter(n => n !== VERSION).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  // Seules les requêtes GET du même site sont mises en cache.
  // Les requêtes « Range » (lecture audio) passent directement au réseau.
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin || req.headers.has('range')) return;
  event.respondWith(
    caches.match(req).then(enCache => {
      const reseau = fetch(req).then(res => {
        if (res.ok) caches.open(VERSION).then(c => c.put(req, res.clone()));
        return res;
      });
      return enCache || reseau;
    }).catch(() => fetch(req))
  );
});
