import React, {useState} from 'react';
import './Login.css';

const usuario = [{
    user: "anto@anto.com",
    password: "Hola1234"
}]

const Login = () =>{
    const [acceso,setAcceso]= useState("");
    const [clave,setClave]= useState("");
    const [correo,setCorreo]=useState("");
    const [errores,setErrores] = useState([]);
    const [clase, setClase] = useState("respuesta");

    const saveUser = event =>{
        setCorreo(event.target.value)
    }

    const savePass = event =>{
        setClave(event.target.value)
    }

    const validacion = ()=>{
        setErrores([])
        setErrores([...errores,"Acceso permitido"])
        setErrores([...errores,"Clave Incorrecta"])
        let index = usuario.findIndex(user =>{
            return user.user == correo}
            );
        if (index>-1){
            if (usuario[index].password == clave){
                setClase("respuesta overlay")
                setAcceso("Acceso permitido")
            }
            else{
                setClase("respuesta overlay")
                setAcceso("Clave Incorrecta")
            }
        }
        else{
            setClase("respuesta overlay")
            setAcceso("Error en mail")
        };
    }

    return(
        <form className="formulario">
            <label>E-mail
            <input type="email" placeholder="nombre@mail.com" name="email" id="mail" onBlur={saveUser}></input></label>
            <label>Password
            <input type="password" placeholder="Password" id="clave" onBlur={savePass}></input></label>
            <button type="button" onClick={validacion}>Acceder</button>
            {(acceso === "Acceso permitido")?<span className={clase}>{acceso}</span>:""}
            <ul>
            {errores.map(er =>{
                return (<li>er</li>)
            })}
            </ul>
        </form>
    )
}

export default Login;