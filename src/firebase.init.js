// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDupxKA86YqMB3sG4_Fuxf749KEtMrz5Uw",
  authDomain: "preview-sports-photography.firebaseapp.com",
  projectId: "preview-sports-photography",
  storageBucket: "preview-sports-photography.appspot.com",
  messagingSenderId: "148837514178",
  appId: "1:148837514178:web:92413e3c4dce95e055345b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
