import React from 'react'
import logo from "../../img/logo.png"
import "./Header.css";

const Header = () => {
    return (
        <div>
            <header className='center'>
                <img src = {logo} alt=''/>
            </header>
        </div>
    )
}

export default Header;
