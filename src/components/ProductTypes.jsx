import React from 'react'
import { useEffect } from 'react'
import ProductForm from './ProductForm'

const ProductTypes = (props) => {
  
  const invalidmessage = 'Please, submit required data'
  
  // A object of all Products with its custom arguments to the <ProductForm />
  const Products = {
    "DVD":    
      <ProductForm 
        label={"Size (MB)"}
        id={'size'}
        value={props.values['size'] || ''} 
        onChange={props.onChange}
        invalidmessage={invalidmessage} 
        desc={"Please, provide size (in MB)"}
        min=".01"
        step=".01"
      />,
    "Book":   
      <ProductForm 
        label={"Weight (KG)"}
        id={'weight'}
        value={props.values['weight'] || ''} 
        onChange={props.onChange}
        invalidmessage={invalidmessage} 
        desc={"Please, provide weight (in KG)"}
        min=".01"
        step=".01"
      />,
    "Furniture": 
    <>
      <ProductForm 
        label={"Height (CM)"}
        id={'height'}
        value={props.values['height'] || ''} 
        onChange={props.onChange}
        invalidmessage={invalidmessage}
        min=".01" 
        step=".01"
      />
      <ProductForm 
        label={"Width (CM)"}
        id={'width'}
        value={props.values['width'] || ''} 
        onChange={props.onChange}
        invalidmessage={invalidmessage}
        min=".01"
        step=".01"
      />
      <ProductForm 
        label={"Length (CM)"}
        id={'length'}
        value={props.values['length'] || ''} 
        onChange={props.onChange}
        invalidmessage={invalidmessage}
        min=".01"
        step=".01"
        desc={"Please, provide dimensions (in HxWxL format)"}
      />
    </>
  }

  // useEffect Hook used to set the ProductList value in the Parent <AddProduct> component
  // Called only once
  useEffect(() => {
    props.setProductList([
      ...Object.keys(Products)
    ])
  }, [])

  // useEffect Hook used to check which product type is selected to clear all others fields of data
  useEffect(() =>{
    Object.keys(props.values).forEach((elem) => {
      if(!(['sku','price','name'].includes(elem)))
      {
        props.values[elem] = ""
      }
    })    
  }, [props.selection])


  return (
    <div className='CurrentProduct'>
        {Products[props.selection]}
    </div>
  )
}

export default ProductTypes