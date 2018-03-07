importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wwwid",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.244a066b26d1b02bc76f.js",
    "revision": "4c6617d7a73a0e2601ceba618f753f9a"
  },
  {
    "url": "/_nuxt/layouts/default.1f81aee4dfbd8fe4f9ea.js",
    "revision": "54332c225fbf96d1de740799563c116c"
  },
  {
    "url": "/_nuxt/manifest.2101e497e6d31f4d99d5.js",
    "revision": "d1bc486500590d20ec73006fc82033c8"
  },
  {
    "url": "/_nuxt/pages/_slug/index.bb5260c44cd75ec80397.js",
    "revision": "9f6593dcba055092ac505c162ac93811"
  },
  {
    "url": "/_nuxt/pages/about/index.14dd40437b3d6b14d37d.js",
    "revision": "e6b96f1116fce6a6836d3ff570cfb0f7"
  },
  {
    "url": "/_nuxt/pages/index.e4790389c308d3772516.js",
    "revision": "5e56d91bfd8629a6d5a9648fb620e398"
  },
  {
    "url": "/_nuxt/pages/kategori/_name/index.eddcc76027a89509568b.js",
    "revision": "c485fd5aa5c7c2febdc980239b431b75"
  },
  {
    "url": "/_nuxt/vendor.7a3ece053cdc7dbd1c6c.js",
    "revision": "e2e420e35ab809400844f90f5c10b4fe"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

