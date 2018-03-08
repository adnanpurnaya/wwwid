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
    "url": "/wwwid/_nuxt/manifest.b18e3f1aa043926db65b.js",
    "revision": "c269ef502266ec62b14c4dbc8d10c1e4"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.5bd4295b2dd736099e11.js",
    "revision": "aac89783faf2dde2c36d2303a3f4c357"
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

