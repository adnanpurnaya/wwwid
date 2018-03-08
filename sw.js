importScripts('/wwwid/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wwwid",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/wwwid/_nuxt/app.76d0e35988e491ca6c7f.js",
    "revision": "a0d16f83c06884ce60bcb4ae66fe1e0a"
  },
  {
    "url": "/wwwid/_nuxt/layouts/default.efa4f1c90510e34d220e.js",
    "revision": "c41d4a4eaac331f0067cd13f64774d57"
  },
  {
    "url": "/wwwid/_nuxt/manifest.7c29c7b3735b35242465.js",
    "revision": "e629a31e1e14713887c81f4264997872"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.c766e8e15b9c11447402.js",
    "revision": "3e2d2b2892764caf6e5bdd655403be7b"
  },
  {
    "url": "/wwwid/_nuxt/pages/index.6a7dea8cdd3d1af0843f.js",
    "revision": "0166f7d949c1a0e5fad0a575c03c2e95"
  },
  {
    "url": "/wwwid/_nuxt/pages/kategori/_name/index.21711858316e9b4d2007.js",
    "revision": "339d3004a44b57f62e69133a469b97b4"
  },
  {
    "url": "/wwwid/_nuxt/vendor.6d32051177c3bdb2a680.js",
    "revision": "992ec7aadd9b17d967ec3e0f82177e2a"
  }
])


workboxSW.router.registerRoute(new RegExp('/wwwid/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/wwwid/.*'), workboxSW.strategies.networkFirst({}), 'GET')

