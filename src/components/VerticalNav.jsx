import React from "react";
import { NavLink } from "react-router-dom";
import yoga from "../assets/icon-yoga.png";
import swim from "../assets/icon-swim.png";
import bike from "../assets/icon-bike.png";
import dumbell from "../assets/icon-dumbell.png";
import "../styles/components/verticalNav.css";


const VerticalNav = () => {
	return (
		<div className="vertical-nav">
			<NavLink to="#">
				<img src={yoga} alt="logo yoga" className="vertical-icon" />
			</NavLink>
			<NavLink to="#">
				<img src={swim} alt="logo swim" className="vertical-icon" />
			</NavLink>
			<NavLink to="#">
				<img src={bike} alt="logo bike" className="vertical-icon" />
			</NavLink>
			<NavLink to="#">
				<img src={dumbell} alt="logo dumbell" className="vertical-icon" />
			</NavLink>
			<div className="copyright">Copyright, Sportsee 2020</div>
		</div>
	);
};

export default VerticalNav;