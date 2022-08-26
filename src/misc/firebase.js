import firebase from "firebase/app";
import 'firebase/auth' ;
import 'firebase/database' ;
import 'firebase/storage';


const config = {
    apiKey: "AIzaSyDrcFwZZaIcXO1k5hokDLbvY_rCCwHEslM",
    authDomain: "chit-chat-f52e3.firebaseapp.com",
    databaseURL: "https://chit-chat-f52e3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chit-chat-f52e3",
    storageBucket: "chit-chat-f52e3.appspot.com",
    messagingSenderId: "168131588611",
    appId: "1:168131588611:web:e498e8c734d7fd1f875436"
  };


const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
