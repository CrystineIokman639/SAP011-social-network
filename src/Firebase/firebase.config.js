// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh62MQTgzQD5tQuQ5JmCEY-MtFaYc3jWU",
  authDomain: "booknook-deb87.firebaseapp.com",
  projectId: "booknook-deb87",
  storageBucket: "booknook-deb87.appspot.com",
  messagingSenderId: "458461086587",
  appId: "1:458461086587:web:cd1ee96414be7ace2ff3de",
  measurementId: "G-TX0TXHJD65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const db = getFirestore(app);
export const dbUsers = collection(db, "users");
export const dbPosts = collection(db, "posts");

export {auth, app}