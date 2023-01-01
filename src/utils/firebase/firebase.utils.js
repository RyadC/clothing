// FIREBASE - Authentication
import { initializeApp } from 'firebase/app';
import { 
  GoogleAuthProvider,
  getAuth, signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// FIREBASE - Firestore (DB)
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,
  collection,
  writeBatch,
} from 'firebase/firestore';

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

// collectionKey = le nom de la collection
// objectsToAdd = le document regroupant les items à transmettre
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  
  // collection retourne la référence du document (le crée s'il n'existe pas)
  // db = la BDD, la collection sera donc créée à la racine
  // collectionKey = le nom de la collection à créer
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  // On boucle notre objet pour créer un document par objet (chaussures, vestes, etc.)
  objectsToAdd.forEach(object => {
    // collectionRef = nom de la collection où le document doit être crée (doit être inséré)
    // 
    const docRef = doc(collectionRef, object.title.toLowerCase());

    // Une fois le document crée dans sa collection, on transfère les données 
    // docRef = la référence du document càd son emplacement dans la BDD
    // object = l'object à y transférer
    batch.set(docRef, object);
  });

  // On attend que le travail soit terminé pour l'ensemble des objets
  await batch.commit();
  console.log('done');
};

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

export const onAuthStateChangedLsitener = (user) => onAuthStateChanged(auth, user)