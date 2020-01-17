import React from 'react';
import logo from './1801287.svg';
import './App.css';
import Card from './Components/Card/Card.js';
import HeaderImg from './Components/Card/img.jpg';

const App=() =>{
  const cards = [
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
}

export default App;


/**OPCION 2:
 * const imagenes = [HeaderImg,logo];  //Un array con las imagenes que quiero poner, y mapeo en ellos
 * 
 * <div>
      {imagenes.map(img =>{
        return <Card title="hola" HeaderImg={img}></Card>
      })}
      
    </div>
 */
