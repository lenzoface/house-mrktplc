// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC892wGSi-jtRVj_TfBz4WuQ6sqoT_zoJ0",
  authDomain: "house-mrktplce-skhan.firebaseapp.com",
  projectId: "house-mrktplce-skhan",
  storageBucket: "house-mrktplce-skhan.appspot.com",
  messagingSenderId: "885617830848",
  appId: "1:885617830848:web:2ffc51051272403c74b625",
  measurementId: "G-VWKDXZPMDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()