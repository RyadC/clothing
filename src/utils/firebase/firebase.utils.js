// FIREBASE - Authentication
import { initializeApp } from 'firebase/app';
import { 
  GoogleAuthProvider,
  getAuth, signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// FIREBASE - Firestore (DB)
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Web app's Firebase configuration
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

// Initialize the provider for the authentication
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  const userExist = userSnapshot.exists();

  if(!userExist){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation, // Ecrase displayName si cet information optionnel est enregistrer par un displayName
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    };
  };

  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);