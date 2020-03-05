import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const LandingPage = () => {
	return(
		<div className="container-fluid d-flex align-items-center justify-content-end" id="landingPage">
			<div className="pr-5">
				<h1 className="mb-0" style={{fontWeight: "bolder", color: "#ffa41b"}}>COSME</h1>
				<h1 style={{color: "#ffa41b"}}>POLITAN</h1>
				<p className="text-white">Easy-to-Make Cosmetics in Korea</p>
			</div>
		</div>
	)
}

export default LandingPage;