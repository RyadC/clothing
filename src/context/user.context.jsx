// REACT
import { createContext, useState } from "react";

// Il s'agit de notre stockage contenant la valeur actuelle dont nous voulons accéder
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});



export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
};
