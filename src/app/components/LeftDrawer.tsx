// LeftDrawer.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { config } from '../config/config';
import '../scss/LeftDrawer.scss';

interface LeftDrawerProps {
  sideNavActive: { label: string; path: string };
  setSideNavActive: (item: { label: string; path: string }) => void;
}

const LeftDrawer: React.FC<LeftDrawerProps> = ({ sideNavActive, setSideNavActive }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`left-drawer ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={toggleDrawer}>
        <i className={`fas ${isOpen ? 'fa-chevron-left' : 'fa-chevron-right'}`}></i>
      </button>
      <nav className="drawer-content">
        <div className="drawer-header">
          <h2 className="text-xl font-bold">{config.leftDrawer.headerText}</h2>
          <p>{config.leftDrawer.descriptionText}</p>
        </div>
        <ul className="mt-4">
          {config.leftDrawer.menuItems.map(item => (
            <li key={item.label} className={`p-2 ${sideNavActive.label === item.label ? 'bg-primary' : ''}`}>
              <Link to={item.path} onClick={() => setSideNavActive(item)} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LeftDrawer;