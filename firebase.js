// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-yNIygKvJvSD9sERHp13fxB4ItZ3Kta0",
  authDomain: "inventory-management-76c35.firebaseapp.com",
  projectId: "inventory-management-76c35",
  storageBucket: "inventory-management-76c35.appspot.com",
  messagingSenderId: "865716784614",
  appId: "1:865716784614:web:6e60444d66dadf81211a27",
  measurementId: "G-FHBTGJDCLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app)

export{firestore};
export {auth};