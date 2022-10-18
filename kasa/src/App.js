import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

//
//{
/* <Routes>
      
    </Routes> */
//}
