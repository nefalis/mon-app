import React from 'react';
import imgBanner from '../../images/imgHome.png';
import './home.css'

const Home = () => {
return (
    <div className='home_banner'>

        <img scr={imgBanner}
        alt=' falaise'></img>
        <h1>Chez vous, partout et ailleurs</h1>
        
    </div>
)


}

export default Home;