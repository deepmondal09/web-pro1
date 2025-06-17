import React from 'react'
import Home from './comp/home'
import Product from './comp/product'
import Product1 from './comp/product1'
import Product3 from './comp/product3'
import Login from './comp/login'
import Signup from './comp/signup'
import Query from './comp/query'
import Feedback from './comp/feedback'
import About from './comp/about'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product1' element={<Product1 />} />
      <Route path='/product3' element={<Product3 />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/query' element={<Query />} />
      <Route path='/feedback' element={<Feedback />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App