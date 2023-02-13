/* Modules */
import React from 'react';
import { Link } from 'react-router-dom';

/* Assets */
import error from '../assets/img/404.png';

const Error = () => {
    return (
        <div className="Error">
            <img src={error} alt="Page non trouvée" title="Error" />
            <p>La page demandée n'existe pas !</p>
            <Link to="https://mselek.github.io/movies-data-api" exact>
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#fff">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/>
                </svg>
                Accueil
            </Link>
        </div>
    );
};

export default Error;