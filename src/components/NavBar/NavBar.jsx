import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
import "./NavBar.css";

import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    // Toggles the openMenu and closeMenu state
    setClick(!click);
  };
  const closeMobileMenu = () => {
    //  changes the setClick state to false
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="ri-plane-line"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {/* Checks if the click state is true, if it is shows hamburger menu else shows cancel button */}
            <i
              className={
                click ? "ri-close-fill menu-icon" : "ri-menu-4-line menu-icon"
              }
            ></i>
          </div>
          {/* If click is display nav elements  */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
