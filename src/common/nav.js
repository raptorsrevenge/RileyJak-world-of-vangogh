import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import "../styles/nav.css";

function Nav() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};
	const closeMenu = () => {
		setNavbarOpen(false);
	};

	return (
		<nav className="navBar">
			<button className="button" onClick={handleToggle}>
				{navbarOpen ? (
					<MdClose className="icon1" />
				) : (
					<FiMenu className="icon2" />
				)}
			</button>

			<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
				<div className="aContainer">
					<Link className="link" to="/look" onClick={() => closeMenu()}>
						<p className="nav-link">Look</p>
					</Link>
					<Link className="link" to="/write" onClick={() => closeMenu()}>
						<p className="nav-link">Write</p>
					</Link>
					<Link className="link" to="/read" onClick={() => closeMenu()}>
						<p className="nav-link">Read</p>
					</Link>
					<Link className="link" to="/learn" onClick={() => closeMenu()}>
						<p className="nav-link">Learn</p>
					</Link>
				</div>
			</ul>
		</nav>
	);
}

export default Nav;
