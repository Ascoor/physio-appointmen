import React from 'react';
import '../assets/css/GuestLanding.css';
import { Container } from 'react-bootstrap';

const GuestLanding = () => {
  return (
    <div className="splash-container">
      {/* Splash Mask */}
      <div className="splash-mask"></div>

      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          padding: '10px',
          height: 'calc(100% - 64px)', // Adjusted to exclude navbar height
        }}
      >
        {/* Your landing page content goes here */}
      </div>

      <footer
        style={{
          background: 'linear-gradient(35deg, rgb(7 51 56),#972c2c, rgb(8 36 60))',
          direction: 'rtl',
          color: '#fff',
          textAlign: 'center',
          padding: '10px 0',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      >
        <Container>
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} Avocat All rights reserved
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default GuestLanding;
