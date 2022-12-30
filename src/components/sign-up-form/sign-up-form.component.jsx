// REACT
import { useState } from "react";

// FIREBASE
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

//STYLES
import "./sign-up-form.styles.scss"

// COMPONENTS
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};


const SignUpForm = () => {

  const [formsFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formsFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const displayName = event.target[0].defaultValue;
    const email = event.target[1].defaultValue;
    const password = event.target[2].defaultValue;
    const confirmPassword = event.target[3].defaultValue;

    if(password !== confirmPassword){
      console.log('error password')
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, {displayName});

      resetFormFields();

    } catch (error) {
      console.log(error.message)
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
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          inputOptions = {{
            type: "text",
            required: true,
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />
 
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
 
        <FormInput 
          label="Confirm Password"
          inputOptions = {{
            type: "password",
            required: true,
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
};

export default SignUpForm;