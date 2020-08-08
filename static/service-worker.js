var version = 'v5';
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
  var url = event.request.url;
  console.log('fetching... ' + url);
  if(url.search(/\/bmi\//)==-1) {
    var lastSlash = url.lastIndexOf('/')
    url = url.subString(0, lastSlash) + '/bmi' + url.subString(lastSlash, url.length-1);
    console.log(url);
  }
  event.respondWith(
    fetch(url)
    .catch(()=>{
      return caches.match(url);
    })
  );
});