self.addEventListener('install', (e) => {
    self.skipWaiting();
    console.log('Воркер установлен 2');
});

self.addEventListener('active', (e) => {
    console.log('воркер активирован');
})
