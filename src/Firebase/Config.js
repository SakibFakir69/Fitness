


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

let META = import.meta.env;
const firebaseConfig = {
  apiKey: META.
  VITE_API_KEY ,

  authDomain:META.VITE_AUTH_DOMAIN,
  projectId: META.VITE_PROJECT_ID ,

  storageBucket: META.VITE_STROAGE_BUCKET,
  messagingSenderId: META.VITE_MESSAGING_SENDER_ID,
  appId:META.VITE_APP_ID
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth  = getAuth(app);
export default Auth;
