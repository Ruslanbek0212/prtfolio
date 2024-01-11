import React, { useState } from 'react';
import { category } from '../utilits/constants';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Rating from '@mui/material/Rating';
import { useAddFilmMutation } from '../redux/FilmsSlice';
import { faker } from '@faker-js/faker'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
function AddProduct(props) {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [lang, setLang] = useState("")
    const [categorys, setCategorys] = useState("")
    const [country, setCountry] = useState("")
    const [desc, setDesc] = useState("")

    const navigate = useNavigate()

    const [addFilm, result] = useAddFilmMutation();

    const handleAddProduct = async (e) => {
        e.preventDefault()
        const db = {
            name,
            author,
            lang,
            categorys,
            country,
            desc,
            name,
            image: faker.image.avatar(),
            date: moment().format('L')
        }

        await addFilm(db)
        navigate('/product')
    }
    return (
        <div className='addproduct'>
            <h2>Add Product</h2>
            <form action="">
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='name of films' />
                <input onChange={(e) => setAuthor(e.target.value)} type="text" placeholder='author of films' />
                <input onChange={(e) => setLang(e.target.value)} type="text" placeholder='languages of films' />
                <select onChange={(e) => setCategorys(e.target.value)} name="" id="">
                    {
                        category.map((element, value) => {
                            return <option value={element}>{element}</option>
                        })
                    }
                </select>
                <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
                <textarea onChange={(e) => setDesc(e.target.value)} name="" id="" cols="30" rows="10" placeholder='description of films'></textarea>
                <button onClick={(e) => handleAddProduct(e)}>Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;