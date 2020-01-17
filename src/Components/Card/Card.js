import React from 'react';
import HeaderImg from './img.jpg';
import './Card.css';
import rss from './network.svg';

const Card = (props) =>{
    return(
        <section className ="card">
            <header className="card-header" style={
                { 
                    backgroundImage:`url(${props.HeaderImg})`
                }
            }> 
            </header>
            <article>
                <h1>{props.title}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis dapibus vel nisl nec convallis. Aliquam erat volutpat. 
                    Duis ac venenatis diam, id egestas ipsum. Donec quis tincidunt metus. 
                </p>
            </article>
            <a href="#" className="rss-link"><img src={rss} className="rss"/></a>
        </section>
    );
};

export default Card;

/*props = parametro, props.HeaderImg despues se puede usar en cada uno */
/*ojo, no se pueden poner comentarios en el return, sino te los toma igual!!! 
tienen que estar x afuera, y tienen que ser de JS*/