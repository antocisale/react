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
    let clase = "respuesta";

    const saveUser = event =>{
        setCorreo(event.target.value)
    }

    const savePass = event =>{
        setClave(event.target.value)
    }

    const validacion = ()=>{
        
        let index = usuario.findIndex(user =>{
            return user.user == correo}
            );
        if (index>-1){
            if (usuario[index].password == clave){
                clase += " overlay";
                setAcceso("Acceso permitido")
            }
            else{
                clase += " overlay";
                setAcceso("Clave Incorrecta")
            }
        }
        else{
            clase += " overlay";
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
            <span className={clase}>{acceso}</span>
        </form>
    )
}

export default Login;