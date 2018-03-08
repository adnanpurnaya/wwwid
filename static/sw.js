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
    "url": "/wwwid/_nuxt/manifest.ecbfc9f09939bf80ebbc.js",
    "revision": "1edf91f764e4ac7dd5577f6bd81d14a3"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.5bd4295b2dd736099e11.js",
    "revision": "aac89783faf2dde2c36d2303a3f4c357"
  },
  {
    "url": "/wwwid/_nuxt/pages/index.2fa7684c83027ae77a30.js",
    "revision": "8b6060ca31070c249daf459249e2ba8f"
  },
  {
    "url": "/wwwid/_nuxt/pages/kategori/_name/index.c5c769064a066640cc49.js",
    "revision": "b097a611bb6a9603ad8bc4122640d460"
  },
  {
    "url": "/wwwid/_nuxt/vendor.6d32051177c3bdb2a680.js",
    "revision": "992ec7aadd9b17d967ec3e0f82177e2a"
  }
])


workboxSW.router.registerRoute(new RegExp('/wwwid/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/wwwid/.*'), workboxSW.strategies.networkFirst({}), 'GET')

