// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBum6herAK0sjYKl-W3CRGod7GNYhwJFLo",
  authDomain: "inventory-management-c0ade.firebaseapp.com",
  projectId: "inventory-management-c0ade",
  storageBucket: "inventory-management-c0ade.appspot.com",
  messagingSenderId: "167808213883",
  appId: "1:167808213883:web:2f87af0f86f09c600253de",
  measurementId: "G-X8ZJM10SC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}