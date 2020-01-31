import React, { useState } from 'react';

const Inputs = ()=>{
    const [counter,setCounter] = useState("");
    const textWriter = (event)=>{
        let valor = event.target.value;
        setCounter(valor);
    }

    const colorChange = e =>{
        if (e.key === "Enter"){
            e.target.style.background = e.target.value;
            e.target.value = "";

        }
    }

    return(
        <div>
            <input type="text" placeholder="escriba su texto aqui" onChange={textWriter}></input>
            <input type="text" placeholder="escriba un color aqui" onKeyDown={colorChange}></input>
            <span>{counter}</span>
        </div>
    )
}

export default Inputs;