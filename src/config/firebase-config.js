// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyActOGv9cNqYLHn1ec2D9FWemmToeVOlSs",
  authDomain: "kcal-tracker-879da.firebaseapp.com",
  projectId: "kcal-tracker-879da",
  storageBucket: "kcal-tracker-879da.appspot.com",
  messagingSenderId: "744193439677",
  appId: "1:744193439677:web:461c9a20fab0e851d504d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
