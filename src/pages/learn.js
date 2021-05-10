import React from "react";
import Header from "../common/header";
import Timeline from "../components/timeline";

function Learn() {
	const items = [
		{
			title: "Vincent Van Gogh was born in Groot-Zundert, Netherlands",
			date: "March 30 1853",
		},
		{
			title: "Van Gogh was sent to boarding school in Zevenbergen",
			date: "1864-1866",
		},
		{
			title: "Van Gogh was employed by the Hague gallery",
			date: "July 1869",
		},
		{
			title: "Van Gogh was transferred to London",
			date: "June 1873",
		},
		{
			title: "Van Gogh was transferred to Paris",
			date: "1875",
		},
		{
			title:
				"Van Gogh begins devoting his life to the evangelization of the poor in the town of Borinage, Belgium",
			date: "1876 - 1880",
		},
		{
			title:
				"Van Gogh relocates to Brussels and begins learning the skills needed to become an artist",
			date: "1880 - 1884",
		},
		{
			title: "Completion of The Potato Eaters",
			date: "April 1885",
		},
		{
			title:
				"Van Gogh moves to Paris. Discovers Impressionists and Post Impressionists",
			date: "March 1886",
		},
		{
			title: "Completion of Self Portrait with Straw Hat",
			date: "Summer 1887",
		},
		{
			title: "Van Gogh moves to Arles to create a school of art",
			date: "February 1888",
		},
		{
			title:
				"Van Gogh paints the famous sunflower pieces and begins suffering from mental problems",
			date: "1888",
		},
		{
			title: "Completion of Starry Night Over the Rhone",
			date: "September 1888",
		},
		{
			title:
				"Completion of The Café Terrace on the Place du Forum, Arles, at Night",
			date: "September 1888",
		},
		{
			title: "Completion of Vincent's Bedroom in Arles",
			date: "October 1888",
		},
		{
			title:
				"Van Gogh cuts off a portion of his ear and commits himself to a mental asylum in Saint Rémy",
			date: "December 1888",
		},
		{
			title: " Van Gogh ends his friendship with Gauguin",
			date: "December 1888",
		},
		{
			title: "Completion of Irises",
			date: "May 1889",
		},
		{
			title: "Completion of Starry Night",
			date: "June 1889",
		},
		{
			title: "Completion of Almond Blossom",
			date: "February 1890",
		},
		{
			title:
				"Van Gogh leaves Saint Rémy and begins contacting his brother Theo",
			date: "May 1890",
		},
		{
			title:
				"Leaves the asylum to begin care in Auvers-sur-Oise under Dr. Paul Gachet, who was recommended by Camille Pissarro",
			date: "May 1890",
		},
		{
			title:
				"Vincent Van Gogh dies of a self-inflicted gunshot at 37 years old",
			date: "June 29 1890",
		},
		{
			title: "Vincent Van Gogh was buried on July 30 at Auvers-sur-Oise",
			date: "June 30 1890",
		},
	];

	return (
		<>
			<Header />

			<Timeline items={items} />
		</>
	);
}

export default Learn;
