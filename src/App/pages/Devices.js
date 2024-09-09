// src/pages/Devices.js
import React, { useState, useEffect } from 'react';

function Devices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    fetch('/api/list_devices', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(response => response.json())
    .then(data => setDevices(data));
  }, []);

  return (
    <div>
      <h2>My Devices</h2>
      <ul>
        {devices.map((device, index) => (
          <li key={index}>{device.name} - {device.mac_address}</li>
        ))}
      </ul>
    </div>
  );
}

export default Devices;
