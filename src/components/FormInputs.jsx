import React, { useState } from 'react'

const FormInputs = (props) => {
    const [focused, setFocused] = useState(false)
    const {label, emptyMessage, errorMessage, onChange, value, ...inputProps} = props

    const handleFocus = (e) => {
      setFocused(true)
    }

  return (
    <div className='formInput'>
        <label>{label}
            <input 
              {...inputProps} 
              value={value || ''} 
              onChange = {onChange} 
              onBlur={handleFocus}
              focused={focused.toString()}
            />
        </label>
            <span>{value == '' ? emptyMessage : errorMessage }</span>
    </div>
  )
}

export default FormInputs