import React from 'react';
import "./tag.css"

const Tag = ( {tag}) => {
    return (
        <div className='tagLocation'>
            <p className='tagText'>{tag}</p>
        </div>
    );
};

export default Tag;