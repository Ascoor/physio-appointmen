
import { Navbar } from 'react-bootstrap'; // Import NavDropdown from react-bootstrap
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
      dir="rtl" // Set text direction to left-to-right (LTR)
      className={`top-nav`}
    >
      <div className="d-flex align-items-center justify-content-start">
        <button  className="navbar-toggler">
        
        </button>
        <Navbar.Brand href="/">
          
        </Navbar.Brand>
      </div>

      <div className="user-menu">
      

        <div className="notification-icon beautiful-notification"></div>
      </div>
    </animated.nav>
  );
};

export default NavbarComponent;
