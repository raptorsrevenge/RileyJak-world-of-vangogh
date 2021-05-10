import React from "react";
import { Link } from "react-router-dom";
import Header from "../common/header";
import wood from "../assets/photos/wood.jpeg";

import "../styles/write.css";

function Write() {
	return (
		<div>
			<Header />
			<div className="desk" style={{ background: `url(${wood})` }}>
				<div className="note">
					<h3 className="dear">Dear Van Gogh,</h3>
					<textarea
						className="text-area"
						placeholder="write your letter here..."
					></textarea>
					<h3 className="end">Yours Truly</h3>
				</div>

				<button className="send">
					<Link className="send-text" to="/read">
						Send
					</Link>
				</button>
			</div>
		</div>
	);
}

export default Write;
