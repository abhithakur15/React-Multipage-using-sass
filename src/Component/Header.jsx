import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../assets/Images/logo.png";
import Button1 from './Button1';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // State to track navbar toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen); // Toggle navbar open state
  };

  const closeNav = () => {
    setIsNavOpen(false); // Close navbar when a menu item is clicked
  };

  return (
    <>
      <header>
        <div className="top-detail">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <ul className="contact-info">
                  <li><a href="mailto:someone@example.com"><span><i className="fa-regular fa-envelope"></i></span>someone@example.com</a></li>
                  <li><a href="#"><span><i className="fa-solid fa-location-crosshairs"></i></span>15/A, Nest Tower, NYC</a></li>
                </ul>
              </div>
              <div className="col-lg-6 text-center">
                <ul className="social-link">
                  <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <nav className={`navbar navbar-expand-lg ${isSticky ? "sticky fadeInDown animated" : ""}`}>
          <div className="container">
            <NavLink className="navbar-brand" to="/"><img src={Logo} alt="" /></NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavOpen ? "true" : "false"}
              aria-label="Toggle navigation"
              onClick={handleNavToggle} // Handle toggle button click
            >
              <span className="toggler-icon top-bar"></span>
              <span className="toggler-icon middle-bar"></span>
              <span className="toggler-icon bottom-bar"></span>
            </button>

            <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link nav_link_a" to="/" onClick={closeNav}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav_link_a" to="/About" onClick={closeNav}>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav_link_a" to="/Services" onClick={closeNav}>Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link nav_link_a" to="/Team" onClick={closeNav}>Team</NavLink>
                </li>
              </ul>
              <div className="d-flex">
                <Button1 path="#" name="button-1 " text_name="Get A Quote"></Button1>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
