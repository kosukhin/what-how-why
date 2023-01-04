self.addEventListener('install', (e) => {
    self.skipWaiting();
    console.log('Воркер установлен');
});

self.addEventListener('active', (e) => {
    console.log('воркер активирован');
})
