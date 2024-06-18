self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('todo-cache').then(function(cache){
          return cavche.addAll([
            '/',
            '/index.html',
            '/css.css',
            '/app.js',
            '/manifest.json'
          ]);
        })
    );
});
self.addEventListener('fetch',function(event){
    event.responWith(
        caches.match (event.requess). them(function(response){
            return response || fetch(event.request);
        })
    );
});


        