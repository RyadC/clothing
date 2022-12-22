// REACT
import { useState } from "react";

// FIREBASE
import { 
  createAuthUserWithEmailAndPassword, 
  createUserDocumentFromAuth, 
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup 
} from "../../utils/firebase/firebase.utils";

//STYLES
import "./sign-in-form.styles.scss"

// COMPONENTS
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {

  const [formsFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formsFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(response);
      resetFormFields();
    } catch (error) {
      console.log(error)
    }

    console.log(event)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name, event);

    setFormFields({...formsFields, [name]: value});
  };


  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Email"
          inputOptions = {{
            type: "email",
            required: 'true',
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
 
        <FormInput 
          label="Password"
          inputOptions = {{
            type: "password",
            required: 'true',
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>Google sign In</Button>
        </div>
      </form>
    </div>
  )
}

export default SignInForm;