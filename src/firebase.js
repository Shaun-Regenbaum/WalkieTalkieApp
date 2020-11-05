import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBuNsyIBWwTsDl94MZ6HzidVgBQ-mPw-j0",
    authDomain: "voice-messaging-1c063.firebaseapp.com",
    databaseURL: "https://voice-messaging-1c063.firebaseio.com",
    projectId: "voice-messaging-1c063",
    storageBucket: "voice-messaging-1c063.appspot.com",
    messagingSenderId: "131855872957",
    appId: "1:131855872957:web:990bfce493976ec79158d4",
    measurementId: "G-D02RRG4VWM"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();