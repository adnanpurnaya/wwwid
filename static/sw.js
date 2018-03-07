importScripts('/wwwid/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wwwid",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/wwwid/_nuxt/app.f9976152508111edf6f0.js",
    "revision": "fa21c9526a1be2e610d04bcabbfeb804"
  },
  {
    "url": "/wwwid/_nuxt/layouts/default.abed6bea54c0a002f2b0.js",
    "revision": "ccb713f9b0382b72944c430feeafc719"
  },
  {
    "url": "/wwwid/_nuxt/manifest.f5b2832991940c7c451a.js",
    "revision": "e1f1e77ac3875f00b1244ab671e1b30d"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.8e6df9caaafd6f046c61.js",
    "revision": "1e9964e5d0bf8cb7273f45b66b778858"
  },
  {
    "url": "/wwwid/_nuxt/pages/about/index.14dd40437b3d6b14d37d.js",
    "revision": "e6b96f1116fce6a6836d3ff570cfb0f7"
  },
  {
    "url": "/wwwid/_nuxt/pages/index.e4790389c308d3772516.js",
    "revision": "5e56d91bfd8629a6d5a9648fb620e398"
  },
  {
    "url": "/wwwid/_nuxt/pages/kategori/_name/index.eddcc76027a89509568b.js",
    "revision": "c485fd5aa5c7c2febdc980239b431b75"
  },
  {
    "url": "/wwwid/_nuxt/vendor.7a3ece053cdc7dbd1c6c.js",
    "revision": "e2e420e35ab809400844f90f5c10b4fe"
  }
])


workboxSW.router.registerRoute(new RegExp('/wwwid/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/wwwid/.*'), workboxSW.strategies.networkFirst({}), 'GET')

