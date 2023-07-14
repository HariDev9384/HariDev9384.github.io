importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyDOMATyxTyZS5rbAhUzSD8XzDG2IrF0p18",
    authDomain: "playback-5de06.firebaseapp.com",
    projectId: "playback-5de06",
    storageBucket: "playback-5de06.appspot.com",
    messagingSenderId: "25911682037",
    appId: "1:25911682037:web:1645e27bcf29c0c5b836bc",
    measurementId: "G-K52YXFJ49M"
  });
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("New Message");
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});