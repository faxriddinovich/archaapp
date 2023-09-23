import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADFyENy5rtiIYcLX8AwFwliAtcKYuXSTA",
  authDomain: "archa-app-6b963.firebaseapp.com",
  projectId: "archa-app-6b963",
  storageBucket: "archa-app-6b963.appspot.com",
  messagingSenderId: "188331511651",
  appId: "1:188331511651:web:7966c498ca0e927730cd56"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);