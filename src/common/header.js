import React from "react";
import Nav from "./nav";
import "../styles/header.css";

function Header() {
	return (
		<div>
			<h1 className="logo">Vangoh</h1>
			{/* turn that logo into svg maybe mask his art work into his name  */}
			<Nav />
		</div>
	);
}

export default Header;
