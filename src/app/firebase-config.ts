// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHEETEtKhhZ79jibzL6wfFxUPnp73qhCo",
  authDomain: "angular-todo-c4f58.firebaseapp.com",
  projectId: "angular-todo-c4f58",
  storageBucket: "angular-todo-c4f58.appspot.com",
  messagingSenderId: "1012044732433",
  appId: "1:1012044732433:web:f4aae04377fc6ca03ff9b0",
  measurementId: "G-4E7FT4ZHGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);