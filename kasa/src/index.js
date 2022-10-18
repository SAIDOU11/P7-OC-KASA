import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppProvider } from './dataContext/context'
//import { About } from './pages/About'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
//import { NotFound } from './pages/NotFound'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppProvider>
      <Home />
      <Product />
    </AppProvider>
  </React.StrictMode>
)

// import { BrowserRouter, Routes, Route } from 'react-router-dom'
//{
/* <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes> */
//}
