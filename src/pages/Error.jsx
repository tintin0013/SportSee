import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalNav from '../components/HorizontalNav';
import logo from "../assets/logo.png";
import "../styles/pages/error.css"


/**
 * React component to display the error page
 * @returns {JSX.Element}
 */

const Error = () => {

    return (
        <div className="body-user">
            <header className="header--error">
            </header>
            <HorizontalNav />
            <main className="main-error">
                <div className="error-nbr">404
                </div>
                <img src={logo} alt="Logo SportSee" className="logo-404" />
                <div className="error-oups">
                    Oupsss! La page que vous demandez n'existe pas.
                </div>
                <NavLink to="/" className="navigation">
                    <div className="error-return">Retourner sur la page d'accueil</div>
                </NavLink>
            </main>
        </div>
    );
};

export default Error;


