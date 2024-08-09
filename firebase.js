// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
import apiKey from "./config.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: apiKey.api_Key,
  authDomain: "inventory-management-76c35.firebaseapp.com",
  projectId: "inventory-management-76c35",
  storageBucket: "inventory-management-76c35.appspot.com",
  messagingSenderId:apiKey.messaging_SenderId,
  appId:apiKey.app_Id ,
  measurementId: "G-FHBTGJDCLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app)

export{firestore};
export {auth};