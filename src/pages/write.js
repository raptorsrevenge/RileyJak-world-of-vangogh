import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/header";

function Write() {
	return (
		<>
			<Header />
			<h1>Write</h1>
			<h3>Dear Vincent,</h3>
			<input type="textarea" placeholder="write your letter here..."></input>
			<button>
				<Link to="/read">Send</Link>
			</button>
		</>
	);
}

export default Write;
