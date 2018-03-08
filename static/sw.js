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
    "url": "/wwwid/_nuxt/manifest.1ba93a7303b77428a2d2.js",
    "revision": "beb32b9874da20c1de9b433b2f12f5d9"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.c766e8e15b9c11447402.js",
    "revision": "3e2d2b2892764caf6e5bdd655403be7b"
  },
  {
    "url": "/wwwid/_nuxt/pages/index.47ca6bfe6d7f40f4dff2.js",
    "revision": "f2c83672e0d2ea2c40d7dfba27cac46b"
  },
  {
    "url": "/wwwid/_nuxt/pages/kategori/_name/index.95cef7a77ad3f3ea8a05.js",
    "revision": "39217ef99939a7bdee3318ba687e678b"
  },
  {
    "url": "/wwwid/_nuxt/vendor.6d32051177c3bdb2a680.js",
    "revision": "992ec7aadd9b17d967ec3e0f82177e2a"
  }
])


workboxSW.router.registerRoute(new RegExp('/wwwid/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/wwwid/.*'), workboxSW.strategies.networkFirst({}), 'GET')

