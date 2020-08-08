let version = 'v4';
let cacheName = 'bmi-cache';
let filesToCache = [
	'/index.html',
	'/src.a2b27638.css',
	'/src.a2b27638.js',
  '/logo.d8ae4b8a.png'  
];

self.addEventListener('install', (event)=>{
  self.skipWaiting();
  event.waitUntil(
  		caches.open(cacheName+'/'+version)
  		.then((cache)=>{
  			return cache.addAll(filesToCache);
  		})
  	);
});

self.addEventListener('fetch', (event)=>{
  console.log('fetching... '+event.request.url);
  event.respondWith(
    fetch(event.request)
    .catch(()=>{
      return caches.match(event.request);
    })
  );
});