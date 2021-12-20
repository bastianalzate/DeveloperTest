import React from 'react';
import style from "./Profile.module.css";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    let datosSession = JSON.parse(localStorage.getItem("datoSesion"))
    const handleClose = () => {
        localStorage.removeItem("datoSesion")
        navigate("/")
    }

    return (
        <div className={style.container}>
            <div className={style.profile}>
                <div className={style.photoContainer}>
                    <div className={style.photo}></div>
                </div>
                <div className={style.infoContainer}> 
                    <span>usuario: {datosSession.username}</span>
                    <span>nombre: {datosSession.name}</span>
                    <span>correo: {datosSession.email}</span>
                    <span>codigo cliente: {datosSession.codeClient}</span>
                    <span>id: {datosSession.id}</span>
                    <span>telefono: {datosSession.phone}</span>
                    <span>cargo: {datosSession.position}</span>
                </div>
                
                <div className={style.containerButtonCloseSession}>
                    <button className={style.buttonCloseSession} onClick={(event) => handleClose(event)}>Cerrar Session</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;