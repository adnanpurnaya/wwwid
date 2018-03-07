importScripts('/wwwid/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wwwid",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/wwwid/_nuxt/app.73df988239454e0d2b77.js",
    "revision": "94635c4dc2d6d6106c8644ac93be3563"
  },
  {
    "url": "/wwwid/_nuxt/layouts/default.981efef4ca56531c8424.js",
    "revision": "5e9ea20a89e0432863a42549fd1092e7"
  },
  {
    "url": "/wwwid/_nuxt/manifest.ea8479e6b21dcca031d7.js",
    "revision": "5c8759743e025e1d9d447383f800d5cd"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.bb5260c44cd75ec80397.js",
    "revision": "9f6593dcba055092ac505c162ac93811"
  },
  {
    "url": "/wwwid/_nuxt/pages/index.8d1e853a334fbcaa4c64.js",
    "revision": "f9ec83f666b811b791510ba5743866f1"
  },
  {
    "url": "/wwwid/_nuxt/pages/kategori/_name/index.9a3c1b6e3d32c85b57e8.js",
    "revision": "25ae839f03a749ccc617ed67032c055d"
  },
  {
    "url": "/wwwid/_nuxt/vendor.0d4fbe687f4678897cb8.js",
    "revision": "b123e8718878ae94aaa6d137eff2db03"
  }
])


workboxSW.router.registerRoute(new RegExp('/wwwid/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/wwwid/.*'), workboxSW.strategies.networkFirst({}), 'GET')

