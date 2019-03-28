/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/workbox-v3.6.3/workbox-sw.js",
  "/static/workbox/next-precache-manifest-bf67a47b52a4a283a3b0760e8822d6a7.js",
  "/static/workbox/next-precache-manifest-492c5b73505e07d4a3e6de585762c41a.js",
  "/static/workbox/next-precache-manifest-492c5b73505e07d4a3e6de585762c41a.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "/_next/static/791863919230013118ca972599033c54.woff",
    "revision": "791863919230013118ca972599033c54"
  },
  {
    "url": "/_next/static/9ccdb2e916cc1ec13bbe38acade5828d.woff",
    "revision": "9ccdb2e916cc1ec13bbe38acade5828d"
  },
  {
    "url": "/_next/static/manifest.json",
    "revision": "12cfe26c2d0f86016471a2f5016cfedd"
  },
  {
    "url": "/_next/static/style.css",
    "revision": "47a7fd6cdc66d26552da2e13acb5feed"
  },
  {
    "url": "/_next/static/style.css.map",
    "revision": "64b68d69226057b5461a10fa4be3f24c"
  },
  {
    "url": "/_next/static/commons/main.js",
    "revision": "6962afd82c2661a04aa129e1836151f6"
  },
  {
    "url": "/_next/static/commons/main.js.map",
    "revision": "3ad42b83768e5693de428cbd19f02feb"
  },
  {
    "url": "/_next/static/commons/manifest.js",
    "revision": "5fe45f24acb10042e895549c361af586"
  },
  {
    "url": "/_next/static/commons/manifest.js.map",
    "revision": "cd80d7fbc1f12a09b9d199343797c62e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
