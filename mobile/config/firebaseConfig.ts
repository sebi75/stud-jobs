import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2QKpQozc2an4u9aDwBHg1MZr9hLCn7X8",
  authDomain: "polihack-7d48b.firebaseapp.com",
  projectId: "polihack-7d48b",
  storageBucket: "polihack-7d48b.appspot.com",
  messagingSenderId: "497986176689",
  appId: "1:497986176689:web:1d780fee419426c96b8490",
  measurementId: "G-3L1DCQFGNZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
