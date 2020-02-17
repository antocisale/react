import React from 'react';
import './MovieCard.css';
import more from './mas.svg';
import {useParams} from 'react-router-dom';
import MovieCardInfo from './MovieCardInfo';

const MovieCard = (props) =>{
    const {id} = useParams(); 

    const info = MovieCardInfo.find(info=>{
        return info.id==id;
    })

    return(
        <section className="movie-card-container" style={{
            backgroundImage:`url(${info.image})`
        }}>
            <article className="movie-card-info">
                <h2 className="movie-card-subtitle">Powerful Women</h2>
                <h1 className ="movie-card-title">{info.title}</h1>
                <p className="movie-card-description">{info.description}</p>
                <a href={`url(${info.link})`} className="movie-card-link">LINK</a>
            </article>
            <footer className ="movie-card-display">
                    <span className="movie-card-display-img-container">
                        <img className="movie-card-display-img-container-img" src={more} alt="more" />
                    </span>
            </footer>

        </section>
    );
}

export default MovieCard;
//