// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpFp0f6SUVMXXmwqaY6sZOzNy5Se44djc",
  authDomain: "momentum-72d10.firebaseapp.com",
  projectId: "momentum-72d10",
  storageBucket: "momentum-72d10.appspot.com",
  messagingSenderId: "202281562238",
  appId: "1:202281562238:web:f0ab78c576fea3e669282f",
  measurementId: "G-G2PP4ZBCTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);