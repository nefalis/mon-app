import React from 'react';
import './proposBanner.css'

import imgBanner from '../../assets/images/imgAbout.png';


const BannerPropos = () => {
    return (
        <div className='bannerPropos'>
            <img className='imgPropos' src={imgBanner} alt="vide" />

        </div>
    );
};

export default BannerPropos;