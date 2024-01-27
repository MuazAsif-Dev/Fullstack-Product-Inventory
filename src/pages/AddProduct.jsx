import axios from 'axios'
import React from 'react'
import { useState , useEffect } from 'react'
import {Link} from 'react-router-dom'
import FormInputs from '../components/FormInputs'
import ProductTypes from '../components/ProductTypes'
import { inputs } from '../data/forminputs'

const AddProduct = () => {
  
  // All values object
  const [values,setValues] = useState({})
  // Fetch list of products from child component 
  const [ProductList, setProductList] = useState([])
  const [validSKU, setValidSKU] = useState(true)
  const [selection, setSelection] = useState("")
  
  // useEffect to update the object of states to include the inputs  
  useEffect(() => {
      inputs.forEach((input) => {
        values[input.id] = ""
      })
  }, [])
    
  const onChange = (e) => {
    setValues({...values,[e.target.id]: e.target.value})
  }

  const handleSelect = (e) => {
    setSelection(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    values["type"] = selection.toLowerCase()

    const url = "http://localhost/backend/save.php"

    axios
      .post(url,values)
      .then((response) => {
        console.log(response.data);
        if (response.data === "SKU_Found")
        {
          setValidSKU(false) 
        }
        else if (response.data ==="Entry_successful")
        {
          setValidSKU(true)
          window.location.href = '/'
        } 
      });    
  }


  return (
    <>
    <div>
        <header>
            <h1>Product Add</h1>
            <div className="buttons">
                <button type='submit' form='product_form'>Save</button>
                <button>
                    <Link to="/">
                    Cancel
                    </Link>
                </button>
            </div>
        </header>
        <div className='divider'></div>
        <p className='warning'>
            {!validSKU && "SKU already exists. Please choose a unique SKU ID"}
        </p> 
        <main>
          <form id='product_form' onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInputs 
                key = {input.id} 
                {...input} 
                value = {values[input.id]} 
                onChange = {onChange}
                emptyMessage = {'Please, submit required data'}
                errorMessage = {'Please, provide the data of indicated type'}
              />
            ))}

            <label id='typeSwitcher'>Type Switcher
              <select id='productType' value={selection} onChange={handleSelect} required>
                <option value="" disabled>Type Switcher</option>
                {ProductList.map((ProductName, index) => {
                  return <option id={ProductName} key={index} value={ProductName}>{ProductName}</option>
                })}
              </select>

            </label>
            <ProductTypes 
              selection={selection} 
              ProductList={ProductList} 
              setProductList={setProductList}
              values={values}
              onChange={onChange}
            />
          </form>
        </main>
        <div className='divider'></div>
        <footer>
            <p>
              All Rights Reserved
            </p>
        </footer>
    </div>
    </>
  )
}

export default AddProduct
