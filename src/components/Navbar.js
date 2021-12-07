import React from "react";
import './Navbar.css';
import {FiSearch} from 'react-icons/fi'
const Navbar = () => {
  return (
    <nav>
      <div className="navbar__container">
        <div className="nav__logo">Mooviee</div>
        <FiSearch className="nav__search--icon"/>
      </div>
    </nav>
    )
};
export default Navbar;
