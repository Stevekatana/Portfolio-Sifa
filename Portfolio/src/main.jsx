import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Pages/Products.jsx'
import Potrait from './Pages/Potraits.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/potrait' element={<Potrait />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
