// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import NavbarComponent from './componnets/Layouts/NavbarComponent';
import GuestLanding from './componnets/GuestLanding';
import {  Container} from  'react-bootstrap';
const App = () => {
  return (
    <Container>
      <NavbarComponent />
      <GuestLanding />
    </Container>
  );
};

export default App;
