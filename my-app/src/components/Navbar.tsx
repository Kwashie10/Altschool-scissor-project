import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import Hidden from "@mui/material/Hidden";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"; // Import drop down icon
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; // Import drop up icon

// Define Dropdown component separately
const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div className="dropdown-container">
        <a className="nav-link" href="#features">
          Features
        </a>
        {isOpen ? (
          <KeyboardArrowUpIcon
            onClick={toggleDropdown}
            className="up-down"
          />
        ) : (
          <KeyboardArrowDownIcon
            onClick={toggleDropdown}
            className="up-down"
          />
        )}
      </div>

      {isOpen && (
        <ul className="dropdown-content">
          <li><a href="#d">URL Shortening</a></li>
          <li><a href="#d">Custom URLs</a></li>
          <li><a href="#d">QR Codes</a></li>
          <li><a href="#d">Data Analytics</a></li>
        </ul>
      )}
    </React.Fragment>
  );
};

// Define Navbar component
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="home" id="home">
      <div className="nav-center">
        <a href="/">
          <div className="logo">
            <img className="logo-icon" src="/assets/logo.png" alt="nav-logo" />
            <img
              className="logo-icon"
              src="/assets/Vertical-line.png"
              alt="nav-logo"
            />
            <img
              className="logo-icon"
              src="/assets/text-scissor.png"
              alt="nav-logo"
            />
          </div>
        </a>
        <Hidden smDown>
          <ul className="nav-links">
            <li>
              <a className="nav-link" href="/">
                My URLs
              </a>
            </li>
            <li>
              {/* Render Dropdown component */}
              <Dropdown />
            </li>
            <li>
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="nav-link" href="#form">
                Analytics
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="#questions"
              >
                FAQs
              </a>
            </li>
          </ul>
          <ul className="signin-links">
            <li>
              <Link to="/Login" className="primary-blue-300">
                Login
              </Link>
            </li>
            <li>
              <Link to="/SignUp" className="signin-link btn-blue btn">
                Try for free
              </Link>
            </li>
            
          </ul>
        </Hidden>
        <Hidden mdUp>
          {/* Use CloseIcon or MenuIcon based on menuOpen state */}
          {menuOpen ? (
            <CloseIcon className="menuIcon" onClick={toggleMenu} />
          ) : (
            <MenuIcon className="menuIcon" onClick={toggleMenu} />
          )}
          {menuOpen && (
            <ul className="mobile-menu">
              <li>
                <a className="nav-link" href="/">
                  My URLs
                </a>
              </li>
              <li>
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#form" className="nav-link">Analytics</a>
              </li>
              <li>
                <a
                  className="nav-link"
                  href="#questions"
                >
                  FAQs
                </a>
              </li>
              <li>
                <Link to="/Login" className="signin-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/SignUp" className="signin-link">
                  Try for free
                </Link>
              </li>
            </ul>
          )}
        </Hidden>
      </div>
    </nav>
  );
};

export default Navbar;
