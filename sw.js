if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  );
  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded');

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([
  {
    "url": "favicon.png",
    "revision": "c668e2e7f38fbae73e5727182936593e"
  },
  {
    "url": "index.html",
    "revision": "8e8881f3ffc65bd478a94b0d0010fb3a"
  },
  {
    "url": "precache-manifest.be921c7a77440681bf44edeea76066b7.js",
    "revision": "be921c7a77440681bf44edeea76066b7"
  },
  {
    "url": "service-worker.js",
    "revision": "f7129bb1b1b70c02afb75a06eff9e75b"
  },
  {
    "url": "static/css/2.7fa9d7d1.chunk.css",
    "revision": "0d3b19ec3b4965730ab3aeb1985b1bfd"
  },
  {
    "url": "static/js/2.42b9a8c3.chunk.js",
    "revision": "621760d6c30a0efba5bb004971d4a227"
  },
  {
    "url": "static/js/main.93097689.chunk.js",
    "revision": "2623fdf65a335d728006a59dd01c365c"
  },
  {
    "url": "static/js/runtime~main.d8882185.js",
    "revision": "73ef17299c61afea560fbe8aef32d7b9"
  }
]);

/* custom cache rules*/
workbox.routing.registerNavigationRoute('/index.html', {
      blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
    });

workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg)$/,
      workbox.strategies.cacheFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

} else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
