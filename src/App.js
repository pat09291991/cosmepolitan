import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Screens/LandingPage';
import About from './Screens/About';
import Clients from './Screens/Clients';
import Networks from './Screens/Networks';
import SupportService from './Screens/SupportService';
import WhyUs from './Screens/WhyUs';
import CreateYourOwn from './Screens/CreateYourOwn';

function App() {
  return (
    
    <Fragment>
      <LandingPage />
      <About />
      <Clients />
      <Networks />
      <SupportService />
      <WhyUs />
      <CreateYourOwn />
    </Fragment>

  );
}

export default App;
