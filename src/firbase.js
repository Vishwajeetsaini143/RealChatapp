// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCbs0bCCN6d98ZIbq_bkZ6b5e4b1KNF4fk",
  authDomain: "chatapp-ff76f.firebaseapp.com",
  projectId: "chatapp-ff76f",
  storageBucket: "chatapp-ff76f.appspot.com",
  messagingSenderId: "1008141233409",
  appId: "1:1008141233409:web:807c1bb91b6345dae87f00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();