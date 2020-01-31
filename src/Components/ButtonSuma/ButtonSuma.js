import React, { useState } from 'react';

const ButtonSuma = ()=>{
    const [counter,setCounter] = useState(0);
    const sumar = (event)=>{
        let valor = counter + 1;
        setCounter(valor);
    }

    return(
        <div>
            <button onClick={sumar}>Suma</button>

            <span>{counter}</span>
        </div>
    )
}

export default ButtonSuma;