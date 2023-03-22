import React from 'react';
import logement from "./logements.json"

const api = () => {
    return (
        <div className='logement'>
            {logement}
        </div>
    );
};

export default api;