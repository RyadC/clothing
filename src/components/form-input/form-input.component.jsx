//STYLES
import {
  FormInputLabelStyled,
  FormInputStyled,
  GroupStyled,
} from './form-input.styles.jsx';


const FormInput = (props) => {

  const { label, inputOptions } = props

  return (
    <GroupStyled>
      <FormInputStyled {...inputOptions} />
      {
        label && 
          ( <FormInputLabelStyled shrink={inputOptions.value.length} htmlFor="">
            {label}
          </FormInputLabelStyled>)
      }
    </GroupStyled>
  )
}

export default FormInput;