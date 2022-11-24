// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPSI0Hnn7is4KCiDbkduJFyJ01JlE7wRM",
  authDomain: "phone-bazaar-client.firebaseapp.com",
  projectId: "phone-bazaar-client",
  storageBucket: "phone-bazaar-client.appspot.com",
  messagingSenderId: "47370145876",
  appId: "1:47370145876:web:7c3f8c4087b43f9574ddc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app ;