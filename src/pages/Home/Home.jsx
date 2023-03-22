import React from 'react';
import './home.css'
import Banner from "../../components/banner/Banner"
import Card from "../../components/card/Card"

const Home = () => {
    return (
        <div className='home_banner'>
            <Banner />


            <section className='card_logement'>
                <Card />

            </section>
        </div>
    )


}

export default Home;