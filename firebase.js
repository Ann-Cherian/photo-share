// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPSJNk0llnoOklqs2YzUEVso7CORiA4ao",
  authDomain: "insta-2-7fdb2.firebaseapp.com",
  projectId: "insta-2-7fdb2",
  storageBucket: "insta-2-7fdb2.appspot.com",
  messagingSenderId: "14450395991",
  appId: "1:14450395991:web:e860f782fa1cabba30cc12"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };