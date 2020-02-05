import React from 'react';


export default class Inputclass extends React.Component{
    state = {
        counter: ""

    }
    textWriter = (event) =>{
        let valor = event.target.value;
        this.setState({counter: valor });
    }
    colorChange = e =>{
        if (e.key === "Enter"){
            e.target.style.background = e.target.value;
            e.target.value = "";

        }
    }
    render(){
        return(
            <div>
                <input type="text" placeholder="escriba su texto aqui" onChange={this.textWriter}></input>
                <input type="text" placeholder="escriba un color aqui" onKeyDown={this.colorChange}></input>
                <span>{this.state.counter}</span>
            </div>
        )

    }
}
