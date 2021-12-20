import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Home.module.css";

const Home = () => {
    return (
        <div className={style.container}>
            <nav className={style.navbar}>
                <Link to="/form-developer-test" className={style.link}>
                    <span>Formulario</span>
                </Link>
                <Link to="/login" className={style.link}>
                    <span>Login</span>
                </Link>
            </nav>
        </div>
    );
};

export default Home;