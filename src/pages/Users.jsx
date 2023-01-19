import React from "react";
import { NavLink } from "react-router-dom";
import HorizontalNav from '../components/HorizontalNav';
import VerticalNav from '../components/VerticalNav';
import "../styles/pages/users.css"


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
                <NavLink className="lien-user"  to= {"/Home/12"}>Karl</NavLink> 
                <NavLink className="lien-user"  to= {"/Home/18"}>Cecilia</NavLink>
                {/* <NavLink className="lien-user"  to= {"/Home/" +12}>Karl</NavLink> 
                <NavLink className="lien-user"  to= {"/Home/" +18}>Cecilia</NavLink>  */}
            </div>
        </div>
        </div>
    )
}

export default Users;