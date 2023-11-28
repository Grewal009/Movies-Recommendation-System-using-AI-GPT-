// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbtpGzr2ac8jeNVUx9rnRqDxyWRBJSV64",
  authDomain: "netflixgpt-3b50d.firebaseapp.com",
  projectId: "netflixgpt-3b50d",
  storageBucket: "netflixgpt-3b50d.appspot.com",
  messagingSenderId: "613147574676",
  appId: "1:613147574676:web:7335bdf75a72da0d538f81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
