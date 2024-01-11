import React from 'react'
import './Card.css'

function Card(props) {
  return (    
    <div className="box">
        <img src={props.data.image} alt="" />
        <h2>{props.data.title?.slice(0, 40)}...</h2>
        <p><span>price:</span>{props.data.price?.toLocaleString('uz-uz', {
          style: 'currency',
          currency: "UZS"
        })}</p>
        <div className="boxBottom">
            <p><span>Category:</span>{props.data.category}</p>
            <p><span>Rate:</span>{props.data?.rating.rate}</p>
            <p><span>Count:</span>{props.data?.rating.rate}</p>
        </div>
    </div>        
    
  )
}

export default Card