import React from 'react';
import './App.css';
import MovieCard from './Components/MovieCard/MovieCard';
import MovieCardInfo from './Components/MovieCard/MovieCardInfo';
import Button from './Components/Button/Button';
import Textarea from './Components/TextArea/Textarea';
import Inputs from './Components/Input/input';
import ButtonSuma from './Components/ButtonSuma/ButtonSuma'
import Login from './Components/Login/Login';
import ButtonSumaClass from './Components/ButtonSuma/ButtonSumaClass';
import Inputclass from './Components/Input/inputclass';
import AxiosUl from './Components/AxiosUl/AxiosUl'
import UserTable from './Components/AxiosUl/UsersTable';
import UsersTableFuncional from './Components/AxiosUl/UsersTableFuncional';
import useMultiply from './Components/UseMultiply/useMultiply';




import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAddressBook} from '@fortawesome/free-solid-svg-icons';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


import Links from './Components/Links/Links';
import SwitchComponent from './Components/SwitchComponent/SwitchComponent';

const App=() =>{
  const movieCards= MovieCardInfo;
  const [
    multiplier,
    multiply,
    incrementMultiplier
  ] = useMultiply(3);
  return (
    <BrowserRouter>
      <Links></Links>
      <SwitchComponent></SwitchComponent>
    </BrowserRouter>
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


 Para agregar iconos:
 yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/react-fontawesome
 * 
 */
