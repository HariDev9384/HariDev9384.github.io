'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "00e42c9938cc8bb359ca2c97af07cf1f",
"assets/AssetManifest.smcbin": "bbffb61e8725898bc6277a5387d80b83",
"assets/assets/dashboard/menu1.png": "a84426a856136c55253444c1412f3706",
"assets/assets/dashboard/menu2.png": "7460972c7293167cfb4d746526d10d44",
"assets/assets/dashboard/menu3.png": "41bf360aacdaf2d4c1b46a2bd3b89138",
"assets/assets/dashboard/menu4.png": "b90b3e041f5d95de051c1b73ff470775",
"assets/assets/dashboard/menu5.png": "67988d2767aa87a504ecfe6f306c9dbc",
"assets/assets/dashboard/menu6.png": "e782c4a385562495dcf9392c5804a909",
"assets/assets/icons/playstore.png": "c1f05ae361d70636ac6a5804652592dd",
"assets/assets/icons/vehicle/side_view/bike/green.png": "dbd073f476ad03cf05c5a795b7d0b9fe",
"assets/assets/icons/vehicle/side_view/bike/grey.png": "11ec95037fc27d2fc47478623704be32",
"assets/assets/icons/vehicle/side_view/bike/red.png": "e104c0916942f106c23b8bf053c76ab6",
"assets/assets/icons/vehicle/side_view/bike/yellow.png": "3afe2c4383f79356961178467facbd02",
"assets/assets/icons/vehicle/side_view/bus/green.png": "dc6282f5b2c56e22aaad1351d39b4123",
"assets/assets/icons/vehicle/side_view/bus/grey.png": "f82a257709e81213634931193b808dc1",
"assets/assets/icons/vehicle/side_view/bus/red.png": "cc142ad1f1bbe1f980687c71c022a59d",
"assets/assets/icons/vehicle/side_view/bus/yellow.png": "8ecd923df2abf4bfbcf89a3ba30f863a",
"assets/assets/icons/vehicle/side_view/car/green.png": "00db2af438c9794951ce27182d0f5e84",
"assets/assets/icons/vehicle/side_view/car/grey.png": "9017185cdfc36af4728cacbab1dbd89f",
"assets/assets/icons/vehicle/side_view/car/red.png": "51e2ca996c0ea8ccdca9e4f2a7bb89fb",
"assets/assets/icons/vehicle/side_view/car/yellow.png": "67167bdd9e5cb2525825b6e8360c5fc0",
"assets/assets/icons/vehicle/side_view/maxi_cab/green.png": "bdad694464cd910335624c12062bdf1c",
"assets/assets/icons/vehicle/side_view/maxi_cab/grey.png": "a9d0ccf8ab03db398fe7490b26cce283",
"assets/assets/icons/vehicle/side_view/maxi_cab/red.png": "42210d7bae9e3fbe5a2c79c936e715ba",
"assets/assets/icons/vehicle/side_view/maxi_cab/yellow.png": "49b1ed1f8828dc9d2c97afcfc3bb245f",
"assets/assets/icons/vehicle/side_view/tanker/green.png": "5e3d9b8d9305376c05d7d3474a8fcc1d",
"assets/assets/icons/vehicle/side_view/tanker/grey.png": "6b884f30283fe563c23310ed6b1a0ef8",
"assets/assets/icons/vehicle/side_view/tanker/red.png": "b62962702bcd691db90db154672bdceb",
"assets/assets/icons/vehicle/side_view/tanker/yellow.png": "14c3962ee9247d5f315f2f0c5b2e1694",
"assets/assets/icons/vehicle/side_view/truck/green.png": "e4f229c92e52ef1f9362290fa9cdd9ae",
"assets/assets/icons/vehicle/side_view/truck/grey.png": "535fa0745fe929d55b597967c1bc4c8c",
"assets/assets/icons/vehicle/side_view/truck/red.png": "2c1c77ca31ad089b4aabe6354ab37179",
"assets/assets/icons/vehicle/side_view/truck/yellow.png": "fa60816d0eac85907f498c2b9d134bee",
"assets/assets/images/analytics/ac.svg": "bf22644bb5efee34e5cbc3634b1d39f3",
"assets/assets/images/analytics/average.svg": "5bcdc74960a49e3a97b727c039d043c4",
"assets/assets/images/analytics/battery.svg": "e14925e4a142d3be7037b1a3025926f8",
"assets/assets/images/analytics/idling.svg": "a3144c53732129b13353d74a4807ddd6",
"assets/assets/images/analytics/moving%2520time.svg": "278eee4d6e3e7eb36952d99c58f2a550",
"assets/assets/images/analytics/obd.svg": "5edbe4b06cbda59b18df5d4d2f75369a",
"assets/assets/images/analytics/playback.svg": "7ea9b731589e1a87040f75abaa3302e1",
"assets/assets/images/analytics/speed.svg": "0195e7f23f2455da07f36b0c6e6cb635",
"assets/assets/images/analytics/stop.svg": "125fc473b2206ae311599ede92d5c834",
"assets/assets/images/analytics/today.svg": "8dd4a7fc47175ccc1c97dd8ba78b9524",
"assets/assets/images/analytics/voltage.svg": "872fd0edee4a03c1d0eb0c5e2a8044e7",
"assets/assets/images/curve.png": "d5b63e3c70ad83b88d3322445fb987d1",
"assets/assets/images/logo.png": "02b85a196934cacacf6d73d072387452",
"assets/assets/images/reports/ac.png": "94f810c0b2e5fb59d67f2233fa86b947",
"assets/assets/images/reports/engine.png": "5a0e820d4683625a49928221b4460be1",
"assets/assets/images/reports/idle.png": "bc8bc52da05c30772fdc78d9a18c66d5",
"assets/assets/images/reports/km.png": "0d97a7adac9e1c30f82d8c53891fe620",
"assets/assets/images/reports/moving.png": "ddd230f827dd1e60ae79b98dbce94b94",
"assets/assets/images/reports/parked.png": "836885e0f47ef0785dbb27d846b783e0",
"assets/assets/images/reports/stopped.png": "1e496dba9fb601d74a9af0a0277d0ad4",
"assets/assets/images/tripMonitor/red-pushpin.png": "ffcca42b11ff9dbc736f4a3696b61a56",
"assets/assets/images/web_marker.png": "2aaaa4ee573378becb4b1157d7372d93",
"assets/assets/images/zig_logo.png": "dcfcc98c0949886e2a964aa4d2ab5184",
"assets/assets/lotties/geofence.zip": "e0480099f807391b0d70d1b5f1699310",
"assets/assets/lotties/no_connection.zip": "8b524fdd107a14de453ac06bc16e29e8",
"assets/assets/lotties/splash.zip": "4b90bb35f9420743221ef2e1a8ca0d88",
"assets/assets/lotties/vehicle_moving.zip": "bdbc9fce620dc0f0a5be8b1b4a228890",
"assets/assets/markers/car.png": "4b7ab7735b98572c4af24bf78c225944",
"assets/assets/markers/common/a.png": "2b146bd72b47ee80bbf67167a45df73d",
"assets/assets/markers/common/b.png": "4b1116997620fe279277aa4fb2d09e21",
"assets/assets/markers/common/stop.png": "f3f9b22af9c966f0042048c2306d4a24",
"assets/assets/markers/top_view/bike/green.png": "cb3b36c0d2193613e709b7677d7bf53e",
"assets/assets/markers/top_view/bike/grey.png": "c8b5f7e26dcce2e669e49f2731f28199",
"assets/assets/markers/top_view/bike/red.png": "a6547ebab9478ada0769c13299819e24",
"assets/assets/markers/top_view/bike/yellow.png": "1030fde44f731b409b1b34b2ae95a557",
"assets/assets/markers/top_view/bus/green.png": "febf038395eee744990dc86d14d2e5f2",
"assets/assets/markers/top_view/bus/grey.png": "4c3e826ffd3b698d064e6dcd8ece96c5",
"assets/assets/markers/top_view/bus/red.png": "08c3969c841660e044361441feb50f93",
"assets/assets/markers/top_view/bus/yellow.png": "8345493d86dc9219d6cdfcce5a33e139",
"assets/assets/markers/top_view/car/green.png": "c87475da817525c996aaa8392622a964",
"assets/assets/markers/top_view/car/grey.png": "06046554a7a9daf721f47c2f9c4025bb",
"assets/assets/markers/top_view/car/red.png": "d2837a33b8821c47c1b4d3635315b2ae",
"assets/assets/markers/top_view/car/yellow.png": "c67030dae8f9eebe333c14c024354330",
"assets/assets/markers/top_view/maxi_cab/green.png": "fb261d9aa0c877993ac7647c458db2bd",
"assets/assets/markers/top_view/maxi_cab/grey.png": "bb681cf4f2f4d9b10ecf90f53d600244",
"assets/assets/markers/top_view/maxi_cab/red.png": "3946fc3b138b285f105f9f872c1612ca",
"assets/assets/markers/top_view/maxi_cab/yellow.png": "3576201857365561e664a8760f9dacbc",
"assets/assets/markers/top_view/tanker/green.png": "c4cd818bfaece56d2c11fd401fcad52b",
"assets/assets/markers/top_view/tanker/grey.png": "3930e10fd0552991617c8b0334edb690",
"assets/assets/markers/top_view/tanker/red.png": "79008fd5c1ee01ce3ad83a8c3d79ffe4",
"assets/assets/markers/top_view/tanker/yellow.png": "c8b377c7dc82093d62becb26d0fadd4b",
"assets/assets/markers/top_view/truck/green.png": "ba17202000dca0c1552b250ecbdc1fe5",
"assets/assets/markers/top_view/truck/grey.png": "4aac5e50fb6fe7e01bd7624593c5337e",
"assets/assets/markers/top_view/truck/red.png": "2279bdf98004ce9bdb0a6a13cecde141",
"assets/assets/markers/top_view/truck/yellow.png": "a81d06198988c7a6c9bcbaad9e5f41e8",
"assets/assets/obd/coolant.png": "289bac76762b42083bd42fa147f5fe96",
"assets/assets/obd/engine_load.png": "cdfa0a5537059623142919246ccca5a2",
"assets/assets/obd/engine_oil.png": "1e36bea472646ece5671d10587e411d4",
"assets/assets/obd/throttle.png": "ccb67f75248e4e789663d55f79b7a38a",
"assets/assets/svg/curve.svg": "16121ccc19acd267982e3fe325a1d71c",
"assets/assets/vehicles/Bike/Bike_Black.png": "33f736615976d7fb9fecf659fae737f7",
"assets/assets/vehicles/Bike/Bike_Green.png": "9c8836cc0ab1e3bd262c3faa974f8b92",
"assets/assets/vehicles/Bike/Bike_Red.png": "7287d84c2882799c72d95f2c24717caa",
"assets/assets/vehicles/Bike/Bike_Yellow.png": "cfee8a9d2bae10609f6fe7598b30973e",
"assets/assets/vehicles/Bus/Bus_Black.png": "4c3e826ffd3b698d064e6dcd8ece96c5",
"assets/assets/vehicles/Bus/Bus_Green.png": "febf038395eee744990dc86d14d2e5f2",
"assets/assets/vehicles/Bus/Bus_Red.png": "08c3969c841660e044361441feb50f93",
"assets/assets/vehicles/Bus/Bus_Yellow.png": "8345493d86dc9219d6cdfcce5a33e139",
"assets/assets/vehicles/Car/Car_Black.png": "06046554a7a9daf721f47c2f9c4025bb",
"assets/assets/vehicles/Car/Car_Green.png": "c87475da817525c996aaa8392622a964",
"assets/assets/vehicles/Car/Car_Red.png": "d2837a33b8821c47c1b4d3635315b2ae",
"assets/assets/vehicles/Car/Car_Yellow.png": "c67030dae8f9eebe333c14c024354330",
"assets/assets/vehicles/Maxi_Cab/Green%25202.png": "fb261d9aa0c877993ac7647c458db2bd",
"assets/assets/vehicles/Maxi_Cab/Green.png": "a2e500e5b143337ab1c5e438f38ed415",
"assets/assets/vehicles/Maxi_Cab/Grey%25202.png": "bb681cf4f2f4d9b10ecf90f53d600244",
"assets/assets/vehicles/Maxi_Cab/Grey.png": "cfb9fe631f701819e96746cfa4dc9e0f",
"assets/assets/vehicles/Maxi_Cab/Red%25202.png": "3946fc3b138b285f105f9f872c1612ca",
"assets/assets/vehicles/Maxi_Cab/Red.png": "3946fc3b138b285f105f9f872c1612ca",
"assets/assets/vehicles/Maxi_Cab/Yellow%25202.png": "3576201857365561e664a8760f9dacbc",
"assets/assets/vehicles/Maxi_Cab/Yellow.png": "cbfbc5bf6221582d0e25e378698daa3d",
"assets/assets/vehicles/Truck/Truck_Black.png": "4aac5e50fb6fe7e01bd7624593c5337e",
"assets/assets/vehicles/Truck/Truck_Green.png": "ba17202000dca0c1552b250ecbdc1fe5",
"assets/assets/vehicles/Truck/Truck_Red.png": "2279bdf98004ce9bdb0a6a13cecde141",
"assets/assets/vehicles/Truck/Truck_Yellow.png": "a81d06198988c7a6c9bcbaad9e5f41e8",
"assets/assets/web/markers/bike/green.png": "6edb10d4662f1bb837d1f8f61d068154",
"assets/assets/web/markers/bike/grey.png": "40a42ab306372857d0056d72c3a4ef54",
"assets/assets/web/markers/bike/red.png": "be46a4cc3e35f702ccf7d76d548bf6d2",
"assets/assets/web/markers/bike/yellow.png": "28406757b0de4ef6fc9de9fe53c69949",
"assets/assets/web/markers/bus/green.png": "ad8dea0eccf565f373afb5dee2805ad9",
"assets/assets/web/markers/bus/grey.png": "8a5078be6cafef9e8c973ebca3710c92",
"assets/assets/web/markers/bus/red.png": "5c575fbb2f1ab662b9d91bd054778e67",
"assets/assets/web/markers/bus/yellow.png": "65114899eb94bc790b33219831f96231",
"assets/assets/web/markers/car/green.png": "5c759e1a006ac6089cf68428706cd44f",
"assets/assets/web/markers/car/grey.png": "f58d2cff1f4533fd70452bd574caceb2",
"assets/assets/web/markers/car/red.png": "d47155b80aec1acdc342d5782b5b0f7a",
"assets/assets/web/markers/car/yellow.png": "50d5ed40a48ff9ca918528765dc6699c",
"assets/assets/web/markers/maxi_cab/green.png": "3ec41d3a74ccc497588a2b8f5312513b",
"assets/assets/web/markers/maxi_cab/grey.png": "cc982c25c4d1064157277e6855f8d973",
"assets/assets/web/markers/maxi_cab/red.png": "5a73db097cdccfab7bdf811d718042ec",
"assets/assets/web/markers/maxi_cab/yellow.png": "c4070b940d7ba7781c2b2436232129ea",
"assets/assets/web/markers/tanker/green.png": "5096bddb3b27c77679e1569dad22bb34",
"assets/assets/web/markers/tanker/grey.png": "120ce81778d6581b8c95377f2ca2e139",
"assets/assets/web/markers/tanker/red.png": "6232516eb197fbcbdbbd8829ba92c70e",
"assets/assets/web/markers/tanker/yellow.png": "fc7e7c50e32f0b47d19b990c75697036",
"assets/assets/web/markers/truck/green.png": "402f809c98f8d4974c1223f9851ca4cb",
"assets/assets/web/markers/truck/grey.png": "3da724d5813fb3a3acefc8080526c4ff",
"assets/assets/web/markers/truck/red.png": "a4155d4694fc6ebaacb39b4bf0ddf840",
"assets/assets/web/markers/truck/yellow.png": "5677fd8555ae1f483a3e3a10c323e521",
"assets/FontManifest.json": "410a79594dcf7baf5f35e5029a2c9f88",
"assets/fonts/DigitalDisplayRegular-ODEO.ttf": "262d50c5b23b671757d16b3718f7572b",
"assets/fonts/MaterialIcons-Regular.otf": "0e009b0594265088f7863e0f0e9c6411",
"assets/fonts/OpenSans-Bold.ttf": "8ff9b5735ccb338267f0034d83fe8214",
"assets/fonts/OpenSans-Regular.ttf": "22ab03a6b890f2f142a137a38bf1d4ae",
"assets/NOTICES": "0de90c356321ad98842ebecc787a847c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "69b64e3a5041498dfb76e3d4634ac79b",
"firebase-messaging-sw.js": "adef402d8315263b5b91c09884884af1",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "b5ff603aad92716b8761e87139e07b59",
"icons/Icon-512.png": "0baabd1f557ac0b08407f7e2345f60c7",
"icons/Icon-maskable-192.png": "cbef2857abf3109a86cf4577785312a2",
"icons/Icon-maskable-512.png": "f6a1dd8738327dafe9e0411ed65ec6d6",
"index.html": "14ac1e31b280570516eab01d7cfcc115",
"/": "14ac1e31b280570516eab01d7cfcc115",
"main.dart.js": "9bb4c4bdb93fd7be2e28e91bd842f2b8",
"manifest.json": "7796427af97b43059a3e14be9ed2d037",
"version.json": "442c42391ef5b3115b57ca862e957e29"};
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
