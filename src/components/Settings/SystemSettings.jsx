// src/components/Settings/SystemSettings.jsx
import React, { useState } from 'react';
import './Settings.css';

const SystemSettings = () => {
  const [settings, setSettings] = useState({
    storeName: 'Ceylon Tea Store',
    currency: 'Rs',
    language: 'en',
    timezone: 'Asia/Colombo',
    dateFormat: 'DD/MM/YYYY',
    lowStockThreshold: 10,
    enableNotifications: true,
    enableEmailAlerts: true
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically save the settings to your backend
    alert('Settings saved successfully!');
  };
  
  return (
    <div className="system-settings">
      <div className="settings-header">
        <h3>System Settings</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="settings-form card">
        <div className="settings-section">
          <h4>General Settings</h4>
          
          <div className="form-group">
            <label>Store Name</label>
            <input
              type="text"
              name="storeName"
              value={settings.storeName}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Currency</label>
              <select
                name="currency"
                value={settings.currency}
                onChange={handleChange}
              >
                <option value="Rs">Sri Lankan Rupee (Rs)</option>
                <option value="$">US Dollar ($)</option>
                <option value="€">Euro (€)</option>
                <option value="£">British Pound (£)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Language</label>
              <select
                name="language"
                value={settings.language}
                onChange={handleChange}
              >
                <option value="en">English</option>
                <option value="si">Sinhala</option>
                <option value="ta">Tamil</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Timezone</label>
              <select
                name="timezone"
                value={settings.timezone}
                onChange={handleChange}
              >
                <option value="Asia/Colombo">Asia/Colombo</option>
                <option value="UTC">UTC</option>
                <option value="America/New_York">America/New_York</option>
                <option value="Europe/London">Europe/London</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Date Format</label>
              <select
                name="dateFormat"
                value={settings.dateFormat}
                onChange={handleChange}
              >
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="settings-section">
          <h4>Inventory Settings</h4>
          
          <div className="form-group">
            <label>Low Stock Threshold</label>
            <input
              type="number"
              name="lowStockThreshold"
              value={settings.lowStockThreshold}
              onChange={handleChange}
              min="1"
            />
            <div className="form-help">
              Products with stock below this number will be marked as low stock.
            </div>
          </div>
        </div>
        
        <div className="settings-section">
          <h4>Notification Settings</h4>
          
          <div className="form-check">
            <input
              type="checkbox"
              id="enableNotifications"
              name="enableNotifications"
              checked={settings.enableNotifications}
              onChange={handleChange}
            />
            <label htmlFor="enableNotifications">
              Enable in-app notifications
            </label>
          </div>
          
          <div className="form-check">
            <input
              type="checkbox"
              id="enableEmailAlerts"
              name="enableEmailAlerts"
              checked={settings.enableEmailAlerts}
              onChange={handleChange}
            />
            <label htmlFor="enableEmailAlerts">
              Enable email alerts for low stock
            </label>
          </div>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default SystemSettings;
