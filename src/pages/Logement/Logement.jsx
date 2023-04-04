import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOneLogement } from '../../api/api';

import Carousel from "../../components/carousel/Carousel"
import Tag from "../../components/tag/Tag"
import Rating from "../../components/rating/Rating"
import DropDown from "../../components/dropDown/DropDown"
import "../Logement/logement.css"


const Logement = () => {
    const { id } = useParams();
    const [logement, setLogement] = useState({})
    const [load, setLoad] = useState(false)


    //console.log(logement);

    useEffect(() => {
        // Une promesse pour bien attendre que les données arrivent
        getOneLogement(id)
            .then(data => {
                setLogement(data)
                setLoad(true)      // Une fois les data récupérée on met le flag à true
            })
            .catch(err => console.log(err))
        // eslint-disable-next-line
    }, [])

    if (!load) {
        return <div>Loading ....</div>
    }


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
                <p> {logement.location}</p>

            </div>

            <div className='tagLogement'>
                {logement.tags.map((tag) => {
                    return (
                        <Tag
                            tag={tag} key={tag}
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
                <DropDown />

            </div>



        </main>
    )



}

export default Logement;