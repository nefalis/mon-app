import React from 'react';
import './home.css';
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import { getAllLogement } from '../../api/api';


const Home = () => {
    return (

        <main className='home'>

            <div className='home_banner'>
                <Banner
                />
            </div>

            <div className='card_logement'>
                {getAllLogement().map((logement) => {
                    return (
                        <Card
                            key={logement.id}
                            idCard={logement.id}
                            imgCard={logement.cover}
                            titleCard={logement.title}
                        />
                    );
                })}
            </div>

        </main>
    )

}

export default Home;