import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navber from './components/Navbar/Navber';
import Product from './components/Product/Product';
import { addToDb, getShoppingCart } from './utilities/fakedb';

const App = () => {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const [storage, setStorage] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(d => setData(d.products.splice(0, 20)))
  }, [])

  const shoppingCart = getShoppingCart()
  useEffect(() => {
    const savedProduct = []
    for (const id in shoppingCart) {
      const addedProduct = data.find(d => d.id == id)
      if (addedProduct) {
        addedProduct.quantity = shoppingCart[id]
        savedProduct.push(addedProduct)
      }
    }
    setStorage(savedProduct)

  }, [data, cart])

  const addToCart = (id) => {
    const newCart = [...cart, id]
    setCart(newCart)
    const exist = storage.find(d => d.id == id)
    if(!exist){
      addToDb(id)
    }else{
      toast('This product alredy added')
    }
    
  }

  // console.log(data)

  return (
    <div className='container mx-auto'>
      <Navber storage={storage} addToCart={addToCart}></Navber>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
        {
          data.map((product, i) => <Product key={i} {...product} addToCart={addToCart}></Product>)
        }

      </div>
      <ToastContainer />
    </div>
  );
};

export default App;