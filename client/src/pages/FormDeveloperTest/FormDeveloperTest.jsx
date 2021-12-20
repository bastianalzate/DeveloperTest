import React, { useState } from 'react';
import axios from "axios";
import Swal from 'sweetalert2'
import style from "./FormDeveloperTest.module.css";

const FormDeveloperTest = () => {
    const [info, setInfo] = useState({
        codeClient: "xmxwebdemo2",
        username: "XMX",
        name: "",
        position: "",
        phone: "+57 ",
        email: "",
        cellphone: ""
    })

    const [error, setError] = useState({
        username: "",
        name: "",
        position: "",
        phone: "",
        email: "",
    })

    const validateError = (info) => {
        const error = {};

        // Validacion de username
        if(info.username.charAt(0) !== "X" || info.username.charAt(1) !== "M" || info.username.charAt(2) !== "X") error.username = "El usuario debe iniciar con XMX"
        if(info.username.charAt(0) === "X" && info.username.charAt(1) === "M" && info.username.charAt(2) === "X" && info.username.length < 6 && info.username.length > 3) error.username = "La longitud debe ser de 6 caracteres"
        if(info.username.charAt(0) === "X" && info.username.charAt(1) === "M" && info.username.charAt(2) === "X" && info.username.length > 6) error.username = "La longitud es mayor a 6 caracteres"

        // Validacion de nombre
        if(info.name.length > 1 && info.name.length < 5) error.name = "El nombre debe ser mayor a 5 caracteres y menor a 15 caracteres";
        if(info.name.length > 15) error.name = "El nombre no puede superar 15 caracteres de longitud";
        
        // Validacion de cargo
        if(info.position.length > 1 && info.position.length < 5) error.position = "La longitud debe ser mayor a 5 caracteres y menor a 10 caracteres";
        if(info.position.length > 10) error.position = "No puedes superar el maximo de 10 caracteres";

        // Validacion de telefono
        if(info.phone.charAt(0) !== "+" || info.phone.charAt(1) !== "5" || info.phone.charAt(2) !== "7") error.phone = "Debe iniciar con +57 seguido de tu numero";
        if(info.phone.length > 4 && info.phone.length < 11) error.phone = "El numero debe contener 7 digitos";
        if(info.phone.length > 11) error.phone = "El numero tiene mas de 7 digitos";

        // Validacion Email
        if(!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(info.email) && info.email.length > 1) error.email = "El email no es valido"

        return error
    }

    const handleChange = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })

        setError(validateError({
            ...info,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!error.username && !error.email && !error.name && !error.position && info.username.length === 6 && info.email.length > 6 && info.name.length > 6 && info.position.length > 6){
            const password = passwordGenerator();
            axios.post("http://localhost:3001/user/create", {
                ...info,
                password
            })
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario creado con exito!',
                    text: 'Te invitamos a copiar y guardar el siguiente codigo el cual es tu nueva contraseña! '+password,
                    footer: '<a href="">Quieres iniciar sessión?</a>'
                })
                
            })
            .catch(err => console.log(err))
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Debes rellenar todos los campos',
                text: 'Te invitamos a completar todos los campos!',
            })
        }
    }

    const passwordGenerator = () => {
        const chars = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        const finish = 8;
        let randomstring = "";

        for (var i = 0; i < finish; i++) {
            var randomSelection = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(randomSelection,randomSelection + 1);
        }
        return randomstring;
    }

    


    return (
        <div className={style.containerFormDeveloper}>
            <div className={style.form}>
                <div className={style.divHeader}>
                    <span className={style.infoContact}>Información de contacto</span>
                    <button className={style.buttonClose}>X</button>
                </div>

                <div className={style.divInfo}>
                    <span>Código de cliente:</span>
                    <input type="text" value={info.codeClient} disabled/>
                </div>

                <div className={style.divInfo}>
                    <span>Usuario:*</span>
                    <input className={error.username && style.errorBorder} name="username" type="text" onChange={handleChange} value={info.username}/>
                </div>
                {
                    error.username && (<div className={style.error}><span>{error.username}</span></div>)
                }

                <div className={style.divInfo}>
                    <span>Nombre:*</span>
                    <input className={error.name && style.errorBorder} name="name" type="text" placeholder='Nombre:*' onChange={handleChange} />
                </div>
                {
                    error.name && (<div className={style.error}><span>{error.name}</span></div>)
                }
               

                <div className={style.divInfo}>
                    <span>Cargo:*</span>
                    <input className={error.position && style.errorBorder} name="position" type="text" placeholder='Cargo:*' onChange={handleChange} />
                </div>
                {
                    error.position && (<div className={style.error}><span>{error.position}</span></div>)
                }

                <div className={style.divInfo}>
                    <span>Teléfono:*</span>
                    <input className={error.phone && style.errorBorder} name="phone" type="text" placeholder='Teléfono:*' onChange={handleChange} value={info.phone}/>
                </div>
                {
                    error.phone && (<div className={style.error}><span>{error.phone}</span></div>)
                }

                <div className={style.divInfo}>
                    <span>Correo Electrónico:*</span>
                    <input className={error.email && style.errorBorder} name="email" type="text" placeholder='Correo Electronico:*' onChange={handleChange} />
                </div>
                {
                    error.email && (<div className={style.error}><span>{error.email}</span></div>)
                }

                <div className={style.divInfo}>
                    <span>Número celular:*</span>
                    <input name="cellphone" type="cellphone" placeholder='Numero celular:*' onChange={handleChange} />
                </div>
                

                <div className={style.divInfo}>
                    <span>Tipo de contacto:*</span>
                   
                    <select name="typeContact" id="">
                        <option value="none">--Seleccione tipo de contacto--</option>
                        <option value="contacto-comercial">Contacto comercial</option>
                        <option value="pago-de-facturas">Pago de facturas</option>
                        <option value="representante-legal">Representante legal</option>
                        <option value="retiro-de-mercaderia">Retiro de mercaderia</option>
                    </select>
                </div>

                <div className={style.divTypeCheck}>
                    <div>
                        <span>Autorizado para acceder a WebStore</span>
                    </div>
                    <div className={style.inputTypeCheck}>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>

                <div className={style.divTypeCheck}>
                    <div>
                        <span>Autorizado para crear ordenes</span>
                    </div>
                    <div className={style.inputTypeCheck}>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>

                <div className={style.divTypeCheck}>
                    <div>
                        <span>¿Desea que se envié la información de acceso al usuario?</span>
                    </div>
                    <div className={style.inputTypeCheck}>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>
                
                <div className={style.buttonContainer}>
                    <button onClick={(event) => handleSubmit(event)}>Aceptar</button>
                    <button >Cancelar</button>
                </div>

            </div>
        </div>
    );
};

export default FormDeveloperTest;