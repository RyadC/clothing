// REACT
import { useState } from "react";

// FIREBASE
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

// COMPONENTS
import FormInput from "../form-input/form-input.component";


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
      const userDocRef = await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();

    } catch (error) {
      console.log(error.message)
    }
    

    console.log(event)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, event)
    setFormFields({...formsFields, [name]: value})  // Je dis que je set comme valeurs l'ensemble des valeurs de formsFields puis après la "," je dis que je veux juste que name par contre ne soit pas copié mais qu'il prenne plutôt la valeur ci après. On dit cela comme cela: [propriété]: valeur
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="Display Name"
          inputOptions = {{
            type: "text",
            required: 'true',
            onChange: handleChange,
            name: "displayName",
            value: displayName,
          }}
        />
 
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
 
        <FormInput 
          label="Confirm Password"
          inputOptions = {{
            type: "password",
            required: 'true',
            onChange: handleChange,
            name: "confirmPassword",
            value: confirmPassword,
          }}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;