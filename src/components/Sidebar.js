import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: '🏠', label: '內頁' },
    { path: '/dashboard', icon: '📊', label: '儀表板' },
    { path: '/images', icon: '🖼️', label: '圖片庫' },
    { path: '/videos', icon: '🎬', label: '影片庫' },
    { path: '/subscription', icon: '📋', label: '訂閱管理' },
    { path: '/food', icon: '🍎', label: '食品管理' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">鋒</div>
        <h3>鋒兒AI系統</h3>
        <p>歡迎使用鋒兒AI資訊系統</p>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;