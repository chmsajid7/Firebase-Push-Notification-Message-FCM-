importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

 firebase.initializeApp({
    apiKey: "<YourApiKey>",
    authDomain: "<Your_authDomain>",
    projectId: "<Your_projectId>",
    storageBucket: "<Your_storageBucket>",
    messagingSenderId: "<Your_messagingSenderId>",
    appId: "<Your_appId>",
    measurementId: "<Your_measurementId>"
  });

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
});