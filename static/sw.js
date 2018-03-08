importScripts('/wwwid/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "wwwid",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/wwwid/_nuxt/app.3f16b9d204edaa623242.js",
    "revision": "da56ab692378f759b7aa024370b46937"
  },
  {
    "url": "/wwwid/_nuxt/layouts/default.1c1b83f9d81a0b43db4f.js",
    "revision": "08db264b06541fcd6501860d208f8f34"
  },
  {
    "url": "/wwwid/_nuxt/manifest.3fc3bd7fac04d7a8d7e7.js",
    "revision": "093a8702dc15eef002038500838498a8"
  },
  {
    "url": "/wwwid/_nuxt/pages/_slug/index.c766e8e15b9c11447402.js",
    "revision": "3e2d2b2892764caf6e5bdd655403be7b"
  },
  {
    "url": "/wwwid/_nuxt/pages/index.2e9357f0524f3d1ea84e.js",
    "revision": "8b6060ca31070c249daf459249e2ba8f"
  },
  {
    "url": "/wwwid/_nuxt/pages/kategori/_name/index.f0ae6b95ed5f70118813.js",
    "revision": "b097a611bb6a9603ad8bc4122640d460"
  },
  {
    "url": "/wwwid/_nuxt/vendor.6d32051177c3bdb2a680.js",
    "revision": "992ec7aadd9b17d967ec3e0f82177e2a"
  }
])


workboxSW.router.registerRoute(new RegExp('/wwwid/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/wwwid/.*'), workboxSW.strategies.networkFirst({}), 'GET')

