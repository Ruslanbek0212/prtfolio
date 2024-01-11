import React, { useEffect } from 'react';
import { useFilmsQuery } from '../redux/FilmsSlice';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
function Product(props) {
    const { data, error, isLoading, isSuccess } = useFilmsQuery();
    const navigate = useNavigate()
    return (
        <div className="product" >
            <h2>product </h2>
            <div className="productCard">
                {
                    isSuccess && data.map((element, value) => {
                        return <div className='card' onClick={() => navigate(`/productInfo/${element.id}`)}>
                            <div className="img">
                                <img src={element.image} alt="" />
                            </div>
                            <h3>{element.name} </h3>
                            <h4>{element.author}</h4>
                            <div className="cardBottom">
                                <p>{element.date}</p>
                                <p>{element.categorys}</p>
                                <p>{element.lang}</p>
                                <Rating name="read-only" value={element.rating} readOnly />
                            </div>
                        </div>
                    })
                }
            </div>
            {isLoading && <h3 className='loading'>Yuklanmoqda....</h3>}
        </div>
    );
}

export default Product;