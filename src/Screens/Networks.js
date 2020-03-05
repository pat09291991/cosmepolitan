import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Networks = () => {
	return(
		<div className="container-fluid pb-5" id="networks">
			<div className="m-5">
				<h1 style={{marginBottom: "40px", color: "#ffa41b"}}>MANUFACTURER <b>NETWORKS</b></h1>
				<p style={{marginBottom: "50px"}}>Cosmepolitan has over 1,000 Korean manufacturer data and the networks of the good companies that have<br />
				experienced to export to foreign countries with the certifications (CGMP, ISO 22716, etc.).<br />
				For producing high-quality cosmetics, we manage all the companies that are related to the entire process.</p>
			</div>	
				<div className="d-flex justify-content-center mx-0">
					<div  id="networksImage"></div>
				</div>
				
				<div className="row justify-content-center text-center">
					<div className="col-md-3">
						<h1 style={{fontSize: "80px"}}>80,000+</h1>
						<p>COSMETIC<br/>PRODUCT DATA</p>
					</div>
					<div className="col-md-3">
						<h1 style={{fontSize: "80px"}}>1,000+</h1>
						<p>COSMETIC<br/>MANUFACTURER DATA</p>
					</div>
					<div className="col-md-3">
						<h1 style={{fontSize: "80px"}}>132</h1>
						<p>CGMP<br/>MANUFACTURER DATA</p>
					</div>
					<div className="col-md-3">
						<h1 style={{fontSize: "80px"}}>143</h1>
						<p>ISO 22716<br/>MANUFACTURER DATA</p>
					</div>
				</div>	
		</div>
			
			
	)
}

export default Networks;