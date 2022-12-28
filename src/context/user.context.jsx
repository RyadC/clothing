// REACT
import { createContext, useEffect, useState } from "react";

// FIREBASE
import {
  onAuthStateChangedLsitener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";


// Il s'agit de notre stockage contenant la valeur actuelle dont nous voulons accéder
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});



export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }


  useEffect(() => {
    const unsubscribe = onAuthStateChangedLsitener((user) => {
      console.log(user)
      if(user) {
        // Cette fonction ne créé le user document que si celui-ci n'existe pas dans la BDD (voir corps de fonction)
        createUserDocumentFromAuth(user);
      };

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
