import { useState, useEffect } from 'react';
import axios from "../../axios.js";

import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, endParam, topRow }) => {

    const [movies, setMovies] = useState([]);
    const [translate, setTranslate] = useState(0);

    // Getting the movies from tmdb api
    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(endParam);
            setMovies(response.data.results);

            return response;
        }

        getMovies();

    }, [endParam]);  

    /* 
    //Configuring the movie trailers from youtube
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }

    // Trigger the trailer to play

    const handleClick = () => {
        if(trailerUrl) {
            setTrailerUrl("")
        } else {

        }
    }

    */

    // Handle the translate buttons on large screen, hidden on small screen
    const handleTranslate = (value) => {
        if(value > 0 && translate === 0) {
            return null;
        } else {
            setTranslate(translate + (value));
        }
    };

    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="movie-row">
                <div className="left-arrow"><button onClick={() => handleTranslate(500)}><i className="fa fa-arrow-left" aria-hidden="true"></i></button></div>
                <div className="movies-container">
                <div className="movies" style={{
                    transform: `translateX(${translate}px)`,
                }}>
                    {topRow && movies.map((movie) => (
                        <img key={movie.id}
                        className={`movie-img ${topRow && "top-row"}`} 
                        src={`${base_url}${movie.poster_path}`} alt={movie.title} />
                    )
                    )}

                    {/* If its not the top row, add the movie title to the bottom */}

                    {!topRow && movies.map((movie) => (
                        <div className="named-row" key={movie.id}>
                            <img
                            className={`movie-img ${topRow && "top-row"}`} 
                            src={`${base_url}${movie.backdrop_path}`} alt={movie.title} />

                            <p>{movie ? movie.title || movie.name || movie.original_name : null}</p>
                        </div>
                    ))}
                </div>
                    
                </div>
                <div className="right-arrow"><button onClick={() => handleTranslate(-500)}><i className="fa fa-arrow-right" aria-hidden="true"></i></button></div>
                
            </div>
        </div>
    )
}

export default Row;
