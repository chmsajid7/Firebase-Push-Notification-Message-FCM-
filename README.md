# Firebase-Push-Notification-Message-FCM-
How to send Firebase Push Notifications / Messages in Web App, using javascript &amp; postman. Or get an access token to use in API.

1. Download and Install Xampp

2. create new folder named "app1" in "C:\xampp\htdocs"

3. in this folder(app1), paste this html file named "index.html"
   =>for "index" file, create new project in "console.firebase.google.com" and go to project settings, 
   and get firebaseConfig from there to rewrite in this file's code, also get vapidKey as Key pair from cloud messaging tab in firebase console.

4. In "C:\xampp\htdocs" paste this javascript file named "firebase-messaging-sw"
   =>change firebaseConfig as you did in "index" file.

5. start xampp, in browser run "http://localhost/app1/", and right click and click inspect, now go to console and get the token.

6. in postman create a post request and write url:"https://fcm.googleapis.com/fcm/send",
   in postman's headers write;

	Content-Type		application/json
	Authorization		key=<YourKey>
	
   =>get this key from cloud messaging tab in firebase console, written as "Server key".

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
