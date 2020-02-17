import React, {useState} from 'react';

const useMultiply = (value =2)=>{
    const [multiplier, setMultiplier] = useState(2);

    const multiply = ()=> multiplier * value;
    const incrementMultiplier = () => multiplier * multiplier;

    return [multiplier, multiply]
}

export default useMultiply;