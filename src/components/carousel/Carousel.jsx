import { useState } from 'react';
import './carousel.css';
import fleche_droite from '../../assets/images/fleche_droite.svg'
import fleche_gauche from '../../assets/images/fleche_gauche.svg'



const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0); //1er slide (0)
    const length = pictures.length; // 




    const goPrevious = () => {
        const isFirst = currentIndex === 0;

        // va dernier slide quand 1er
        const newIndex = isFirst ? length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);

    }

    const goNext = () => {
        const isLast = currentIndex === length - 1;

        // va 1er quand dernier
        const newIndex = isLast ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }


    return (
        <div className='"slideshow'>
            <div className='leftArrow'>
                <button className='previous' onClick={() => goPrevious}>
                    <img src={fleche_gauche} alt="flecheGauche" />

                </button>
            </div>

            <div className='imgCarousel'
                style={{ backgroundImage: `url("${pictures[currentIndex]}")` }}

            ></div>

            <div className='rightArrow'>
                <button className='next' onClick={() => goNext}>
                    <img src={fleche_droite} alt="flecheDroite" />
                </button>
            </div>

            <div className='numberImg'>
                <p>{currentIndex + 1}/{pictures.length}</p>
            </div>


        </div >

    )
}



export default Carousel;
