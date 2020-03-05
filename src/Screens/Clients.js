import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Card, Button } from 'react-bootstrap';


const Clients = () => {
	return(
		<div className="container-fluid pb-5" id="clients">
			<div className="m-5">
				<h1 style={{marginBottom: "70px", color: "#ffa41b"}}>OUR <b>CLIENTS</b></h1>
			</div>
			<div className="container">
				<div className="row justify-content-center">
					<Card className="col-md-4 col-xm-6 justify-content-center d-flex align-items-center text-center card1">
					  <Card.Img variant="top" style={{ height: "200px", width: "200px" }} src="https://via.placeholder.com/200x200?fbclid=IwAR3tYJl8dhTKMqMjb2FHn66J1Z79CEWlqu4nvBExg5GqjE0KOMWz-Pfyh8o" />
					  <Card.Body>
					    <Card.Title className="mb-2" style={{ color: "#ffa41b" }}>Fashion Company</Card.Title>
					    <Card.Text>
					    <b>Expansion of Business<br />(Fashion to Beauty)</b>
					    </Card.Text>
					    <Card.Text>
						The well-known Japanese fashion E-commerce company produced
						cosmetic products with reflecting Korean
						trend in order to expand their business to
						beauty industry. Cosmepolitan supported
						them to focus on sales and marketing.
					    </Card.Text>
					  </Card.Body>
					</Card>

					<Card className="col-md-4 col-xm-6 justify-content-center d-flex align-items-center text-center card2">
					  <Card.Img variant="top" style={{ height: "200px", width: "200px" }} src="https://via.placeholder.com/200x200?fbclid=IwAR3tYJl8dhTKMqMjb2FHn66J1Z79CEWlqu4nvBExg5GqjE0KOMWz-Pfyh8o" />
					  <Card.Body>
					    <Card.Title className="mb-2" style={{ color: "#ffa41b" }}>Cosmetic Start-up Company</Card.Title>
					    <Card.Text>
					    <b>Young Start-up<br />Cosmetic Company</b>
					    </Card.Text>
					    <Card.Text>
							The client requested Cosmepolitan to
							produce packages and pouches in Korea
							where the production rate is better than in
							Japan. The client produced the materials
							in Japan in order to launch
							"Made in Japan" Men's Cosmetic
							in a short period of time.
					    </Card.Text>
					  </Card.Body>
					</Card>

					<Card className="col-md-4 col-xm-6 justify-content-center d-flex align-items-center text-center card3">
					  <Card.Img variant="top" style={{ height: "200px", width: "200px" }} src="https://via.placeholder.com/200x200?fbclid=IwAR3tYJl8dhTKMqMjb2FHn66J1Z79CEWlqu4nvBExg5GqjE0KOMWz-Pfyh8o" />
					  <Card.Body>
					    <Card.Title className="mb-2" style={{ color: "#ffa41b" }}>Cosmetic Distributor</Card.Title>
					    <Card.Text>
					    <b>Sales of Distributor's<br />Cosmetic Brand</b>
					    </Card.Text>
					    <Card.Text>
							The client requested Cosmepolitan for the
							branding and the product developments
							of their cosmetic brand.
							They had intended to produce cosmetics
							in Korea where the production rate is
							better than in Japan.
					    </Card.Text>
					  </Card.Body>
					</Card>

					<Card className="col-md-4 col-xm-6 justify-content-center d-flex align-items-center text-center card4">
					  <Card.Img variant="top" style={{ height: "200px", width: "200px" }} src="https://via.placeholder.com/200x200?fbclid=IwAR3tYJl8dhTKMqMjb2FHn66J1Z79CEWlqu4nvBExg5GqjE0KOMWz-Pfyh8o" />
					  <Card.Body>
					    <Card.Title className="mb-2" style={{ color: "#ffa41b" }}>E-Commerce Company</Card.Title>
					    <Card.Text>
					    <b>New Brand Collaboration</b>
					    </Card.Text>
					    <Card.Text>
							Cosmepolitan collaborated with the client
							on developing a new cosmetic brand
							utilizing the customer database of them
							and Cosmepolitan's database of
							OEM/ODM manufacturer and products.
							The client manages the sales and online
							marketing via their channel.
					    </Card.Text>
					  </Card.Body>
					</Card>

					<Card className="col-md-4 col-xm-6 justify-content-center d-flex align-items-center text-center card5">
					  <Card.Img variant="top" style={{ height: "200px", width: "200px" }} src="https://via.placeholder.com/200x200?fbclid=IwAR3tYJl8dhTKMqMjb2FHn66J1Z79CEWlqu4nvBExg5GqjE0KOMWz-Pfyh8o" />
					  <Card.Body>
					    <Card.Title className="mb-2" style={{ color: "#ffa41b" }}>Existing Cosmetic Brand</Card.Title>
					    <Card.Text>
					    <b>Development of New line of goods</b>
					    </Card.Text>
					    <Card.Text>
					    	The well-known Japanese fashion
							Cosmepolitan supported the client on
							developing a new product line with the numerous
							network data and the communication
							abilities with various countries in order to
							satisfy on the client's several requirements
							(Producing materials in Korea and packages
							in China, Designing products in Korea, etc.).
					    </Card.Text>
					  </Card.Body>
					</Card>

					<Card className="col-md-4 col-xm-6 justify-content-center d-flex align-items-center text-center card6">
					  <Card.Img variant="top" style={{ height: "200px", width: "200px" }} src="https://via.placeholder.com/200x200?fbclid=IwAR3tYJl8dhTKMqMjb2FHn66J1Z79CEWlqu4nvBExg5GqjE0KOMWz-Pfyh8o" />
					  <Card.Body>
					    <Card.Title className="mb-2" style={{ color: "#ffa41b" }}>Beauty Influencer</Card.Title>
					    <Card.Text>
					    <b>Development Own cosmetic brand<br />Inspired by Followers</b>
					    </Card.Text>
					    <Card.Text>
						The Influencer in SNS channel (You Tube,
							Instagram, etc.) has planned to launch the
							cosmetic brand that was inspired by the
							follower’s ideas. Cosmepolitan supported
							them on the entire process from planning
							to production and on the sales of it as well.
					    </Card.Text>
					  </Card.Body>
					</Card>
				</div>
			</div>
		</div>
	)
}

export default Clients;