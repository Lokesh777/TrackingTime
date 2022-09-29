// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW96TnjCoyT9RUopOO7atldRHviRbdEHI",
  authDomain: "authfirebase-f5a39.firebaseapp.com",
  projectId: "authfirebase-f5a39",
  storageBucket: "authfirebase-f5a39.appspot.com",
  messagingSenderId: "1088509121283",
  appId: "1:1088509121283:web:e6cba0659b609a97814f36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//this auth is very helpfull to manage the user authentication process.
export { auth };
