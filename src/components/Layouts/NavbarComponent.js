import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useSpring, animated } from '@react-spring/web';
import '../../assets/css/NavbarComponent.css';

const NavbarComponent = ({ onNavigate }) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  const navbarAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 300 },
  });

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };
  const handleNavigation = (section) => {
    onNavigate(section);
    window.location.hash = section; // Update URL hash
  };
  

  return (
    <>
      <animated.div style={navbarAnimation} className="glass-navbar">
        <Navbar expand="lg" variant="dark">
 
          <Navbar.Brand onClick={() => handleNavigation('appointment')}>
            <img
              alt=""
              src="/logo.png"
              width="150"
              height="55"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {/* <Nav.Link onClick={() => handleNavigation('home')}>Home</Nav.Link>
              <Nav.Link onClick={() => handleNavigation('services')}>Services</Nav.Link>
              <Nav.Link onClick={() => handleNavigation('about')}>About</Nav.Link>
              <Nav.Link onClick={() => handleNavigation('contact')}>Contact</Nav.Link> */}
              <Nav.Link onClick={() => handleNavigation('appointment')}>Appointment</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </animated.div>
      {/* ... rest of your component */}
    </>
  );
};

export default NavbarComponent;
