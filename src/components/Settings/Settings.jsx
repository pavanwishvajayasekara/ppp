// src/components/Settings/Settings.jsx
import React, { useState } from 'react';
import { FaUser, FaCog, FaBell, FaShieldAlt, FaStore } from 'react-icons/fa';
import './Settings.css';
import ProfileSettings from './ProfileSettings';
import SystemSettings from './SystemSettings';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  const renderContent = () => {
    switch(activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'system':
        return <SystemSettings />;
      default:
        return <ProfileSettings />;
    }
  };
  
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      
      <div className="settings-layout">
        <div className="settings-sidebar">
          <div 
            className={`settings-tab ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <FaUser className="tab-icon" />
            <span className="tab-label">Profile Settings</span>
          </div>
          
          <div 
            className={`settings-tab ${activeTab === 'system' ? 'active' : ''}`}
            onClick={() => setActiveTab('system')}
          >
            <FaCog className="tab-icon" />
            <span className="tab-label">System Settings</span>
          </div>
          
          <div 
            className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <FaBell className="tab-icon" />
            <span className="tab-label">Notification Settings</span>
          </div>
          
          <div 
            className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <FaShieldAlt className="tab-icon" />
            <span className="tab-label">Security</span>
          </div>
          
          <div 
            className={`settings-tab ${activeTab === 'store' ? 'active' : ''}`}
            onClick={() => setActiveTab('store')}
          >
            <FaStore className="tab-icon" />
            <span className="tab-label">Store Information</span>
          </div>
        </div>
        
        <div className="settings-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
