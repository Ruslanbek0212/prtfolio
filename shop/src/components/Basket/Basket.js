/* eslint-disable array-callback-return */

import React, { useContext, useEffect, useState } from 'react'
import "./Basket.css"
import CloseIcon from '@mui/icons-material/Close';
import { Contexts } from '../../context/Contexts';

function Basket() {
  const {setBasket, state, dispatch} = useContext(Contexts)
  const [total, setTotal] = useState(0)

  const closeBasket = () => {
    setBasket(false)

  }

  const removeBasket = (data) => {
    dispatch({type: "REMOVE_BASKET", payload: data.id})
  }

  const minusBasket = (data) => {
    // eslint-disable-next-line no-unused-vars
    const res = state.basket.find((element, value) => {
      if (element.data.id === data.id) {
        let count = element.qty - 1 
        dispatch({type: element.qty <= 1 ? "REMOVE_BASKET" : 'CHANGE_QTY' , payload: {count, id: element.data.id}})
      }
    })
  }

  useEffect(() => {
    state.basket.length > 0 && setTotal(state.basket.reduce((prev, current) => prev + current.data.price * current.qty, 0))
  }, [state])
  

  const changeQty = (data) => {
    // eslint-disable-next-line no-unused-vars
    const res = state.basket.find((element, value) => {
      if (element.data.id === data.id) {
        let count = element.qty + 1 
        dispatch({type: 'CHANGE_QTY', payload: {count, id: element.data.id}})
      }
      
    })
  }
  return (
    <div className='basket'>
      <div className="top">
        <h2>Basket <CloseIcon onClick={closeBasket}/></h2>
        {
          state.basket.length > 0 ? 
          state.basket.map((element, value) => {
            return <div className="box">
              <div className="left">
                <div className="img">
                  <img src={element.data.image} alt="" />
                </div>
              </div>
              <div className="center">
                <h3>{element.data.title}</h3>
                <p><span>price:</span>{element.data.price}</p>
                <button className='remveButton' onClick={() => removeBasket(element.data)}>remove basket</button>

              </div>

              <div className="right">
                <button onClick={() => changeQty(element.data)}>+</button>
                <span>{element.qty}</span>
                <button onClick={() => minusBasket(element.data)}>-</button>
              </div>
            </div>
          }) : <h3 style={{color: 'white'}}>Hech qanday tovar yo'q</h3>
        }
      </div>
      <div className="bottom">
        <h3>Total : <span>{total}</span></h3>
      </div>
    </div>
  )
}

export default Basket