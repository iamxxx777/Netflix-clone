import { useState, useEffect } from 'react';
import axios from "../../axios";

import "./Banner.css";

const Banner = ({ endParam }) => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getMovie() {
            const response = await axios.get(endParam);
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]);
        }

        getMovie();
    }, [endParam]);


    return (
        <div className="banner" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
        }
        }>
            <div className="banner-info">
                <h1>{movie ? movie.title || movie.name || movie.original_name : null}</h1>
                <div className="banner-buttons">
                    <button>Play</button>
                    <button>My List</button>
                </div>
                <div className="banner-desc">
                    <p>{movie && movie.overview ? movie.overview.length > 200 ? (movie.overview.substring(0, 150) + "...") : movie.overview : null}</p>
                </div>
            </div>
            <div className="fade" />
        </div>
    )
}

export default Banner;
