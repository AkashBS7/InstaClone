import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTTTMXsIX8LWPx67vs7Tye5mduZ1sqe9g",
    authDomain: "instakilogram-20ac4.firebaseapp.com",
    projectId: "instakilogram-20ac4",
    storageBucket: "instakilogram-20ac4.appspot.com",
    messagingSenderId: "954902779646",
    appId: "1:954902779646:web:a8cbe832cf5b58b7b977af"
  };

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;


export { firebase, FieldValue};