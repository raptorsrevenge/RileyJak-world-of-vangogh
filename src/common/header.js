import React from "react";
import Nav from "./nav";
import "../styles/header.css";

import logo from "../assets/photos/logo.png";

function Header() {
	return (
		<div>
			<img src={logo} alt="Van Gogh's signature" className="logo" />
			<Nav />
		</div>
	);
}

export default Header;
