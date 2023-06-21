// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnj2XJwtVCQfAH4D-NBi9hIvJM-upr-Wg",
  authDomain: "abc11-c110c.firebaseapp.com",
  databaseURL: "https://abc11-c110c-default-rtdb.firebaseio.com",
  projectId: "abc11-c110c",
  storageBucket: "abc11-c110c.appspot.com",
  messagingSenderId: "531092802662",
  appId: "1:531092802662:web:aa583b0983b2bffc0631a7",
  measurementId: "G-CWLN4FPE57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
 const database = getDatabase(app);
 export default database