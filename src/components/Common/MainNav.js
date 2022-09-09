import { useSelector } from 'react-redux';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MainNav.css";
import logo from "../../assets/logo/1830767.png";
import { Link } from "react-router-dom";

const MainNav = () => {
  const totalItems = useSelector(state=>state.totalCount)
  const [isNavExpanded, setisNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <div className="header-content">
        <img className="app-logo" src={logo} alt="logo" />
        <Link to="/recipes" className="brand-name">
          CookPad
        </Link>
      </div>
      <button className="hamburger" onClick={() => setisNavExpanded(!isNavExpanded)}>
        {/* icon from heroicons.com */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <NavLink to="/recipes" activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/popular" activeClassName="selected">
              Popular Recipes
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourites" activeClassName="selected">
              Favourites <span className="badge">{totalItems}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNav;
