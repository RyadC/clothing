import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";


const SignIn = () => {

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>
        Click to sign in with google
      </button>
    </div>
  )
}

export default SignIn;