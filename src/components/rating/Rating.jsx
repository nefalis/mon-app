import React from 'react';
import EmptyStar from "../../assets/images/emptyStar.svg"
import FullStar from "../../assets/images/fullStar.svg"



const Rating = ({ numberStar }) => {
    const array = [1, 2, 3, 4, 5];
    return (
        <div className='star'>
            {array.map((levelStar) =>
                numberStar >= levelStar ? (
                    <img className='starImg'
                        src={FullStar}
                        alt="full Star"
                        key={levelStar}
                    />


                ) : (

                    <img className='starImg'
                        src={EmptyStar}
                        alt="empty star"
                        key={levelStar}
                    />

                )

            )}
        </div>
    );
};

export default Rating;