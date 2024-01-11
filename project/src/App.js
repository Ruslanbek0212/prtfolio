import React from 'react'
import Navbars from './components/Navbar/Navbars';
import Slider from './components/Slider/Slider';
import Product from './components/Product/Product';


function App(props) {
  return (
    <div>
      <Navbars/>
      <Slider/>
      <Product/>
    </div>
  )
}

export default App