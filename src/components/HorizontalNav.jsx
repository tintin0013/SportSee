import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/components/horizontalNav.css";


/**
 * @file react component for the horizontal navigation bar
 * @returns {JSX.Element} horizontal navigation bar
 */

const HorizontalNav = () => {
	return (
		<div className="horizontal-nav">
			<img src={logo} alt="Logo SportSee" className="logo" />
			<NavLink className="navlink" to="/">
				Accueil
			</NavLink>
			<NavLink className="navlink" to="#">
				Profil
			</NavLink>
			<NavLink className="navlink" to="#">
				Réglage
			</NavLink>
			<NavLink className="navlink" to="#">
				Communauté
			</NavLink>
		</div>
	);
};

export default HorizontalNav;