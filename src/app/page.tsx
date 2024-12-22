"use client";

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import AppHeader from './components/Header';
import Footer from './components/Footer';
import LeftDrawer from './components/LeftDrawer';
import Login from './components/Login';
import { config } from './config/config';
import './theme/theme.scss';

const App: React.FC = () => {
  const [sideNavActive, setSideNavActive] = useState(config.leftDrawer.menuItems[0]);
  const [user, setUser] = useState<{
    isAuthenticated: boolean;
    name: string;
    email: string;
    group: string[];
  }>({
    isAuthenticated: false,
    name: '',
    email: '',
    group: []
  });
  const theme = ''; // Default theme

  const handleLogin = (userData: { name: string; email: string; group: string[] }) => {
    setUser({
      isAuthenticated: true,
      ...userData
    });
  };

  const handleLogout = () => {
    setUser({
      isAuthenticated: false,
      name: '',
      email: '',
      group: []
    });
  };

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <AppHeader user={user} onLogout={handleLogout} />
        <div className="main-content">
          {user.isAuthenticated && (
            <LeftDrawer sideNavActive={sideNavActive} setSideNavActive={setSideNavActive} />
          )}
          <main className="content">
            <Routes>
              <Route path="/" element={<div>Home</div>} />
              <Route path="/profile" element={<div>Profile Page</div>} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;