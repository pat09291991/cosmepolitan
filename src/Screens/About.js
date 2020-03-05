import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const About = () => {
	return(
		<div className="container-fluid" id="about">
			<div id="aboutImage"></div>
			<div className="m-5">
				<h1 style={{marginBottom: "70px", color: "#ffa41b"}}>ABOUT <b>COSMEPOLITAN</b></h1>
				<h5 className="text-info mb-4">Just focus on Sales and Marketing of your own cosmetic brand.</h5>
				<p>We are the Beauty-Tech Company, utilizing the data of OEM/ODM cosmetic manufacturers and products.<br />
We offer ‘One-stop Total Support Solution’(including Planning, Production, R&D, Logistics, Licensing, etc.) to overseas
clients in order that they are able to sell their own “Made in Korea” cosmetic products in their local.<br />
With Cosmepolitan, make your own “Made in Korea” cosmetics with simple decision-making only.</p>
			</div>

		</div>
	)
}

export default About;