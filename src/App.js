// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './App/pages/Login';
import Devices from './App/pages/Devices';
import Home from './App/pages/Home';
import SideNavigation from './App/components/SideNav';
import Singin from './App/pages/Singin';
import Profile from './App/pages/profile';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';


function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', width: '100%'}}>
        {/* Barra lateral de navegação */}
        <SideNavigation />

        {/* Conteúdo principal */}
        <div style={{ marginLeft: 240, padding: 20, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Singin" element={<Singin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/devices" element={<Devices />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
