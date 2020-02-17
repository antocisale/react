import React, {useState, useEffect} from 'react';
import Axios from 'axios';


const baseUrl = "https://jsonplaceholder.typicode.com/users"
const handleError = err => {
    alert(`Hubo un error. ${err}`);
};
const UsersTableFuncional = props =>{
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        componentDidMount();
    },[])

    const componentDidMount = async()=>{
        try {
        const res = await Axios.get(baseUrl);
                setUsers(res.data);
        } catch (err) {
            handleError();
        }

    }

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
                {users.map(user =>{
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

export default UsersTableFuncional;
