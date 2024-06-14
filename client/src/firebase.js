// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY ,
  authDomain: "merb-estate.firebaseapp.com",
  projectId: "merb-estate",
  storageBucket: "merb-estate.appspot.com",
  messagingSenderId: "687895639506",
  appId: "1:687895639506:web:f460b0e61635669965c40b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);