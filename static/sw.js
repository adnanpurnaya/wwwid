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
    "url": "/wwwid/_nuxt/layouts/default.1c1b83f9d81a0b43db4f.js",
    "revision": "08db264b06541fcd6501860d208f8f34"
  },
  {
    "url": "/wwwid/_nuxt/manifest.dfc2e493e2b19457b5f5.js",
    "revision": "34c707fdc44be6cd0cff858dbbdab93a"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.c766e8e15b9c11447402.js",
    "revision": "3e2d2b2892764caf6e5bdd655403be7b"
  },
  {
    "url": "/wwwid/_nuxt/pages/index.fd0287e307e4c8214c29.js",
    "revision": "a0bc1990d002303ffd28b7d9e57a5bdd"
  },
  {
    "url": "/wwwid/_nuxt/pages/kategori/_name/index.c981126a6b9041d03b7d.js",
    "revision": "1b88b95d0de1f8338bc966865820d278"
  },
  {
    "url": "/wwwid/_nuxt/vendor.6d32051177c3bdb2a680.js",
    "revision": "992ec7aadd9b17d967ec3e0f82177e2a"
  }
])


workboxSW.router.registerRoute(new RegExp('/wwwid/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/wwwid/.*'), workboxSW.strategies.networkFirst({}), 'GET')

