import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LandingPage from './pages/LandingPage'
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="plants" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
    </>
  )
}

export default App
