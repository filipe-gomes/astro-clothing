import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyArBr8UkOyQLo-5EbhSi0DyL1nXMMYHCSA",
    authDomain: "astro-clothing.firebaseapp.com",
    databaseURL: "https://astro-clothing.firebaseio.com",
    projectId: "astro-clothing",
    storageBucket: "astro-clothing.appspot.com",
    messagingSenderId: "8181888862",
    appId: "1:8181888862:web:5bfa44a9a5f9de55dc01cf",
    measurementId: "G-SWRV6LX3S6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;