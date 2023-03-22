import React from 'react';
import './card.css'
import logement from '../../api/api'
import { Link } from "react-router-dom"

const Card = () => {
    return (
        <div className='card'>
        
        </div >
    );
};

export default Card;

/*    {logement.map(logement) => {

                <link key={logement.id} to={"../pages/Logement/Logement" + id}} >

            <img src={cover} alt={" Photo of " + title}> </img>
            <h2 className="card_title"> {title} </h2>

        </link>
}} */