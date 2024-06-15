import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "unichat-3858f.firebaseapp.com",
  projectId: "unichat-3858f",
  storageBucket: "unichat-3858f.appspot.com",
  messagingSenderId: "1012884643875",
  appId: "1:1012884643875:web:b156a05c4f8a4151ac9196"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();