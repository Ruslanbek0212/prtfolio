import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { menu } from '../utilits/constants';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchMenu from './SearchMenu';

function Navbar(props) {
    const [showSearch, setShowSearch] = useState(false)
    const handleSearch = (e) => {
        setShowSearch(true)
    }
    return (
        <nav>
            <Link className='logo'>i-kino.uz</Link>
            <div className="searching">
                <form action="">
                    <input type="text" placeholder='Searching' onChange={(e) => handleSearch(e)} />
                    <button><SearchIcon /></button>
                </form>
                {showSearch && <SearchMenu />}
            </div>
            <ul>
                {
                    menu.map((element, value) => {
                        return <li key={value}><Link to={element.slug}>{element.linkName}</Link></li>
                    })
                }
                {<ShoppingBagIcon />}
            </ul>
        </nav>
    );
}

export default Navbar;