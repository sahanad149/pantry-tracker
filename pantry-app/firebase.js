// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLl7C8fi-UhRNnTv2U6-9xmASdhEp-jXw",
  authDomain: "pantryapp-01.firebaseapp.com",
  projectId: "pantryapp-01",
  storageBucket: "pantryapp-01.appspot.com",
  messagingSenderId: "1023013431323",
  appId: "1:1023013431323:web:9cb3911b34f046910330be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { app, firestore }