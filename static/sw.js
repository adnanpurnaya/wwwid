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
    "url": "/wwwid/_nuxt/manifest.83868f3ef79dbe2841d2.js",
    "revision": "64804b70bfaa16c84193eb8cdcb28dad"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.5bd4295b2dd736099e11.js",
    "revision": "aac89783faf2dde2c36d2303a3f4c357"
  },
  {
    "url": "/wwwid/_nuxt/pages/index.11bd8f20870be56f7956.js",
    "revision": "e591fc85fb3fd53b3d8011f8985af7b7"
  },
  {
    "url": "/wwwid/_nuxt/pages/kategori/_name/index.fa7fba4feb5a4901db3e.js",
    "revision": "3bbf4301c019fb54e7af0ff00c4ca671"
  },
  {
    "url": "/wwwid/_nuxt/vendor.6d32051177c3bdb2a680.js",
    "revision": "992ec7aadd9b17d967ec3e0f82177e2a"
  }
])


workboxSW.router.registerRoute(new RegExp('/wwwid/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/wwwid/.*'), workboxSW.strategies.networkFirst({}), 'GET')

