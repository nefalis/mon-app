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
        <div className='slideshowContainer'>

            <img className='imgSlideshow'
                src={pictures[currentIndex]} alt={currentIndex}>
            </img>

            <div className='leftArrow'>
                <img className={pictures.length !== 1 ? "leftArrow" : "arrowHidden"}
                    src={fleche_gauche} alt="fleche Gauche" onClick={goPrevious} />
            </div>

            <div className='rightArrow'>
                <img className={pictures.length !== 1 ? "rightArrow" : "arrowHidden"}
                    src={fleche_droite} alt="fleche Droite" onClick={goNext} />
            </div>

            <div className='numberImg'>
                <p className={pictures.length === 1 ? "numberImgHidden" : "numberImg"} >
                    {currentIndex + 1}/{pictures.length}
                </p>
            </div>

        </div >

    )
}



export default Carousel;
