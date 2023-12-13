import React from 'react';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import NavbarComponent from './components/Layouts/NavbarComponent';
import GuestLanding from './components/GuestLanding';
import FooterComponent from './components/FooterComponent';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <NavbarComponent />
      <GuestLanding />
      <FooterComponent />
    </Container>
  );
};

export default App;
