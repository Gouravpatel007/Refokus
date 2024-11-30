import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Footerline from './components/Footerline'
import LocomotiveScroll from 'locomotive-scroll';
import { HashRouter } from 'react-router-dom';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <HashRouter>
             <Navbar />
             <Work />
             <Stripes />
             <Products />
             <Marquees />
             <Cards />
             <Footer />
             <Footerline />
      </HashRouter>
    </div>
  )
}

export default App
