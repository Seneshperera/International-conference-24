import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Pageone from './component/Pageone.jsx'
import Pagetwo from './component/Pagetwo.jsx'
import Navbar from './component/Navbar.jsx'
import Pagethree from './component/Pagethree.jsx'
import Pagefour from './component/Pagefour.jsx'
import Pagefive from './component/Pagefive.jsx'
import Pagesix from './component/Pagesix.jsx'
import Footer from './component/Footer.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar/>
      <Pageone/>
      <Pagetwo/>
      <Pagethree/>
      <Pagefour/>
      <Pagefive/>
      <Pagesix/>
      <Footer/>
    </Router>
  </StrictMode>
)
