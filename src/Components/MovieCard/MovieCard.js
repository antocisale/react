import React from 'react';
import img from './wonder_woman.png';
import './MovieCard.css';
import close from './cerrar.svg';
import more from './mas.svg'

const MovieCard = () =>{
    return(
        <section className="movie-card-container" style={{
            backgroundImage:`url(${img})`
        }}>
            <article className="movie-card-info">
                <h2 className="movie-card-subtitle">Powerful Women</h2>
                <h1 className ="movie-card-title">Wonder Woman</h1>
                <p className="movie-card-description">Diana Price is the most recognizable female superhero in the world. Her debut film Wonder Womanis the highest grossing superhero origin film of all time. Created in  1941 and beloved for over 76 years, Diana Prince is a strong, compassionate role model for men and women everywhere.</p>
                <a href={"#"} className="movie-card-link">LINK</a>
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