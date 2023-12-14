// FooterComponent.js
import React from 'react';
import { Container } from 'react-bootstrap';
import '../../assets/css/FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="landing-footer">
      <Container>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Physio Appointment System. All rights reserved
        </p>
      </Container>
    </footer>
  );
};
export default FooterComponent;