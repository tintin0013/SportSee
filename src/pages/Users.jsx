import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalNav from '../components/HorizontalNav';
import VerticalNav from '../components/VerticalNav';
import Switch from "../components/Switch";
import "../styles/pages/users.css"

/**
 * @file React component to display the users page
 * @returns {JSX.Element} users page
 */

const Users = () => {

    return (
        <div className="body-user">
            <HorizontalNav />
            <VerticalNav />
            <div className="page-users">
                <h2 className="h2-user">
                    choisir un profil
                </h2>
                <div className="choix-user">
                    <NavLink className="lien-user" to={"/Home/12"}>Karl</NavLink>
                    <NavLink className="lien-user" to={"/Home/18"}>Cecilia</NavLink>
                </div>
                <Switch />
            </div>
        </div>
    )
}

export default Users;