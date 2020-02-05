import React from 'react';
import Axios from 'axios';

const baseUrl = "https://jsonplaceholder.typicode.com/users"

const handleError = err => {
    alert(`Hubo un error. ${err}`);
};
export default class UserTable extends React.Component{
    state={
        users: []
    }
    componentDidMount = async()=>{
        try {
        const res = await Axios.get(baseUrl);
                this.setState({users: res.data});
        } catch (err) {
            handleError();
        }

    }
    render(){
        return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>ADRESS</th>
                    <th>PHONE</th>
                    <th>WEBSITE</th>
                    <th>COMPANY</th>
                </tr>
            </thead>
            <tbody>
                
                {this.state.users.map(user =>{
                    return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street} - {user.address.suite}, {user.address.city}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            </tr>
            })}
            </tbody>
        </table>
        )
    }
    }