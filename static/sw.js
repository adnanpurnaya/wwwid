importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wwwid",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.421fc72045b97250dd9b.js",
    "revision": "e452f9a305d6e1bb5f679e37f88504b5"
  },
  {
    "url": "/_nuxt/layouts/default.981efef4ca56531c8424.js",
    "revision": "5e9ea20a89e0432863a42549fd1092e7"
  },
  {
    "url": "/_nuxt/manifest.51275df5cf4b7be92b26.js",
    "revision": "422f336b00b2bb9006815bbb5339f33c"
  },
  {
    "url": "/_nuxt/pages/_slug/index.bb5260c44cd75ec80397.js",
    "revision": "9f6593dcba055092ac505c162ac93811"
  },
  {
    "url": "/_nuxt/pages/index.8d1e853a334fbcaa4c64.js",
    "revision": "f9ec83f666b811b791510ba5743866f1"
  },
  {
    "url": "/_nuxt/pages/kategori/_name/index.9a3c1b6e3d32c85b57e8.js",
    "revision": "25ae839f03a749ccc617ed67032c055d"
  },
  {
    "url": "/_nuxt/vendor.0d4fbe687f4678897cb8.js",
    "revision": "b123e8718878ae94aaa6d137eff2db03"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

