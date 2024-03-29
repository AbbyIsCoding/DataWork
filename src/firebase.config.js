// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB86b-xJy4l1hC9F5q1abGGP3okaIqAzVo",
  authDomain: "datawork-7e26e.firebaseapp.com",
  projectId: "datawork-7e26e",
  storageBucket: "datawork-7e26e.appspot.com",
  messagingSenderId: "568780268666",
  appId: "1:568780268666:web:ae0ec59f66c343c750c7c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app); 