// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqwgEGDNyAmIAtOuzPV7DsWgdEIRCNjhk",
  authDomain: "assignment-9-auth-1557b.firebaseapp.com",
  projectId: "assignment-9-auth-1557b",
  storageBucket: "assignment-9-auth-1557b.firebasestorage.app",
  messagingSenderId: "151770365300",
  appId: "1:151770365300:web:146ba3957c43366091c021"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);