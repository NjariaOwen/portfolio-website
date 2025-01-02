// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb65x0Bu40NFD_MQZGI4MLfNe2qFrIZQY",
  authDomain: "portfolio-25ef5.firebaseapp.com",
  projectId: "portfolio-25ef5",
  storageBucket: "portfolio-25ef5.firebasestorage.app",
  messagingSenderId: "101439818097",
  appId: "1:101439818097:web:d73d618af88fa58d554ed0",
  measurementId: "G-BB7QZE2S26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
