import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


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
        <label htmlFor="">Display Name</label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

        <label htmlFor="">Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email} />

        <label htmlFor="">Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password} />

        <label htmlFor="">Confirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;