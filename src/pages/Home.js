/* Modules */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

/* Components */
import Loader from '../components/Loader';
import Card from '../components/Card';
import Details from '../components/Details';

const Home = () => {

    const [loader, setLoader] = useState(true);

    // permet de gérer la recherche selon la saisie et le stockage des résultats
    const [search, setSearch] = useState('a');
    const [data, setData] = useState([]);

    // permet de gérer l'affichage du film sur lequel l'utilisateur clique
    const [showDetails, setShowDetails] = useState(false);
    const [details, setDetails] = useState({});

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=37fc9905af4878438737b4dd2aac3c39&query=${search}&language=fr-FR&region=FR`)
        .then((res) => {
            setData(res.data.results);
            document.querySelector('.spinner').style.animation = "reverseFadeIn .5s linear";
            setTimeout(() => {
                setLoader(false);
            },200);
            // console.log(res.data)
        })
        .catch((err) => {
            // setData([]);
            // alert('Une erreur est survenue');
            document.querySelector('.spinner').style.animation = "reverseFadeIn .5s linear";
            setTimeout(() => {
                setLoader(false);
            },300);
        })
    }, [search]);

    function removeResults(e) {
        
        // on stop le défilement sur la droite provoquer par l'animation
        document.querySelector('html').style.overflowX = 'hidden';
        
        // récupère toutes les cartes présentent selon le résultats de recherche
        const elts = document.querySelectorAll('.Card');
        
        // tableau d'animations (fichier settings.scss)
        const anim = [
            'reverseFadeIn .5s linear',
            'scale .5s linear',
            'rotateScale .5s linear'
        ];
        
        // si des résultats sont présent
        if (elts.length > 0) {
            
            const a = Math.floor(Math.random() * anim.length);
            
            // on boucle le tableau de cartes et on applique une animation à chacunes d'elles
            for (let i = 0; i < elts.length; i++) {
                elts[i].style.animation = `${anim[a]}`
            }
            
            // supprime les résultats de recherche
            setTimeout(() => {
                setSearch('');
                document.querySelector('html').removeAttribute('style');
            }, 400);
        }
        
    };

    if (loader) {
        return <Loader />
    }
    else {
        return (
            <>
                {/* Header */}
                <header>
                    <h1>Movies Data API</h1>
                </header>
    
                {/* Form */}
                <form>
                    <input type="text" placeholder="Saisir le nom d'un film" onChange={(e) => setSearch(e.target.value)} value={search}/>
    
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff" onClick={(e) => removeResults(e)}>
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"/>
                    </svg>
                </form>
    
                {/* Results */}
                <div className="results">
                    {data.map((movie) => 
                        <Card
                            key={movie.id} movie={movie}
                            setShowDetails={setShowDetails}
                            setDetails={setDetails}
                            />
                            )}
                </div>
    
                {/* Details */}
                {
                    showDetails === true 
                    ?
                        <Details 
                            setShowDetails={setShowDetails}
                            details={details} setDetails={setDetails}
                        />
                    : null
                }
    
            </>
        );
    }
};

export default Home;