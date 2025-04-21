// src/components/Layout/Sidebar.jsx
import React from 'react';
import './Layout.css';
import { FaHome, FaMugHot, FaBoxes, FaUsers, FaChartBar, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Sidebar = ({ activeTab, setActiveTab, isCollapsed, toggleSidebar }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaHome /> },
    { id: 'products', label: 'Products', icon: <FaMugHot /> },
    { id: 'inventory', label: 'Inventory', icon: <FaBoxes /> },
    { id: 'customers', label: 'Customers', icon: <FaUsers /> },
    { id: 'reports', label: 'Reports', icon: <FaChartBar /> },
    { id: 'settings', label: 'Settings', icon: <FaCog /> }
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <span className="tea-icon"><FaMugHot /></span>
          <h2>Ceylon Tea</h2>
        </div>
        <button className="toggle-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <nav className="menu">
        {menuItems.map(item => (
          <div 
            key={item.id}
            className={`menu-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span className="menu-label">{item.label}</span>
          </div>
        ))}
      </nav>
      <div className="menu-item logout">
        <span className="menu-icon"><FaSignOutAlt /></span>
        <span className="menu-label">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
