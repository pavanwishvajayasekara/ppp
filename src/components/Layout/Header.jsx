import React from 'react';
import { FaBars } from 'react-icons/fa';
import './Layout.css';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-btn" onClick={toggleSidebar}>
        <FaBars />
      </button>
      <h1 className="header-title">Tea Product Management</h1>
    </header>
  );
};

export default Header;
