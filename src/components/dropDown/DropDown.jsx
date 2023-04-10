import React, { useState } from 'react';
import "../dropDown/dropDown.css"
import arrowDropDown from "../../assets/images/flecheDropDown.svg"


const DropDown = ({ title, content }) => {
    const [open, setOpen] = useState(false)
    const openDrop = () => { // modifie la valeur open au click
        setOpen(!open);
    }

    return (

        <div className='dropDown'>

            <div className='dropDownHeader' onClick={openDrop} >
                <h2 className='titleDropDown'> {title} </h2>

                <img className={open ? "arrow_open" : "arrow_close"}
                    src={arrowDropDown} alt="arrow">
                </img>
            </div>

            <div className='dropDownContent'>
                {open && (

                    <div className='dropDownContentText'>
                        <p>{content instanceof Array
                            ?
                            content.map((equipement) => (
                                <span key={equipement}> {equipement} </span>
                            ))
                            :
                            content
                        }
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default DropDown;
