import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./Login.module.css";


const Login = () => {
    const [info, setInfo] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();

    const handleChange = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("/user/login", {
            ...info,
        })
        .then(response => {
            localStorage.setItem("datoSesion",JSON.stringify(response.data))
            navigate("/profile")
        })
        .catch(err => alert(err))
    }

    return (
        <div className={style.container}>
            <div className={style.formLogin}>
                <div className={style.containerButtonClose}>
                    <button className={style.buttonClose} onClick={() => navigate("/")}>X</button>
                </div>
                <div className={style.header}>
                    <span>Iniciar Sessión</span>
                </div>
                <div className={style.info}>
                    <label htmlFor="">Email</label>
                    <input name="email" type="text" placeholder='Correo Electronico:*' onChange={(event) => handleChange(event)}/>
                </div>
                <div className={style.info}>
                    <label htmlFor="">Password</label>
                    <input name="password" type="text" placeholder='Contraseña:*' onChange={(event) => handleChange(event)}/>
                </div>
                <div className={style.containerButtonLogin}>
                    <button className={style.buttonLogin} onClick={(event) => handleSubmit(event)}>Ingresar</button>
                </div>
            </div>
        </div>
    );
};

export default Login;