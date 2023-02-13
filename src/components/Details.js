import React, { useEffect } from 'react';

const Details = ({details, setDetails, setShowDetails}) => {


    // evenement lorsque la touche Esc est préssée et relachée (ferme la popup)
    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            const touche = e.key;
            if (touche === 'Escape') {
                removeDetails();
            }
        });
    });

    function removeDetails() {

        document.querySelector('.overlay').style.animation = "reverseFadeIn .5s linear";
        document.querySelector('.popup').style.animation = "reverseSlideToLeft .5s linear";

        setTimeout(() => {
            setShowDetails(false);
            setDetails({});
        }, 450);

        document.querySelector('html').removeAttribute('style');
    };

    // format la date pour l'afficher en Fr
    const dateFormat = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd, ".", mm, ".", yy]
    };

    // format les genres
    const genreFormat = () => {
        let genres = [];
        for (let i = 0; i < details.genre_ids.length; i++) {
            switch (details.genre_ids[i]) {
                case 12:
                    genres.push('Aventure');
                    break;
                case 14:
                    genres.push('Fantastique');
                    break;
                case 16:
                    genres.push('Animation');
                    break;
                case 18:
                    genres.push('Drame');
                    break;
                case 27:
                    genres.push('Horreur');
                    break;
                case 28:
                    genres.push('Action');
                    break;
                case 35:
                    genres.push('Comédie');
                    break;
                case 36:
                    genres.push('Histoire');
                    break;
                case 37:
                    genres.push('Western');
                    break;
                case 53:
                    genres.push('Thriller');
                    break;
                case 80:
                    genres.push('Crime');
                    break;
                case 99:
                    genres.push('Documentaire');
                    break;
                case 878:
                    genres.push('Sciences Fiction');
                    break;
                case 9648:
                    genres.push('Mistère');
                    break;
                case 10402:
                    genres.push('Musique');
                    break;
                case 10749:
                    genres.push('Romance');
                    break;
                case 10751:
                    genres.push('Famille');
                    break;
                case 10752:
                    genres.push('Guerre');
                    break;
                case 10770:
                    genres.push('Télé réalité');
                    break;
                default:
                    break;
            }
        }

        genres.sort();
        
        return genres.map((genre) => <li key={genre}>{genre}</li>)
    };

    return (
        <div className="Details">

            <div className="overlay" onClick={() => removeDetails()}></div>

            <div className="popup">

                <div className="close">
                    <span onClick={() => removeDetails()}>&#10006;</span>
                </div>

                <div className="details">

                    {/* Id */}
                    <span>ID: {details.id}</span>
                    
                    {/* Image */}
                    <img src={details.poster_path ? "https://image.tmdb.org/t/p/w500" + details.poster_path : "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg"} alt={details.title} title={details.title} />
                    
                    {/* Title */}
                    <h1>{details.title}</h1>

                    {/* Release Date */}
                    <h4>{details.release_date ? dateFormat(details.release_date) : 'NC'}</h4>

                    {/* Vote Average */}
                    <h4><span>&#9733;</span>{details.vote_average ? `${details.vote_average.toFixed(1)}/10` : 'NC'}</h4>

                    {/* Resume */}
                    <p>{details.overview ? details.overview : "Pas de résumé disponible..."}</p>

                    {/* Genres */}
                    <ul>
                        {details.genre_ids ? genreFormat() : details.genres.map((genre) =>
                            <li key={genre.id}>{genre.name}</li>
                        )}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Details;