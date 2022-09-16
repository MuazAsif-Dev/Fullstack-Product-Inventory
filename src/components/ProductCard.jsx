import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ProductCard = (props) => {
    const {sku, name, price, id, onChange, ...inputProps} = props

    const [productAttr,setProductAttr] = useState({})

    useEffect(()=>
    {
        setProductAttr({
            "dvd": 
            <>
            <p>Size: {inputProps.size || ""} MB</p>
            </>,
            "book": 
            <>
            <p>Weight: {inputProps.weight || ""} KG</p>
            </>,            
            "furniture":
            <>
            <p>Dimensions: 
                {inputProps.height || ""}x
                {inputProps.width || ""}x
                {inputProps.length || ""}
            </p>
            </>

        })        
    },[])
    
  return (
    <div className="card">
        <input type="checkbox" className='delete-checkbox' id={id} onChange={onChange}></input>
        <div className="content">
            <p>{sku}</p>
            <p>{name}</p>
            <p>{price} $</p>
            <>{productAttr[inputProps.type]}</>
        </div>
    </div>
  )
}

export default ProductCard