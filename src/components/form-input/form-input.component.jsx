import './form-input.styles.scss';

const FormInput = (props) => {
  
  const { label, ...otherProps } = props

  return (
    <div className="group">
      <input className='form-input' {...otherProps} />
      {label && (
        <label 
        className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} htmlFor="">
          {label}
        </label>
      )}
    </div>
  )
}

export default FormInput;