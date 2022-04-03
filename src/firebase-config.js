// Firebase v9 부터 Syntax가 아래와 같이 달라짐
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore Database (not realtime database)
import { getAuth } from 'firebase/auth';

// (recommended to be saved this apiKey into dot.env file for confidential issue)
const firebaseConfig = {
  apiKey: "AIzaSyBtkC8XJLekqhiw19DhpXS_Uy946dO2bQA",
  authDomain: "reactpwadisneyclone.firebaseapp.com",
  projectId: "reactpwadisneyclone",
  storageBucket: "reactpwadisneyclone.appspot.com",
  messagingSenderId: "112472078756",
  appId: "1:112472078756:web:d7a28b330224052259e931",
};

const app = initializeApp(firebaseConfig);  // 1. get ref firebase connecting
export const auth = getAuth(app);           // 2. get ref firebase auth
export const db = getFirestore(app);        // 3. get ref of firestore database
