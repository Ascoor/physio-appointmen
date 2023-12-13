import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import '../../assets/css/TopNav.css';

const NavbarComponent = () => {
  const userDropdownAnimation = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.8)' },
  });

  return (
    <animated.nav
      style={userDropdownAnimation}
      dir="rtl"
      className={`top-nav`}
    >
      <Navbar expand="lg">
        {/* Your navigation bar content goes here */}
      </Navbar>
    </animated.nav>
  );
};

export default NavbarComponent;
