/**
 * dQ2TiA_9nNF24c6BNEbzkm:APA91bFUqBGYbQ7QNUvvY7F1QnJJcAJbQ-HjwYv69VJrbBDF0yAMlfZjJ0cgx1A2FGRdqJjKASr_EqJvAV1tVt1Q9ND6aP6vL3am-huRmmR2hZmTiOnBB75oz8_b_zlSjmLoo0BjM3Ot
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
const KEY = "BBAItt65nHo9EJ8unNqiyxb_XRTjsYXNU_KSBSfoBNMCK1jtgIolLv4VG7yhn1borKVW1kRuhq7Hloc4D2vvAJo"

const firebaseConfig = {
    apiKey: "AIzaSyBipZHLfVIwwyDL2VhVnn6kyW4XBkj_ovM",
    authDomain: "sample-firebase-7b4ab.firebaseapp.com",
    projectId: "sample-firebase-7b4ab",
    storageBucket: "sample-firebase-7b4ab.appspot.com",
    messagingSenderId: "524609375044",
    appId: "1:524609375044:web:1ded7e97ea30efe6df2511",
    measurementId: "G-YTBQTTKKZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const messaging = getMessaging(app);


function requestPermission() {
    // console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            const messaging = getMessaging();
            getToken(messaging, { vapidKey: KEY }).then((currentToken) => {
              if (currentToken) {
                console.log("currentToken: ", currentToken)
              } else {
                console.log('No registration token available. Request permission to generate one.');
              }
            }).catch((err) => {
              console.log('An error occurred while retrieving token. ', err);
            });
        }
    })
}


requestPermission()