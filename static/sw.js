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
    "url": "/wwwid/_nuxt/layouts/default.35752d788bfe6fcccbc2.js",
    "revision": "23ec7998ade0103c39fd3f1e06458618"
  },
  {
    "url": "/wwwid/_nuxt/manifest.ba41f1d85226449c1338.js",
    "revision": "1127d2096e3aaea9224eac9ba1ef519c"
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

