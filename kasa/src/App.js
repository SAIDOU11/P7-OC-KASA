import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/Base/index.scss'
import StyledNavbar from './components/StyledNavbar'
import Footer from './components/Footer'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Product } from './pages/Product'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <StyledNavbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
