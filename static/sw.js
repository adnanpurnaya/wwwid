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
    "url": "/wwwid/_nuxt/layouts/default.d6493b629b0f005d6dcd.js",
    "revision": "12f020cb8805bc1c41bfa07f12e2d33d"
  },
  {
    "url": "/wwwid/_nuxt/manifest.fcb2371da41e72e536a1.js",
    "revision": "ad3e2365424ac649f9b92b537394c5e3"
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

