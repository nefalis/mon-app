import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <header>
                <nav>
                    <img src={logo}
                        alt="logo orange"></img>

                    <ul>
                        <li><Link to='/home'  >Accueil</Link></li>
                        <li><Link to='/propos' >A Propos </Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;