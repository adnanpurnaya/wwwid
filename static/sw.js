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
    "url": "/wwwid/_nuxt/layouts/default.8e779849eeb5c292cf37.js",
    "revision": "70a1c1047f2ddd101145599a47132e08"
  },
  {
    "url": "/wwwid/_nuxt/manifest.73b9fa8d92757c2630ac.js",
    "revision": "832b22cc9defae0c9d692b412097f69f"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.5bd4295b2dd736099e11.js",
    "revision": "aac89783faf2dde2c36d2303a3f4c357"
  },
  {
    "url": "/wwwid/_nuxt/pages/index.8d1e853a334fbcaa4c64.js",
    "revision": "f9ec83f666b811b791510ba5743866f1"
  },
  {
    "url": "/wwwid/_nuxt/pages/kategori/_name/index.68e4df5ea98a5a94f594.js",
    "revision": "cdefa4f650a0720a7212967761ee5b5d"
  },
  {
    "url": "/wwwid/_nuxt/vendor.0d4fbe687f4678897cb8.js",
    "revision": "b123e8718878ae94aaa6d137eff2db03"
  }
])


workboxSW.router.registerRoute(new RegExp('/wwwid/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/wwwid/.*'), workboxSW.strategies.networkFirst({}), 'GET')

