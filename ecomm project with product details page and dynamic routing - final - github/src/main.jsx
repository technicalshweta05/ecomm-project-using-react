import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/common/Header.jsx'
import MenSection from './components/MenSection.jsx'
import WomenSection from './components/WomenSection.jsx'
import Footer from './components/common/Footer.jsx'
import Home from './pages/Home.jsx'
import ToolsSection from './components/ToolsSection.jsx'
import ProductivitySection from './components/ProductivitySection.jsx'
import SuccessSection from './components/SuccessSection.jsx'
import TestimonialSection from './components/TestimonialSection.jsx'
import PricingSection from './components/PricingSection.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
   
  </StrictMode>,
)
