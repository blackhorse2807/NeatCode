import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2XesRkqbAzcas7ZXKpykQDaHX-CJWBbE",
  authDomain: "neatcode-e3b93.firebaseapp.com",
  projectId: "neatcode-e3b93",
  storageBucket: "neatcode-e3b93.appspot.com",
  messagingSenderId: "790045915591",
  appId: "1:790045915591:web:6175ec0576ccb19d0f81e2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);
export {auth, firestore, app}