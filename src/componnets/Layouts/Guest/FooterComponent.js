import React from 'react';
import { Container } from 'react-bootstrap';

const FooterComponent = () => {
  return (
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
  );
};

export default FooterComponent;
