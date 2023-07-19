import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore"


const app = firebase.initializeApp({
    apiKey: "AIzaSyB30HxYtDSg9Jphjztx28NeKNrajCkeOEU",
    authDomain: "truck-6d528.firebaseapp.com",
    projectId: "truck-6d528",
    storageBucket: "truck-6d528.appspot.com",
    messagingSenderId: "879304059137",
    appId: "1:879304059137:web:6a8305558050ce319c5300"
});

export const db = firebase.firestore();
export const auth = app.auth();
export default app;