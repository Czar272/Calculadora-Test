// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC8RMvWtTDYvPixV8RlDnblcKagnrRpJE",
  authDomain: "calculadoratest-1e935.firebaseapp.com",
  projectId: "calculadoratest-1e935",
  storageBucket: "calculadoratest-1e935.appspot.com",
  messagingSenderId: "749651421769",
  appId: "1:749651421769:web:c6b9125a4549671e49ad98",
  measurementId: "G-0V4NS09HQ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);