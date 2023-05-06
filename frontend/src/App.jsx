import { useState,useEffect } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Store from './pages/store'
import Cart from './pages/cart'
import axios from 'axios'

function App() {
  const [products,setProducts] = useState([])

  const addToCart = (id)=>{
    console.log("id is ---->",id)

    axios.post(`http://localhost:5000/cart/addProductToCart/${id}`)
    .then((response)=>{
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })
  }



useEffect(()=>{
  axios.get('http://localhost:5000/product/view')
  .then((response)=>{
    console.log(response.data.products)
    setProducts(response.data.products)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

  return (
    <>
    <Routes>
      <Route path='/'  element={< Store  products = {products}  addToCart = {addToCart} />}  />
      <Route path='/cart'  element={< Cart/>}  />
    </Routes>
    </>
  )
}

export default App
