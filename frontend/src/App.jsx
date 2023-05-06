import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Store from './pages/store'
import Cart from './pages/cart'

function App() {
  
  return (
    <>
    <Routes>
      <Route path='/'  element={< Store/>}  />
      <Route path='/cart'  element={< Cart/>}  />
    </Routes>
    </>
  )
}

export default App
