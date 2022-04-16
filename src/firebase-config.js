// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// api keys for firebase services are not secret https://firebase.google.com/support/guides/security-checklist

const firebaseConfig = {
    apiKey: "AIzaSyBMnJ6yF-qXNlryAgarmPwLUYd-GnbgtvA",
    authDomain: "revision-firebase-924e5.firebaseapp.com",
    projectId: "revision-firebase-924e5",
    storageBucket: "revision-firebase-924e5.appspot.com",
    messagingSenderId: "835336595297",
    appId: "1:835336595297:web:53875a14e859f26f580720",
    measurementId: "G-VH0MH8G1TC"
  };

    // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);