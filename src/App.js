import React from 'react';
import './App.css';
import MovieCard from './Components/MovieCard/MovieCard';
import MovieCardInfo from './Components/MovieCard/MovieCardInfo';
import Button from './Components/Button/Button';
import Textarea from './Components/TextArea/Textarea';
import Inputs from './Components/Input/input';
import ButtonSuma from './Components/ButtonSuma/ButtonSuma'
import Login from './Components/Login/Login';


const App=() =>{
  const movieCards= MovieCardInfo;
  return (
    <div className="card-container">

      <Login></Login>
    </div>
  );
}

export default App;


/**OPCION 2:PARA MAPEAR IMAGENES Y DUPLICAR CARDS CAMBIANDO EL CONTENIDO
 *       {movieCards.map(card=>{
        if(movieCards.indexOf(card)%2===0){
        return <MovieCard key={card.title} image={card.image} title={card.title} description={card.description} link={card.link}></MovieCard>
      }})}
      <Button></Button>
      <Textarea></Textarea>
      <Inputs></Inputs>
      <ButtonSuma></ButtonSuma>


      
 * const imagenes = [HeaderImg,logo];  //Un array con las imagenes que quiero poner, y mapeo en ellos
 * 
 * <div>
      { // primer llave es porque estoy escribiendo en Js//
        imagenes.map(img =>{
        return <Card title="hola" HeaderImg={img}></Card>
      })}
      
    </div>
 */

 //react quiere reconocer cada elemento, por eso React pide una KEY UNICA - para poder modificar luego únicamente ese elemento

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
/**
 * if(movieCards.indexOf(card)%2==0) (SOLO PARA MOSTRAR LAS CARDS QUE EN EL ARRAY ESTEN UBICADAS EN NUMEROS PARES, O EN NUMEROS IMPARES !==0)
 * 
 * condicional para cambiar fondo segun el tipo de carta (dada en el array):
 * const getCardColor = cardType => {
    if(cardType == "Clover" || cardType == "Spade") {
        return 'black';
    } else {
        return 'red';
    }
};
 * 
 * 
 */
