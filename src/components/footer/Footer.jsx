import React from 'react';

import logo from "../../assets/images/logofooter.svg"
import './footer.css'


const Footer = () => {
    return (

        <div className='footer'>
            <footer>
                <img scr={logo}
                    alt='logo footer'></img>

                <p>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
        
    );
};

export default Footer;