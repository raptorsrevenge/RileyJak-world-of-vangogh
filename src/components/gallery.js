import React from "react";
import Slider from "react-animated-slider";
import horizontalCss from "react-animated-slider/build/horizontal.css";
import "../styles/gallery.css";

// art work
import Potato from "../assets/photos/The Potato Eaters.jpg";
import Hat from "../assets/photos/Grey Hat.jpg";
import Basket from "../assets/photos/Basket of Pansies.jpg";
import Bank from "../assets/photos/Bank of the Seine.jpg";
import Pink from "../assets/photos/Pink Peach Trees.jpg";
import Cafe from "../assets/photos/Cafe Terrace at Night.jpeg";
import Bedroom from "../assets/photos/The Bedroom.jpeg";
import Bandaged from "../assets/photos/Bandaged Ear.jpg";
import Sunflowers from "../assets/photos/Sunflowers.jpg";
import Starry from "../assets/photos/The Starry Night.jpeg";
import Almond from "../assets/photos/Almond Blossom.jpeg";
import View from "../assets/photos/View of the Alpilles.jpg";
import Auvers from "../assets/photos/View of Auvers.jpg";
import Tree from "../assets/photos/Tree Roots.jpg";
import Landscape from "../assets/photos/Landscape at Twilight.jpg";

function Gallery() {
	const content = [
		{
			title: "The Potato Eaters",
			description: "April-May 1885",
			image: Potato,
		},
		{
			title: "Self-Portrait with Grey Felt Hat",
			description: "September - October 1887",
			image: Hat,
		},
		{ title: "Basket of Pansies", description: "May 1887", image: Basket },
		{
			title: "Bank of the Seine",
			description: "May-July 1887",
			image: Bank,
		},
		{
			title: "Pink peach trees ('Souvenir de Mauve')",
			description: "April - May 1888",
			image: Pink,
		},
		{
			title: "Cafe Terrace at Night",
			description: "September 1888",
			image: Cafe,
		},
		{ title: "The Bedroom", description: "October 1888", image: Bedroom },
		{
			title: "Self-Portrait with Bandaged Ear",
			description: "January 1889",
			image: Bandaged,
		},
		{ title: "Sunflowers", description: "January 1889", image: Sunflowers },
		{ title: "The Starry Night", description: "June 1889", image: Starry },
		{
			title: "Almond Blossom",
			description: "February 1890",
			image: Almond,
		},
		{ title: "View of the Alpilles", description: "1890", image: View },
		{
			title: "View of Auvers",
			description: "May-June 1890",
			image: Auvers,
		},
		{ title: "Tree Roots", description: "July 1890", image: Tree },
		{
			title: "Landscape at Twilight",
			description: "June 1890",
			image: Landscape,
		},
	];
	return (
		<>
			<Slider classNames={horizontalCss} autoplay={5000}>
				{content.map((slide, index) => (
					<div key={index} className="show">
						<div className="text">
							<h1 className="name">{slide.title}</h1>
							<p className="date">{slide.description}</p>
						</div>

						<img
							className="art"
							src={slide.image}
							alt={`${slide.title} by Van Gogh - ${slide.description}`}
						/>
					</div>
				))}
			</Slider>
		</>
	);
}

export default Gallery;
