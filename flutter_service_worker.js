'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "482e4d9e1421e4cb324b1683cc22e3cc",
".git/config": "fd5848e09f2bbae5433679a16dfacf7d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "72e24923de4477780801199a6b31ef28",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "fbc7396e13f842937ec5e2a93220c95a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81c76af34d6e5b420b1244797413ec6b",
".git/logs/refs/heads/master": "81c76af34d6e5b420b1244797413ec6b",
".git/logs/refs/remotes/origin/master": "141e44dddf5e624403d47983f3d6b2ed",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/938274839309a02600d3917ac5063c24baa0c2": "2811bb9a0e3661fa1c90ff434e4de9f1",
".git/objects/07/4427410b12a98f28aaaa620afe96513535ecf3": "41ff350b753087afb4f15a1036f3e001",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/22/da5bfb93a07da914bcf58ad0db2d72d338bedb": "266cd8fe339bb503ff07a5c8e283b32e",
".git/objects/27/0238b002c684882043657be4ee1515c027d555": "4b05916c9c0595650cc395b9ec62e4dc",
".git/objects/28/ccfad0ce92f2b5eb832a1f3552fc4320343c81": "4ca45736895ed8ea690acb51f15210bf",
".git/objects/29/86f8ba0d8f1e564d3d244a5a1089eb65bb8c47": "ba1fa26aa02898e907f1c9edbd612382",
".git/objects/2b/bc334ccadb1b4ce3f55ba2aca15bf54ced4592": "106da2a5200c9acd84970ffcae7e5975",
".git/objects/30/3323731b8510ed8c6e8f569e68c6801682dc13": "96464cc6a706078863c3c7a771fae158",
".git/objects/36/6095a6d27730ce3a5208f8e02a08f538eef89e": "a7fbecf4cb274288f71599eaa6cbd05d",
".git/objects/37/55489b54d06c75d03a81a392e156e4aa33daac": "abd86bd408b6e7081167c696b12492ba",
".git/objects/39/bcf19e0c6695b87160db90e05b563ff3a65141": "29726be1a6c1de6ca01d9de814835b60",
".git/objects/3a/4720615ea841f16e48935df7d3172fb67fe965": "8ccc9f6ef56cfa96b17ef30d427098a2",
".git/objects/3c/9939b288a20e077aabe6862631224fe0903778": "eacaea68655c960729a8abc0af4de845",
".git/objects/3e/f85d1dcb4d26485548ceeaa2a02f3d9a8ee080": "17aa4ef481669027ec1f3b9e4b89ccd0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/997cd069aec4f70f9df44b8ade310218a9a136": "fdbef8cdacc8e4a776be747aa90e56ac",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/78bfa961362ae197dacfebd2f797ab934a2107": "4774b57d9f0e83bc0b3414bf9db329a6",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/5e/bca2675edd4b8819bafb5c2488b7165ef8bf05": "ca7984027c5a62b70607cc1a0794904e",
".git/objects/63/c7ab86c8f76ee83ea4591a6bd9b6efda79c8a7": "2f55e5084d47d987cd58ae280b38790b",
".git/objects/78/009cac883315d6c5b440659fe3077bb1ef6105": "3adc7d6438f6a0ff1937c57fc768839e",
".git/objects/78/b2447c49d6b91fdfecc8d5d8114a4282c37b67": "adc7abb1e7d8107964c27d9cc738355d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/7e/c10a362f86a71e5741512f06512c82b36c7926": "6285b2f0a541f0e857dc680410d1d1eb",
".git/objects/83/bada6a537ed398c8f6145b3f1849267266270f": "fd33ac578800917fad390386480f915a",
".git/objects/83/d2add671099025384978cfb24eb8431e51301f": "d479b52a9e9df32f73a9f85c823deb85",
".git/objects/85/342e42d1c8b996250e6e78fd4ce536b178de1b": "17f2c97e3cb03fdd096af86e93cebffc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/cfb213ac228d6b109b55f0209a5c9254c9f788": "c7136a3dc97e1d5c32fc9ad2230ac1bd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/a6098d65df1d66a517fc2dc9c9b08525c4246b": "4b81c5cf8e11ae2a3481cdab0a47ee10",
".git/objects/a8/93002d7310be16914b83dfd43e974995c2828f": "6b66826b08180f48cd35c4a20da03e63",
".git/objects/a8/a32c1f5984bbc71b0748aad3a236f4b1c320b1": "e918e5795204771ed5a81e860cde8c61",
".git/objects/a9/481565edb09570d0df9c48c613e4e1682b0957": "2bcaabe4d676a128e56c61313f703879",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/af/5593b6c093cd0786ba397554ac4eeb8291eae9": "0ebe39afb1830a968fd2f6d7fa38126b",
".git/objects/b0/fc02c20cc3bad3a5221ea182e035e4a1aa1bd3": "5806e0ced72a1f68a8aff05e589dd4d7",
".git/objects/b5/87b37db417a71162c4e835a36e660ba05c8a3f": "baf9c1845f03b124fe22bdd4dee3656e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/eb279072c412843e3c1a63d717df0d36bb0160": "9b75e526a9fb7b17f2ad0a0c3bd07a4b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/6451d302a8f85f166ebaa3bb0ec98c7951a8bc": "9d62ef715651158c43b3e06ad7b089b0",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/d0/d066a833b3a0ed2625faf2cb586fba918f88de": "6ac04b14057d0d9d1a0dd28acf8f03b1",
".git/objects/d1/83a5eed39208c48cd2b5f27d952218ffac3186": "fe26f1648194b36c221ab2da9bb417e2",
".git/objects/d4/2db99298f9b791d266f3aef1a310eacc669061": "567d41cbf97e3ad927257eb800ff0740",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/df5e4204d8eab83be1e0f75229120182f38395": "bdce7a6dca8854301508e4c9e40aeb6c",
".git/objects/dc/f40742908eb42a725c04ba9af1357827eeb922": "04fba68ca2856a56eb0f535c24397960",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/c75bdd8f9eb817ed56385b28d8feba89f42ee0": "3fa4dbeb9e8fdee442d46c53d965898e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/objects/f3/7a75e571cbb1773e8345e04438e20b72606c77": "42eb1e3df39927121023a56dc637a424",
".git/objects/f8/fd988f7f2976dc97a83b872457bfb074399c8b": "b3480bfc040b20f90263f3d4a9c8b5e6",
".git/objects/ff/42551fcb6e87c314c9072e4298bd465e7b3ab6": "05d80317cb1d54476af82e545b61fb02",
".git/ORIG_HEAD": "d619ebc3852b9bd473167f0c7776936e",
".git/refs/heads/master": "d619ebc3852b9bd473167f0c7776936e",
".git/refs/remotes/origin/master": "d619ebc3852b9bd473167f0c7776936e",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "7312d1594b562bc63bb6c9ff2f38e5fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"CNAME": "b8f8d2f47301fa7da791ed7d7f417bbd",
"favicon.png": "45e7d39a0123f77ffc03c151341d83c9",
"icons/Icon-192.png": "c35643eb2bb40b3d23b85448d98de8a1",
"icons/Icon-512.png": "712a1736ac746583acf68e81fdf9de87",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1979c0eed5b0779983987db99e7bf69a",
"/": "1979c0eed5b0779983987db99e7bf69a",
"main.dart.js": "6989011d2b78187f50d324b6a2a1ca67",
"manifest.json": "646c81e60e78ae24f773445477c7b9a1",
"version.json": "2341f6186e2c520de2521add8b11fc8c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
