importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyBASSAnPYpHq8eozQ-_i2fEjTAoxAtrTW8",
    authDomain: "zig-zig_gps_telematics.firebaseapp.com",
    projectId: "zig-zig_gps_telematics",
    storageBucket: "zig-zig_gps_telematics.appspot.com",
    messagingSenderId: "828803516336",
    appId: "1:828803516336:web:0d4c93db563da84bf5f875",
    measurementId: "G-P2E2BTJVRY"
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