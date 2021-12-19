import React, { useState } from 'react';
import style from "./FormDeveloperTest.module.css";

const FormDeveloperTest = () => {
    const [info, setInfo] = useState({
        username: "",
        name: "",
        position: "",
        phone: "",
        email: "",
        cellphone: ""
    })

    const handleChange = (event) => {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
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
                    <input type="text" value={"xmxwebdemo2"} disabled/>
                </div>
                

                <div className={style.divInfo}>
                    <span>Usuario:*</span>
                    <input name="username" type="text" onChange={handleChange}/>
                </div>

                <div className={style.divInfo}>
                    <span>Nombre:*</span>
                    <input name="name" type="text" placeholder='Nombre:*' onChange={handleChange}/>
                </div>

                <div className={style.divInfo}>
                    <span>Cargo:*</span>
                    <input name="position" type="text" placeholder='Cargo:*' onChange={handleChange}/>
                </div>

                <div className={style.divInfo}>
                    <span>Teléfono:*</span>
                    <input name="phone" type="text" placeholder='Teléfono:*' onChange={handleChange}/>
                </div>

                <div className={style.divInfo}>
                    <span>Correo Electrónico:*</span>
                    <input name="email" type="text" placeholder='Correo Electronico:*' onChange={handleChange}/>
                </div>

                <div className={style.divInfo}>
                    <span>Número celular:*</span>
                    <input name="cellphone" type="cellphone" placeholder='Numero celular:*' onChange={handleChange}/>
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
                    <button onClick={() => passwordGenerator()}>Aceptar</button>
                    <button>Cancelar</button>
                </div>

            </div>
        </div>
    );
};

export default FormDeveloperTest;