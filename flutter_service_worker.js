'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "6f957f06015c99a10dd899104ca011de",
"/": "6f957f06015c99a10dd899104ca011de",
"manifest.json": "3004526c0ef23a82ba01486915bc9dbe",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "76c005c3f17b28e1d4901e579406f6e0",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"assets/FontManifest.json": "209e66e2f71c646cc7eb744ea1cea0dc",
"assets/packages/flutter_charts/google_fonts/Comforter-Regular.ttf": "cff123ea94f9032380183b8bbbf30ec1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin.json": "4c0265649bb09b2081c671211bffe665",
"assets/NOTICES": "8164c22bd5196f351236f45fde798739",
"assets/AssetManifest.bin": "4d5f6bcc1de6246fb7a42a02f887bf9d",
"assets/lib/images/logo_foreground.png": "ebb78a0dbd214f82ea859cb219d43c0f",
"assets/lib/images/logoinblack.png": "ddd087a1f21b5185ed503f80da334e36",
"assets/lib/images/logo.png": "81dbf304cf54802bc3b63e3b810bb899",
"assets/lib/images/landingpagephoto.png": "40429c48f63f97d2133f337ba8e86212",
"assets/lib/images/manifestlogo.png": "5705d3a0507f52144bba91195082bfa2",
"assets/lib/images/companylogo.png": "f8c281089da024dd946049fac66b487b",
"assets/lib/images/logoin.png": "ff00a50def255d2a79c165b4cbf381c6",
"assets/AssetManifest.json": "175e4af82d87c43f1a057ab0e3ba9a0b",
"assets/fonts/MaterialIcons-Regular.otf": "947123a5fcd5f66dc8caff4c4f41f1ab",
"version.json": "1847a9e951a68e3740763afb75b75528",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "81dbf304cf54802bc3b63e3b810bb899",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/c8eefad8cfb53ff808824b493d535cf18d063d": "a76ea9d818fcdcffefe7849b844372b3",
".git/objects/3c/df84fc8ebf7b5bcc1d88035be191c8be17cb14": "4b8e8eb9f9e679ce7e5f395c1d3015a6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/c5675a00d70d2d90772dd72030340668c978ac": "4d67f9ace8cdcc1d328b9c96c34c9cc3",
".git/objects/71/b6a50028867ab4282b42b253559b2e19ba2430": "285313c2eb403a01bbc857565e5456b0",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/33/cfc1dabda467310c2e459a04f386372629d4fa": "b147fb83e114f928b818ede68a3eff8e",
".git/objects/44/8a5a70dc77985b9acfe05ea70956efd29e5774": "1af380ee40e58c4140db82c795a9ae61",
".git/objects/e4/d374e10a6e636cc36de6fc5f5bc9d038367e36": "68ae95b3a5803ceec96e8123384180ba",
".git/objects/f6/e003512160e83fac5433718ab16279ec11df82": "f4f58b161b6ca95144fb320eaa7ac980",
".git/objects/7d/1f30079380b0a788c95ea9a4936329d27b35c1": "215f8e4c534112c9446c9e1ac29f0035",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/cb/0df4fffd7359a77380eae6e3d25e06a699116c": "dbba21d7c2e15e642aba049451089acf",
".git/objects/07/cf35eb38ab54c389806fd062934f76f66b78ed": "7568703346574a6871fce7a7a0fdc90e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/fc/b2c9f10d56677451c527774efc8d24ccb7924c": "0491c5086e452782230de102f7e53555",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0a/0c4776760570d4c3bac59f6d033db9bbea300e": "b38cde6002f2bf5513e88b90a422b67c",
".git/objects/18/40ac22dbd630bcda6bcac47ab010afce506b19": "0ff7c6bb6bdd4c0d9beecc3b18279aee",
".git/objects/4d/d679171e385b8afa987bc2b611fc8fad7c44f2": "0fe77c4d065db43c5892d6604083334a",
".git/objects/4d/3095f4d6a494d59ee8b195c3f45f94c3788623": "4dbb22bf4de1a122d872c18fa6563eb3",
".git/objects/d9/62cc03231d98211443ace4386bbafebd47079d": "b1117140de38b2f4fad5b57fcdd109e9",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/91/0686d0cb20d49d7ad7c6eaeaa70084b61c2969": "7c78c9b1b6034c558a16fe001889c789",
".git/objects/4e/3545aeb7e29d30f6e20c32a6945122ee8ef6e6": "548d030d72b3ff0d83059f4aa125c33a",
".git/objects/58/9c9eb21ff241ad81bff01ee314144ba927a2f5": "6d747d67b2c15d82aeb1b87b35c6619f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/9b10234bd2afed54c30218fdee4f9c3035b8e3": "590535c771dcd85880eef36931ad72a4",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/fa/802df27d2bc7767e050684d28d6e779a176f48": "228220e3c7247238764456b2df15b30e",
".git/objects/1c/bdb22460530617e6242d43aefa79bd23efe8cd": "1d7c032b303f466dced38e27e6ced5df",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/c1/9bf7a97a67f4ac4dff4362e95c79992e28e179": "b02ec4328edaa4627b5fefc7f5266de9",
".git/objects/ae/e65cadb9bac07bcaea043e9918de7a29c91177": "dd5d00a7515fb5688d9f5f1239970d50",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0d/80b3bc4c7962584078e4a25009494fec9d5216": "0a7c8379651ac22644f4430e02e9a492",
".git/objects/b1/389d28bc0c0f473212241453a376495d2a4a4f": "355a2e933ffa38054e545507dad34d26",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/d5/2b65f858f69985e09f0a3c9993fdd2c7f5cf1e": "c27b304cf8bacafc117042e317b78aae",
".git/objects/09/1146a5a383abca6cbab8cc891cd5bcf2726727": "c1ce1a0d1e2143aed2bf67a0b4c8c7f5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/refs/remotes/origin/main": "652a5df9747666f70bc26d2c15c861d0",
".git/refs/heads/main": "652a5df9747666f70bc26d2c15c861d0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/index": "884135b96d116426c2300c93329548b1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/refs/remotes/origin/main": "15a1e2675b31a226b833d979403d28df",
".git/logs/refs/heads/main": "07a36a386e124e7d942e7d65116b76e8",
".git/logs/HEAD": "a6bc44a52cf9d5d8499e83286a85ccef",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/config": "4d23b6d80403e9c5d5396a073fe124ec",
".git/COMMIT_EDITMSG": "11021ff3f4d27cfd5a78403d29ab9de7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
