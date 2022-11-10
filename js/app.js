// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPGHyx4F3nsRe8W_5PGUFcTnJQBQa8q-8",
  authDomain: "hcjs-c6587.firebaseapp.com",
  projectId: "hcjs-c6587",
  storageBucket: "hcjs-c6587.appspot.com",
  messagingSenderId: "1025547222768",
  appId: "1:1025547222768:web:c2fe698697562225a60c35",
  measurementId: "G-R46QXBE5JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);