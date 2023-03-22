import React from 'react';
import "./error.css"
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div className='pageError'>

            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='home' to="/">Retourner sur la page d’accueil</Link>



        </div>
    )


}

export default Error;