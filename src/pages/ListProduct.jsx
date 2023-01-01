import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const ListProduct = () => {

  const [productList, setProductList] = useState([])

  useEffect(() => {

     
    const url = "http://localhost/backend/load.php"
    // const url = "https://fullstack-product-inventory.000webhostapp.com/scandiweb-test/backend/load.php"

    axios.get(url)
         .then((response) => {
          let sortedList = response.data.sort((a,b) => ('' + a.sku).localeCompare(b.sku))

          sortedList.forEach(elem => {
            elem['checked'] = false
          })
          setProductList(sortedList)
      });            
    }, [])
  
  const onChange = (e) => {
    const newArray = productList.map((elem) => {
      if (elem.sku == e.target.id)
      {
        return {...elem, ['checked']: e.target.checked}
      } 
      return elem
    });
    setProductList(newArray);      
  }

  const handleDelete = () => {
    const selectedProducts = productList.filter(elem => elem.checked === true);
    
    const difference = productList.filter(elem => !selectedProducts.includes(elem));
    setProductList(difference);

    const url = "http://localhost/backend/delete.php"
    // const url = "https://fullstack-product-inventory.000webhostapp.com/scandiweb-test/backend/delete.php"
    
    axios
      .post(url,selectedProducts)
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <>
    <div>
      <header>
        <h1>Product List</h1>
          <div className="buttons">
            <button>
              <Link to="/add-product">
                ADD
              </Link>
            </button>
            <button id='delete-product-btn' onClick={handleDelete}>MASS DELETE</button>
          </div>
      </header>
      <div className='divider'></div>
      <main>
        <div className="card-list">
          {productList.map((input) => (
            <ProductCard
              key={input.sku}
              id={input.sku}
              sku={input.sku} 
              name={input.name}
              price={input.price}
              {...input}
              onChange = {onChange}
            />
          ))}
        </div>
      </main>
      <div className='divider'></div>
      <footer>
        <p>
          Scandiweb Test assignment
        </p>
      </footer>
    </div>
    </>
  )
}

export default ListProduct
