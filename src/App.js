import React from 'react';
import logo from './1801287.svg';
import './App.css';
import Card from './Components/Card/Card.js';
import HeaderImg from './Components/Card/img.jpg';
import MovieCard from './Components/MovieCard/MovieCard';
import WonderWomanImg from './Components/MovieCard/wonder_woman.png';
import LeiaOrganaImg from './Components/MovieCard/Leia_Organa.png';
import LaraCroftImg from './Components/MovieCard/laraCroft.png';

const App=() =>{
  const movieCards=[
    {
      title: "Wonder Woman",
      image:  WonderWomanImg,
      description: "Diana Prince is the most recognizable female superhero in the world. Her debut film Wonder Womanis the highest grossing superhero origin film of all time. Created in  1941 and beloved for over 76 years, Diana Prince is a strong, compassionate role model for men and women everywhere.",
      link: "#"
    },
    {
      title: "General Leia Organa",
      image: LeiaOrganaImg,
      description: "Leia is the most powerful female figurehead in the Star Wars franchise. This year she will take her final bow in Star Wars: The Last Jedi, as fans celebrate actress Carrie Fisher’s legacy one last time.",
      link: "#"
    },
    {
      title: "Lara Croft",
      image: LaraCroftImg,
      description: "This powerhouse of strength, smarts, and beauty is not to be trifled with. After the recent reboot of her 20-year-old video game franchise Tomb Raider, Lara is headed to the big screen next year for even greater adventures.",
      link: "#"
    }
  ]
  return (
    <div className="card-container">
      {movieCards.map(card=>{
        return <MovieCard image={card.image} title={card.title} description={card.description} link={card.link}></MovieCard>
      })}
    </div>
  );
}

export default App;


/**OPCION 2:PARA MAPEAR IMAGENES Y DUPLICAR CARDS CAMBIANDO EL CONTENIDO
 * 
 * const imagenes = [HeaderImg,logo];  //Un array con las imagenes que quiero poner, y mapeo en ellos
 * 
 * <div>
      {imagenes.map(img =>{
        return <Card title="hola" HeaderImg={img}></Card>
      })}
      
    </div>
 */

 /**
  * OPCION 1: PARA MAPEAR IMAGENES Y DUPLICAR CARDS CAMBIANDO EL CONTENIDO
  *  const cards = [
    {
      title: "hola",
      img: logo,
      },
    {
      title: "chau",
      img: HeaderImg,
    }
  ]
  return (
    <div>
      {cards.map(card =>{
        return <Card title={card.title} HeaderImg={card.img}></Card>
      })}
      
    </div>
  );
  */
