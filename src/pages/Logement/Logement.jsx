import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllLogement } from '../../api/api';

import Carousel from "../../components/carousel/Carousel"
import Tag from "../../components/tag/Tag"
import Rating from "../../components/rating/Rating"



const Logement = () => {
    const { idCard } = useParams();
    const logements = useState(getAllLogement);

    const logement = logements.find((logement) => logement.id === idCard);

    //console.log(logement);


    return (

        <main className='logementPage'>

            <div className='carouselLogement'>

                <Carousel
                    pictures={logement.pictures}
                    alt={logement.title}
                />

            </div>


            <div className='detailLogement' >

                <h2>{logement.title}</h2>
                <p>{logement.location}</p>

                {logement.tags.map((tag) => {
                    return (
                        <Tag
                            tag={tag}
                        />

                    )
                })}

            </div>


            <div className='hostRate'>
                <div className='host'>
                    <p>{logement.host.name}</p>
                    <img src={logement.host.picture} alt={logement.host.name} ></img>
                </div>
                
                <div className='rate'>
                    <Rating />
                </div>
            </div>

            <div className='dropDown'>


            </div>



        </main>
    )

}

export default Logement;