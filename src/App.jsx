import LandingPage from './pages/LandingPage.jsx'
import {  Routes, Route  } from 'react-router-dom';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CartPage.jsx';


function App() {


  return (
    
  
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="plants" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
      </Routes>
  
    
  )
}

export default App
