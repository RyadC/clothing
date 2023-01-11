// REACT
import { useState } from "react";

// FIREBASE
import { 
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup 
} from "../../utils/firebase/firebase.utils";

// STYLED COMPONENT
import {
  TitleSignInFormStyled,
  SignInContainerStyled,
  ButtonsContainer,
} from "./sign-in-form.styles.jsx"

// COMPONENTS
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

// DATAS
import { BUTTON_TYPE_CLASSES } from "../button/button.component";


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
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();

    } catch (error) {

      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')          
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email')          
          break;
          default:
            console.log(error);
      };
    };

    console.log(event)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name, event);

    setFormFields({...formsFields, [name]: value});
  };


  return (
    <SignInContainerStyled>
      <TitleSignInFormStyled>Already have an account?</TitleSignInFormStyled>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Email"
          inputOptions = {{
            type: "email",
            required: true,
            onChange: handleChange,
            name: "email",
            value: email,
          }}
        />
 
        <FormInput 
          label="Password"
          inputOptions = {{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "password",
            value: password,
          }}
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign In</Button>
        </ButtonsContainer>
      </form>
    </SignInContainerStyled>
  )
};

export default SignInForm;