import React from 'react'

const ProductForm = (props) => {
  return (
    <>
        <label>{props.label}
          <input 
            {...props}
            required
            type={props.type || "number"}
            onInvalid={e => e.target.setCustomValidity(props.invalidmessage)}
            onInput={e => e.target.setCustomValidity('')}
          />
        </label>
        {props.desc && <p>{props.desc}</p>}        
    </>
  )
}

export default ProductForm