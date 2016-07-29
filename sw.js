self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('mysite-static-v4').then(function(cache) {
            return cache.addAll([
                'https://img1a.flixcart.com/www/linchpin/batman-returns/home.8cc733aea45.bundle.js'
            ]);
        })
    );
});
