/* Modules */
import React from 'react';

const Card = ({movie, setShowDetails, setDetails}) => {

    function showDetails() {
        document.querySelector('html').style.overflowY = 'hidden';
        setShowDetails(true);
        setDetails(movie);
    };

    return (
        <div className='Card' onClick={() => showDetails()}>
            
            <img src={movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"}
                alt={movie.title}
                title={movie.title}
            />

        </div>
    );
};

export default Card;