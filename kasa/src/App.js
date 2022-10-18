import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.scss'
import Navbar from './components/Navbar'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
