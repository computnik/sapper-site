!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var s = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var s in e)
          n.d(
            o,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, 'a', t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ''),
    n((n.s = 0));
})([
  function (e, t, n) {
    'use strict';
    n.r(t);
    const o = [
        'client/b81bf196d4b27f3d0037/about.1.js',
        'client/b81bf196d4b27f3d0037/blog_$slug.2.js',
        'client/b81bf196d4b27f3d0037/home.0.js',
        'client/b81bf196d4b27f3d0037/index.3.js',
        'client/b81bf196d4b27f3d0037/main.js',
      ].concat([
        'service-worker-index.html',
        '.DS_Store',
        'css/global.css',
        'images/.DS_Store',
        'images/icons/icon-128x128.png',
        'images/icons/icon-144x144.png',
        'images/icons/icon-152x152.png',
        'images/icons/icon-192x192.png',
        'images/icons/icon-384x384.png',
        'images/icons/icon-512x512.png',
        'images/icons/icon-72x72.png',
        'images/icons/icon-96x96.png',
        'images/profile.png',
        'manifest.json',
        'styles/tailwind.css',
      ]),
      s = new Set(o);
    self.addEventListener('install', (e) => {
      e.waitUntil(
        caches
          .open('cache1594576659993')
          .then((e) => e.addAll(o))
          .then(() => {
            self.skipWaiting();
          })
      );
    }),
      self.addEventListener('activate', (e) => {
        e.waitUntil(
          caches.keys().then(async (e) => {
            for (const t of e)
              'cache1594576659993' !== t && (await caches.delete(t));
            self.clients.claim();
          })
        );
      }),
      self.addEventListener('fetch', (e) => {
        if ('GET' !== e.request.method || e.request.headers.has('range'))
          return;
        const t = new URL(e.request.url);
        t.protocol.startsWith('http') &&
          ((t.hostname === self.location.hostname &&
            t.port !== self.location.port) ||
            (t.host === self.location.host && s.has(t.pathname)
              ? e.respondWith(caches.match(e.request))
              : 'only-if-cached' !== e.request.cache &&
                e.respondWith(
                  caches.open('offline1594576659993').then(async (t) => {
                    try {
                      const n = await fetch(e.request);
                      return t.put(e.request, n.clone()), n;
                    } catch (n) {
                      const o = await t.match(e.request);
                      if (o) return o;
                      throw n;
                    }
                  })
                )));
      });
  },
]);
