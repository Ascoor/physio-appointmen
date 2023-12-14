import React, { useState, useEffect } from 'react';
import '../assets/css/GuestLanding.css';
import NavbarComponent from '../components/Layouts/NavbarComponent';
import FooterComponent from './Layouts/FooterComponent';
import AppontmentComponent from './Layouts/AppontmentComponent';
import Home from './Sections/Home';
import Services from './Sections/Services';
import About from './Sections/About';
import Contact from './Sections/Contact';

const GuestLanding = () => {
  const [activeSection, setActiveSection] = useState('appointment');

  useEffect(() => {
    // Function to determine the section based on URL
    const determineSectionFromURL = () => {
      const path = window.location.hash; // Get URL hash
      if (path.includes('services')) {
        setActiveSection('services');
      } else if (path.includes('about')) {
        setActiveSection('about');
      } else if (path.includes('appointment')) {
        setActiveSection('appointment');
      } else if (path.includes('contact')) {
        setActiveSection('contact');
      } else {
        setActiveSection('home');
      }
    };

    determineSectionFromURL();
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    window.location.hash = section; // Update URL hash
  };

  return (
    <>
    <NavbarComponent
  onNavigate={(section) => handleSectionChange(section)}
/>
      <div className="splash-mask">
        <div className="splash-container">
          <div className="content-container d-flex flex-column justify-content-center align-items-center">
            {activeSection === 'home' && <Home />}
            {activeSection === 'appointment' && <AppontmentComponent />}
            {activeSection === 'services' && <Services />}
            {activeSection === 'about' && <About />}
            {activeSection === 'contact' && <Contact />}
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default GuestLanding;
