import React from "react";
import { Link } from "react-router-dom";
import Video from "../assets/videos/vangoh.mp4";
import "../styles/landing.css";

function Landing() {
	return (
		<>
			<h1 className="title">The World of Van Gogh</h1>
			<div className="enter-button">
				<Link className="enter-button-text" to="/look">
					Enter
				</Link>
			</div>

			<div className="video">
				<video src={Video} autoplay="true" />
			</div>
		</>
	);
}

export default Landing;
