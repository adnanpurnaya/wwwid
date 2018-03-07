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
    "url": "/wwwid/_nuxt/layouts/default.b41e2d5f8b9e94dca4e3.js",
    "revision": "752125a89ebec23d91be813bb82dfb51"
  },
  {
    "url": "/wwwid/_nuxt/manifest.108029bcb9a02aae4e28.js",
    "revision": "c3a3c30a1a06f78ef2c2f4ad3851291a"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.2eb67b0297ce00e2f992.js",
    "revision": "3eeabe5a6fc9112e6a078a3fc31da1da"
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

