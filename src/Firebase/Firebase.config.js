// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSP0gn3Ouwu7vGx7zuT1eL41JnOkwE1CU",
  authDomain: "autohub-brand-shop.firebaseapp.com",
  projectId: "autohub-brand-shop",
  storageBucket: "autohub-brand-shop.appspot.com",
  messagingSenderId: "83726956999",
  appId: "1:83726956999:web:e19202ce43c155b48381e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);