import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCEPpJUGQ0DDfV43xYOz1bd0pT5LM8TeA",
  authDomain: "crwn-project-599d8.firebaseapp.com",
  projectId: "crwn-project-599d8",
  storageBucket: "crwn-project-599d8.appspot.com",
  messagingSenderId: "151430837264",
  appId: "1:151430837264:web:6cf5a638bad1f8d8584695"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
