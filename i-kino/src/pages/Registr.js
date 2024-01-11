import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useAddUserMutation } from '../redux/UsersSlice';
function AddProduct(props) {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const [addUser, result] = useAddUserMutation();

    const handleAddAccount = async (e) => {
        e.preventDefault()
        const db = {
            name,
            surname,
            password,
        }

        await addUser(db)
        navigate('/account')
    }
    return (
        <div className='addAcount'>
            <h2>Rigesteration</h2>
            <form action="">
                <p>First name</p>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Baxtiyor' />
                <p>Last name</p>
                <input onChange={(e) => setSurname(e.target.value)} type="text" placeholder='Alimov' />
                <p>Password</p>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='12345678' />
                <button onClick={(e) => handleAddAccount(e)}>Register</button>
            </form>
        </div>
    );
}

export default AddProduct;