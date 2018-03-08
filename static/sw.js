importScripts('/wwwid/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wwwid",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/wwwid/_nuxt/app.29bf7a552244a4bbc559.js",
    "revision": "5bb427aba893e1ada78a490164854b14"
  },
  {
    "url": "/wwwid/_nuxt/layouts/default.1c1b83f9d81a0b43db4f.js",
    "revision": "08db264b06541fcd6501860d208f8f34"
  },
  {
    "url": "/wwwid/_nuxt/manifest.005a05c5b8d84a252a86.js",
    "revision": "14bc6b74045e20b958bb8248acb7aa44"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.5bd4295b2dd736099e11.js",
    "revision": "aac89783faf2dde2c36d2303a3f4c357"
  },
  {
    "url": "/wwwid/_nuxt/pages/index.6371ce525a01b02e4526.js",
    "revision": "e6109ca41e9648ad7ea89ec586b48b3b"
  },
  {
    "url": "/wwwid/_nuxt/pages/kategori/_name/index.7275e8c4396a2a8cb94b.js",
    "revision": "cd3882b23010e30b3cf4af75177ce5a3"
  },
  {
    "url": "/wwwid/_nuxt/vendor.6d32051177c3bdb2a680.js",
    "revision": "992ec7aadd9b17d967ec3e0f82177e2a"
  }
])


workboxSW.router.registerRoute(new RegExp('/wwwid/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/wwwid/.*'), workboxSW.strategies.networkFirst({}), 'GET')

