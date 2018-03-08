importScripts('/wwwid/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wwwid",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/wwwid/_nuxt/app.3f16b9d204edaa623242.js",
    "revision": "da56ab692378f759b7aa024370b46937"
  },
  {
    "url": "/wwwid/_nuxt/layouts/default.1c1b83f9d81a0b43db4f.js",
    "revision": "08db264b06541fcd6501860d208f8f34"
  },
  {
    "url": "/wwwid/_nuxt/manifest.15a15f14f51d9436ad15.js",
    "revision": "2e91440321029b201b6afc69dd85c905"
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

