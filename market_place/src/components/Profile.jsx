import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Profile.css'; 

const Profile = () => {
  const { user, token, logout, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [fetchError, setFetchError] = useState('');

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login');
    }
  }, [loading, isAuthenticated, navigate]);

  // Fetch profile from backend
  useEffect(() => {
    if (token) {
      fetch('/api/profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            setProfileData(data.user);
          }
        })
        .catch(() => setFetchError('Failed to load profile'));
    }
  }, [token]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-loading">Loading...</div>
      </div>
    );
  }

  const displayUser = profileData || user;
  const memberSince = displayUser?.createdAt
    ? new Date(displayUser.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Today';

  const initials = displayUser?.username
    ? displayUser.username.slice(0, 2).toUpperCase()
    : '??';

  return (
    <div className="profile-page">
      <div className="profile-card">
        {/* Avatar */}
        <div className="profile-avatar">
          <span className="profile-initials">{initials}</span>
        </div>

        {/* User Info */}
        <h2 className="profile-username">{displayUser?.username || 'User'}</h2>
        <p className="profile-email">{displayUser?.email || 'No email'}</p>

        {/* Divider */}
        <div className="profile-divider"></div>

        {/* Details */}
        <div className="profile-details">
          <div className="profile-detail-row">
            <span className="detail-icon">👤</span>
            <div className="detail-content">
              <span className="detail-label">Username</span>
              <span className="detail-value">{displayUser?.username}</span>
            </div>
          </div>

          <div className="profile-detail-row">
            <span className="detail-icon">📧</span>
            <div className="detail-content">
              <span className="detail-label">Email</span>
              <span className="detail-value">{displayUser?.email}</span>
            </div>
          </div>

          <div className="profile-detail-row">
            <span className="detail-icon">📅</span>
            <div className="detail-content">
              <span className="detail-label">Member Since</span>
              <span className="detail-value">{memberSince}</span>
            </div>
          </div>
        </div>

        {fetchError && <p className="profile-error">{fetchError}</p>}

        {/* Logout Button */}
        <button className="profile-logout-btn" onClick={handleLogout}>
          Log Out
        </button>

        {/* Back to Home */}
        <p className="profile-back" onClick={() => navigate('/')}>
          ← Back to Home
        </p>
      </div>
      {/* <div><button
        type="button"
        className="navbar__login"
        onClick={() => {
          navigate('/orderhome')
        }}
      >
        order
      </button></div> */}

      <div className='rightpart'>
        <div className='navprofile'>
          <div><button
        type="button"
        className="navbar__login"
        onClick={() => {
          navigate('/orderhome')
        }}
      >
        order
      </button></div>

      <div><button
        type="button"
        className="navbar__login"
        onClick={() => {
          navigate('/orderhome')
        }}
      >
        order
      </button></div>

      <div><button
        type="button"
        className="navbar__login"
        onClick={() => {
          navigate('/orderhome')
        }}
      >
        order
      </button></div>
        </div>
        <div className='MainProfile'></div>



      </div>
    </div>
  );
};

export default Profile;
