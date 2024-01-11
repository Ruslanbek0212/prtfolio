import React, { useState } from 'react';
import { useDeleteFilmMutation, useFilmsQuery, useUpdateFilmMutation } from '../redux/FilmsSlice';
import { useParams, useNavigate } from 'react-router-dom'
import Rating from '@mui/material/Rating';

function ProductInfo(props) {

    const { id } = useParams()
    const { data, error, isLoading, isSuccess } = useFilmsQuery();
    const [updateFilm] = useUpdateFilmMutation();
    const [deleteFilm] = useDeleteFilmMutation();
    const res = isSuccess && data.find((elmenet, value) => elmenet.id == id)
    const navigate = useNavigate()
    

    const handleUpdateRating = async (ratingValue) => {
        const db = {
            name : res.name,
            author: res.author,
            lang : res.lang,
            categorys : res.categorys,
            country: res.country,
            desc: res.desc,
            image: res.image,
            date: res.date,
            id: res.id,
            rating: ratingValue
        }

        await updateFilm(db)
        navigate('/product')
    }

    const handleDelete = () => {
        deleteFilm(res.id)
        navigate('/product')
    }


    const handleUpdate = () => {
        navigate(`/productInfoUpdate/${res.id}`)
    }

    
    return (
        <>
            <div className="topContent">
                <h2 className='titles'>About films <span>{res.name}</span></h2>
                <div className="right">
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            </div>
            <div className='cardInfo'>
                <div className="left">
                    <div className="img">
                        <img src={res?.image} alt="" />
                    </div>
                    <h3>{res?.name}</h3>
                    <h3>{res?.author}</h3>
                    <h3>about Description</h3>
                    <p>{res?.desc}</p>
                    <div className="bottomCardInfo">
                        <p><span>Date :</span> {res?.date}</p>
                        <p><span>Category :</span>{res?.categorys}</p>
                        <p><span>Language :</span>{res?.lang}</p>
                         <Rating
                            name="simple-controlled"
                            onChange={(event, newValue) => {
                            handleUpdateRating(newValue);                            
                            }}
                            
                        />
                    </div>
                </div>
                <div className="right">
                    <div className="phone">
                        <div className="img">
                            <img src="" alt="" />
                        </div>
                        <div className="phoneInfo">
                            <h3>  <span> 99890 777-77-77</span> </h3>
                            <h3> <span>Alisher A</span> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductInfo;