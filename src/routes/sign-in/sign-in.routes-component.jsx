import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGoogleRedirect  } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
  useEffect(() => {
    async function getResponseRedirect(){
      const responseRedirect = await getRedirectResult(auth);
      if(responseRedirect){
        const userDocRef = await createUserDocumentFromAuth(responseRedirect.user);
      }
    }
    getResponseRedirect();
  }, []);

  const logGoogleUserWithPopup = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  const logGoogleUserWithRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  };



  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUserWithPopup}>Click to sign in with google</button>
      <button onClick={signInWithGoogleRedirect}>Click to sign in with google redirect</button>
    </div>
  )
}

export default SignIn;