import React from 'react';

const Settings = () => {
   const handleAddSensor = () => {
      // Add your logic here
   };

   const handleDeleteSensor = () => {
      // Add your logic here
   };

   const handleChangeAttributeName = () => {
      // Add your logic here
   };

   const handleChangeColumnName = () => {
      // Add your logic here
   };

   const handleSortByName = () => {
      // Add your logic here
   };

   const buttonStyle = {
      backgroundColor: '#4CAF50', /* Green */
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      cursor: 'pointer'
   };

   return (
      <div style={{ paddingLeft: '158px', paddingTop: '16px' }}>
         <h4>Settings</h4>
         <button style={buttonStyle} onClick={handleAddSensor}>Add Sensor</button>
         <button style={buttonStyle} onClick={handleDeleteSensor}>Delete Sensor</button>
         <button style={buttonStyle} onClick={handleChangeAttributeName}>Change Attribute Name</button>
         <button style={buttonStyle} onClick={handleChangeColumnName}>Change Column Name</button>
         <button style={buttonStyle} onClick={handleSortByName}>Sort By Name</button>
      </div>
   );
};

export default Settings;
