import React, { useEffect, useReducer, useState } from 'react'
import Navbars from './components/Navbars/Navbars'
import { Contexts } from './context/Contexts'
import Basket from './components/Basket/Basket'
import Product from './components/Products/Product'
import axios from 'axios'
import reducer, { INTIAL_STATE } from './reducer/Reducer'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import Login from './components/Login/Login'
import ProtectedRoutes from './routes/Protected'

// import { BASE_URL } from './API/BASE_URL'

function App() {
  const [basket, setBasket] = useState(false)
  const [db , setDb] = useState([])
  const [state, dispatch] = useReducer(reducer, INTIAL_STATE)
  const [open, setOpen] = useState(false);


  useEffect(() => {
    try{
      axios.get(`${process.env.REACT_APP_BASEURL}/products`)
      .then(data => setDb(data.data))
      .catch(err => console.log(err))
    }catch (error){
      console.log(error);     
    }
  }, [])
  return (
    <div>
      <Contexts.Provider value={{basket, setBasket, db , setDb, state, dispatch, open, setOpen }}>
      <Navbars/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>       
        <Route path='/login' element={<Login/>}/>       
        <Route element={<ProtectedRoutes/> }>
          <Route path='/product' element={<Product/>}/>
        </Route>
      {basket && <Basket/> } 
      </Routes>      
      </Contexts.Provider>
    </div>
  )
}

export default App