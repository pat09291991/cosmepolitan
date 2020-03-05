import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SupportService = () => {
	return(
		<div className="container-fluid pb-5" id="supportService">
			<div className="m-5">
				<h1 style={{marginBottom: "40px", color: "#ffa41b"}}>ONE-STOP <b>TOTAL SUPPORT SERVICE</b></h1>
				<p style={{marginBottom: "50px"}}>We support client on the entire process (Planning, Design, R&D, Production, Quality Control, Trading)<br />
				in order to produce cosmetics with simple decision-making only.</p>
			</div>
				<div className="d-flex justify-content-between mb-5">
					<div id="supportServiceImage"></div>
				</div>
				<div className="text-center mb-5">
				<h5 style={{zIndex: "33"}} className="subtitle fancy"><b>COSME</b>POL<b>I</b>TAN</h5>
				</div>
				<div className="row px-3">
					<div className="col-lg-4" id="bigdata">
						<h4 style={{marginBottom: "20px", color: "#ffa41b"}}>BIG-DATA SYSTEM OF <b>COSMEPOLITAN</b></h4>
						<p>To create new business value,<br />
						Cosmepolitan devises a customized production<br />
						strategy based on the Big-data technology<br />
						by understanding client’s requests.</p>
					</div>
					<div className="col-lg-8 row px-5 justify-content-between">
						<div>
							<ul className="list-group">
								<li>Manufacturer Data</li>
								<li>Products Data</li>
								<li>Forwarder Data</li>
							</ul>
						</div>
						<div>
						<ul className="list-group">
							<li>Ingredients Data</li>
							<li>Design Data</li>
							<li>License Agency Data by Country</li>
						</ul>
						</div>
						<div>	
						<ul className="list-group">
							<li>Package Data</li>
							<li>Trading Data</li>
						</ul>
						</div>
					</div>

				</div>
	</div>
	)
}

export default SupportService;