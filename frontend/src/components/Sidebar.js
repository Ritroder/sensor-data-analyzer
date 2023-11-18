import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCog, FaMicrochip } from 'react-icons/fa';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{ ...sidebarStyle, zIndex: 999, width: isHovered ? '250px' : '50px' }} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to="/" style={linkStyle}>
        <div style={iconContainerStyle}><FaHome /></div>
        <span style={textStyle(isHovered)}>Home</span>
      </Link>
      <Link to="/settings" style={linkStyle}>
        <div style={iconContainerStyle}><FaCog /></div>
        <span style={textStyle(isHovered)}>Settings</span>
      </Link>
      <Link to="/manage-sensors" style={linkStyle}>
        <div style={iconContainerStyle}><FaMicrochip /></div>
        <span style={textStyle(isHovered)}>Sensors</span>
      </Link>
    </div>
  );
};

const sidebarStyle = {
  backgroundImage: 'linear-gradient(to bottom, rgba(50, 100, 50, 1), rgba(255, 255, 255, 0.2))',
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  transition: 'width 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start', // align items to the start
  //background: 'gray',
  paddingLeft: '12px', // added padding
  paddingTop: '90px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
  margin: '20px 0',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
};

const iconContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50px', // set width equal to initial sidebar width
};

const textStyle = (isHovered) => ({
  visibility: isHovered ? 'visible' : 'hidden',
  marginLeft: '10px',
});

export default Sidebar;
