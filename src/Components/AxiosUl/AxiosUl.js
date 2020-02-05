import React from 'react';
import Axios from 'axios';

const baseUrl = "https://jsonplaceholder.typicode.com/todos";

const handleError = err => {
        alert(`Hubo un error. ${err}`);
    };

export default class AxiosUl extends React.Component{
    state={
        tarea: []
    }
    componentDidMount = async()=>{
        try {
        const res = await Axios.get(baseUrl);
                this.setState({tarea: res.data});
        } catch (err) {
            handleError();
        }
    
    }
    render(){
        const estadoTarea = tarea=>{
            if (tarea){
                return "completa";
            }else{
                return "incompleta"
            }
        }
        return(
        <table>
            <thead>
                <tr>
                    <th>USER</th>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>COMPLETED</th>
                </tr>
            </thead>
            <tbody>
                
                {this.state.tarea.map(tarea =>{
                    return <tr key={tarea.id}><td>{tarea.userId}</td>
                                <td>{tarea.id}</td>
                                <td>{tarea.title}</td>
                                <td>{estadoTarea(tarea.completed)}</td></tr>
                })}
            </tbody>
        </table>
        )
    }
}