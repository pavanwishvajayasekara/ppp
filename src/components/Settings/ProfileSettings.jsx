// src/components/Settings/ProfileSettings.jsx
import React, { useState } from 'react';
import './Settings.css';

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: 'Admin User',
    email: 'admin@ceylontea.com',
    phone: '+94 77 123 4567',
    role: 'Administrator',
    bio: 'Tea product management system administrator.'
  });
  
  const [isEditing, setIsEditing] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically save the profile data to your backend
  };
  
  return (
    <div className="profile-settings">
      <div className="settings-header">
        <h3>Profile Settings</h3>
        {!isEditing && (
          <button 
            className="btn-primary"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        )}
      </div>
      
      <div className="profile-content card">
        <div className="profile-avatar">
          <div className="avatar-placeholder">
            {profile.name.charAt(0)}
          </div>
          {isEditing && (
            <button className="change-avatar-btn">Change Photo</button>
          )}
        </div>
        
        {isEditing ? (
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label>Role</label>
              <input
                type="text"
                name="role"
                value={profile.role}
                onChange={handleChange}
                readOnly
              />
            </div>
            
            <div className="form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                rows="3"
              ></textarea>
            </div>
            
            <div className="form-actions">
              <button 
                type="button" 
                className="btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="profile-details">
            <div className="detail-item">
              <div className="detail-label">Full Name</div>
              <div className="detail-value">{profile.name}</div>
            </div>
            
            <div className="detail-item">
              <div className="detail-label">Email</div>
              <div className="detail-value">{profile.email}</div>
            </div>
            
            <div className="detail-item">
              <div className="detail-label">Phone</div>
              <div className="detail-value">{profile.phone}</div>
            </div>
            
            <div className="detail-item">
              <div className="detail-label">Role</div>
              <div className="detail-value">{profile.role}</div>
            </div>
            
            <div className="detail-item">
              <div className="detail-label">Bio</div>
              <div className="detail-value bio">{profile.bio}</div>
            </div>
          </div>
        )}
      </div>
      
      <div className="card">
        <h3>Password</h3>
        <p className="password-info">
          To change your password, click the button below. You will receive an email with instructions.
        </p>
        <button className="btn-primary">Change Password</button>
      </div>
    </div>
  );
};

export default ProfileSettings;