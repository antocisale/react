import React from 'react';
import './Textarea.css';

const Textarea = props=>{
    const contarPalabras = (event)=>{
        let cantidad = event.target.value.length;
        let contador = document.querySelector("#contador");
        contador.innerHTML = 140 - cantidad;
        if(cantidad >=130){
            contador.className +=" danger";
        }else{
            contador.className -=" danger";
        }
    }

    return(
        <div className="textarea-container">
            <header className="header">Compose New Tweet</header>
            <textarea onChange={contarPalabras} maxLength="140" rows="10" cols="25" placeholder="What are you thinking?"></textarea>
            <div className="contador-container">
                <span id="contador" >140</span>
            </div>
        </div>
    )
};

export default Textarea;


/**/