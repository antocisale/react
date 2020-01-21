import React from 'react';
import './MovieCard.css';
import more from './mas.svg'

const MovieCard = (props) =>{

    return(
        <section className="movie-card-container" style={{
            backgroundImage:`url(${props.image})`
        }}>
            <article className="movie-card-info">
                <h2 className="movie-card-subtitle">Powerful Women</h2>
                <h1 className ="movie-card-title">{props.title}</h1>
                <p className="movie-card-description">{props.description}</p>
                <a href={`url(${props.link})`} className="movie-card-link">LINK</a>
            </article>
            <footer className ="movie-card-display">
                    <span className="movie-card-display-img-container">
                        <img className="movie-card-display-img-container-img" src={more}  />
                    </span>
            </footer>

        </section>
    );
}

export default MovieCard;
//