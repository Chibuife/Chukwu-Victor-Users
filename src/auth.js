// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth,
  onAuthStateChanged
} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDAYt-NJMuSoPZv6zO4chrC6raTANqsOKo",
  authDomain: "my-user-details-102a6.firebaseapp.com",
  projectId: "my-user-details-102a6",
  storageBucket: "my-user-details-102a6.appspot.com",
  messagingSenderId: "420122171101",
  appId: "1:420122171101:web:7d4c1bc24c4f58e0c26d34",
  measurementId: "G-NFY65G57J5"
};

const firebaseapp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseapp)
