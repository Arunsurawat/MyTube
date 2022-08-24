import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjA-fFml8SFTqe15qDSMO-_bAg5WcwAus",
  authDomain: "mytube-7b05a.firebaseapp.com",
  projectId: "mytube-7b05a",
  storageBucket: "mytube-7b05a.appspot.com",
  messagingSenderId: "960065584593",
  appId: "1:960065584593:web:9361c79a1f73f9370334f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
