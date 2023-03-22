import React from 'react';
import './banner.css'

import imgBanner from '../../assets/images/imgHome.png';


const Banner = () => {
    return (
        <div className='banner'>
            <img src={imgBanner} alt="vide" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;