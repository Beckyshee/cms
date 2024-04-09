import React, { useState } from "react";
import "./navbar.scss";
import logo from "../assets/pcea-logo.jpg";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo" />
        <div className="heading">
          <h3>PCEA</h3>
          <h3>RURINGU CHURCH</h3>
        </div>
      </div>
      <div className={isOpen ? "navbar-links active" : "navbar-links"}>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              About
            </NavLink>
            <ul>
              <li>
                <NavLink to="/about-us" onClick={toggleMenu}>
                  Who we are
                </NavLink>
              </li>
              <li>
                <NavLink to="/leadership" onClick={toggleMenu}>
                  Leadership Structure
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/groups" activeClassName="active">
              Groups
            </NavLink>
            <ul>
              <li>
                <NavLink to="/guild" onClick={toggleMenu}>
                  Women's Guild
                </NavLink>
              </li>
              <li>
                <NavLink to="/youth" onClick={toggleMenu}>
                  Youth
                </NavLink>
              </li>
              <li>
                <NavLink to="/kids" onClick={toggleMenu}>
                  Children Ministry
                </NavLink>
              </li>
              <li>
                <NavLink to="/brigade" onClick={toggleMenu}>
                  Brigade
                </NavLink>
              </li>
              <li>
                <NavLink to="/districts" onClick={toggleMenu}>
                  Districts
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/events" activeClassName="active" onClick={toggleMenu}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/announcements"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Announcements
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sermons"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Sermons
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              activeClassName="active"
              onClick={toggleMenu}
            >
              Missions
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={isOpen ? "hamburger open" : "hamburger"}></div>
      </div>
    </nav>
  );
};

export default Navbar;
