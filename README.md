# Firebase-Push-Notification-Message-FCM-
How to send Firebase Push Notifications / Messages in Web App, using javascript &amp; postman. Or get an access token to use in API.

1. Download and Install Xampp
2. create new folder named "app1" in "C:\xampp\htdocs"
3. in this folder(app1), create a an html file named "index.html" and paste the code below;

*****************************************************************************************************************
=>index.html, create new project in "console.firebase.google.com" and go to project settings, 
  and get firebaseConfig from there to rewrite in code, also get vapidKey as Key pair from cloud messaging tab in firebase console.

<!DOCTYPE html>
<html>
<head></head>
<body>
<h1><center>Hi</center></<h1>

<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js"></script>

<script>
  var firebaseConfig = {
    apiKey: "<YourApiKey>",
    authDomain: "<authDomain>",
    projectId: "<projectId>",
    storageBucket: "<storageBucket>",
    messagingSenderId: "<messagingSenderId>",
    appId: "<appId>",
    measurementId: "<measurementId>"
  };
  firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.getToken({vapidKey: "<YourVapidKey>"});

messaging.getToken({ vapidKey: '<YourVapidKey>' }).then((currentToken) => {
  if (currentToken) {
	console.log('current token =', currentToken)
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});


messaging.onTokenRefresh(() => {
messaging.getToken().then((refreshedToken) => {
	console.log('Token Refreshed', refreshedToken);
}).catch((err) => {
  console.log('unable to retrive fresh token. ', err);
});
});
</script>

</body>
</html>

*****************************************************************************************************************
4. In "C:\xampp\htdocs" create a javascript file named "firebase-messaging-sw", and paste the code below, change firebaseConfig as above.

importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

 firebase.initializeApp({
    apiKey: "<YourApiKey>",
    authDomain: "<authDomain>",
    projectId: "<projectId>",
    storageBucket: "<storageBucket>",
    messagingSenderId: "<messagingSenderId>",
    appId: "<appId>",
    measurementId: "<measurementId>"
  });

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
});

*****************************************************************************************************************
5. start xampp, in browser run "http://localhost/app1/", and right click and click inspect, now go to console and get the token.
*****************************************************************************************************************
6. in postman create a post request and write url:"https://fcm.googleapis.com/fcm/send",
   in postman's headers write;

	Content-Type		application/json
	Authorization		key=<YourKey>
	
   get this key from cloud messaging written as "Server key".

*****************************************************************************************************************
7. in postman's body write as below, whereas in "to" write the token that you got from browser's console;

{
    "to":"<YourToken>",
    "notification":
    {
        "body":"Hi Baby",
        "title":"Hey Notification",
        "icon": "https://www.dynagroseed.com/app/uploads/2018/02/testing-clipart-quiet-testing-sign-v0ryt0-297x300.jpg"
    }
}
*****************************************************************************************************************

watch videos on youtube for more understanding.
