import React, { useState } from 'react';
import { category } from '../utilits/constants';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Rating from '@mui/material/Rating';
import { useAddFilmMutation, useFilmsQuery, useUpdateFilmMutation } from '../redux/FilmsSlice';
import { faker } from '@faker-js/faker'
import { useNavigate, useParams } from 'react-router-dom'
import moment from 'moment'
function Update(props) {

    const navigate = useNavigate()
    const { id } = useParams()

    const { data, error, isLoading, isSuccess } = useFilmsQuery()
    const [addFilm, result] = useAddFilmMutation();
    const [updateFilm] = useUpdateFilmMutation();

    const res = isSuccess && data.find((elment, value) => elment.id == id)

    const [name, setName] = useState(res?.name)
    const [author, setAuthor] = useState(res?.author)
    const [lang, setLang] = useState(res?.lang)
    const [categorys, setCategorys] = useState(res?.categorys)
    const [country, setCountry] = useState(res?.country)
    const [desc, setDesc] = useState(res?.desc)

    const handleUpdateProduct = async (e) => {
        e.preventDefault()
        const db = {
            name,
            author,
            lang,
            categorys,
            country,
            desc,
            image: res.image,
            date: res.date,
            id: res.id,
        }

        await updateFilm(db)
        navigate('/product')
    }
    return (
        <div className='addproduct'>
            <h2>Update Product</h2>
            <form action="">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='name of films' />
                <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='author of films' />
                <input value={lang} onChange={(e) => setLang(e.target.value)} type="text" placeholder='languages of films' />
                <select value={categorys} onChange={(e) => setCategorys(e.target.value)} name="" id="">
                    {
                        category.map((element, value) => {
                            return <option value={element}>{element}</option>
                        })
                    }
                </select>
                <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
                <textarea value={desc} onChange={(e) => setDesc(e.target.value)} name="" id="" cols="30" rows="10" placeholder='description of films'></textarea>
                <button onClick={(e) => handleUpdateProduct(e)}>Update Product</button>
            </form>
        </div>
    );
}

export default Update;