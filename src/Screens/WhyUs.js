import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Card } from 'react-bootstrap';

const WhyUs = () => {
	return(
		<div className="container-fluid pb-5" id="whyUs">
			<div className="m-5">
				<h1 style={{marginBottom: "70px", color: "#ffa41b"}}>WHY <b>WITH US</b></h1>
			</div>
			<div className="row">
				<Card className="col-lg-6 justify-content-center d-flex align-items-center text-center pt-5">
					  <Card.Img variant="top" style={{ height: "300px", width: "300px" }} src="https://via.placeholder.com/300x300?fbclid=IwAR3tYJl8dhTKMqMjb2FHn66J1Z79CEWlqu4nvBExg5GqjE0KOMWz-Pfyh8o" />
					  <Card.Body>
					    <Card.Title className="mb-2"><b>Made In Korea</b></Card.Title>
					    <Card.Text style={{ fontSize: "20px"}}>
						Clients can produce Cosmetics with the world class<br />
						manufacturers in Korea who lead the advanced trend of<br />
						K-beauty and Korea.
					    </Card.Text>
					  </Card.Body>
					</Card>
					<Card className="col-lg-6 justify-content-center d-flex align-items-center text-center pt-5">
					  <Card.Img variant="top" style={{ height: "300px", width: "300px" }} src="https://via.placeholder.com/300x300?fbclid=IwAR3tYJl8dhTKMqMjb2FHn66J1Z79CEWlqu4nvBExg5GqjE0KOMWz-Pfyh8o" />
					  <Card.Body>
					    <Card.Title className="mb-2"><b>One-Stop Total Support</b></Card.Title>
					    <Card.Text style={{ fontSize: "20px"}}>
						We support clients on the entire process (Planning,<br />
						Design, R&D, Production, Quality Control, Trading, etc.).
					    </Card.Text>
					  </Card.Body>
					</Card>
					<Card className="col-lg-6 justify-content-center d-flex align-items-center text-center pt-5">
					  <Card.Img variant="top" style={{ height: "300px", width: "300px" }} src="https://via.placeholder.com/300x300?fbclid=IwAR3tYJl8dhTKMqMjb2FHn66J1Z79CEWlqu4nvBExg5GqjE0KOMWz-Pfyh8o" />
					  <Card.Body>
					    <Card.Title className="mb-2"><b>Multilingual Communication</b></Card.Title>
					    <Card.Text style={{ fontSize: "20px"}}>
						Multilingual personnel support clients<br />
						on communications of planning the process of the cosmetic<br />
						production with simple decision-making. 
					    </Card.Text>
					  </Card.Body>
					</Card>
					<Card className="col-lg-6 justify-content-center d-flex align-items-center text-center pt-5">
					  <Card.Img variant="top" style={{ height: "300px", width: "300px" }} src="https://via.placeholder.com/300x300?fbclid=IwAR3tYJl8dhTKMqMjb2FHn66J1Z79CEWlqu4nvBExg5GqjE0KOMWz-Pfyh8o" />
					  <Card.Body>
					    <Card.Title className="mb-2"><b>Professional Personnel</b></Card.Title>
					    <Card.Text style={{ fontSize: "20px"}}>
						We have the professional personnel for the entire process<br />
						(Planner, Researcher, Quality Control Manager, Trading<br />
						Manager, Licensing Manager by Countries).
					    </Card.Text>
					  </Card.Body>
					</Card>
			</div>
			
		</div>
	)
}

export default WhyUs;