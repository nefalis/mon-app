import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

import './header.css'

const Header = () => {
    return (
        <div className='header'>
                <nav>
                    <img src={logo}
                        alt="logo orange"></img>

                    <div className='sidebar' >
                        <NavLink to='/home' className={({ isActive }) => (isActive ? "link-active" : "sidebar")} >Accueil</NavLink>
                        <NavLink to='/propos' className={({ isActive }) => (isActive ? "link-active" : "sidebar")}>A Propos </NavLink>
                    </div>
                </nav>
        </div>
    );
};

export default Header;