import React from 'react';
import './card.css';
import { Link } from "react-router-dom";

const Card = ({ idCard, imgCard, titleCard }) => {

    return (
        <div className='card'>

            <Link className="card" to={"../Logement/" + idCard}>

                <img className="imgCard" src={imgCard} alt={titleCard} ></img>
                <h2>{titleCard}</h2>
            </Link>

        </div >
    );
};

export default Card;
