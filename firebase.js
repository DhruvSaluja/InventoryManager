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
  apiKey: process.env.api_Key,
  authDomain: "inventory-management-76c35.firebaseapp.com",
  projectId: "inventory-management-76c35",
  storageBucket: "inventory-management-76c35.appspot.com",
  messagingSenderId:process.env.messaging_SenderId,
  appId:process.env.app_Id ,
  measurementId: "G-FHBTGJDCLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app)

export{firestore};
export {auth};