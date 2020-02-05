import React from 'react';


export default class ButtonSumaClass extends React.Component{
    state = {
        counter:100,
    }
    sumar = (event)=>{
        const chars= this.state.counter
        this.setState({counter: chars+1})
    }
    render(){

        const {counter} = this.state;
        return(
            <div>
                <button onClick={this.sumar}></button>
                <span>{counter}</span>
            </div>
        )
    }
}
