self.addEventListener("install", (e) => {
  console.log("[SW] Installing Service Worker", e);
});

self.addEventListener("activate", function (e) {
  console.log("[SW] Activating Service Worker", e);
  return self.clients.claim();
});

self.addEventListener("fetch", function (e) {
  console.log("[SW] Fetching something ...", e);
  // e.respondWith(null);
});
