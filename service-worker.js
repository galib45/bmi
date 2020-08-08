var version = 'v4';
var cacheName = 'bmi-cache';
var filesToCache = [
	'/bmi/',
  '/bmi/index.html',
	'/bmi/src.a2b27638.css',
	'/bmi/src.a2b27638.js',
  '/bmi/logo.d8ae4b8a.png'  
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