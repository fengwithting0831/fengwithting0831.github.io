import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="header-icon">📊</div>
        <div>
          <h1>系統儀表板</h1>
          <p>即時監控系統狀態和各項資訊</p>
        </div>
        <button className="refresh-btn">刷新數據</button>
      </div>

      <div className="stats-grid">
        <div className="stats-section">
          <h2>📋 訂閱管理</h2>
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-number">24</div>
              <div className="stat-label">總訂閱數</div>
            </div>
            <div className="stat-card warning">
              <div className="stat-number">0</div>
              <div className="stat-label">3天內到期</div>
            </div>
            <div className="stat-card success">
              <div className="stat-number">1</div>
              <div className="stat-label">7天內到期</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">已過期</div>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <h2>🍎 食品管理</h2>
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-number">13</div>
              <div className="stat-label">總食品數</div>
            </div>
            <div className="stat-card warning">
              <div className="stat-number">0</div>
              <div className="stat-label">3天內到期</div>
            </div>
            <div className="stat-card success">
              <div className="stat-number">0</div>
              <div className="stat-label">7天內到期</div>
            </div>
            <div className="stat-card danger">
              <div className="stat-number">2</div>
              <div className="stat-label">30天內到期</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">0</div>
              <div className="stat-label">已過期</div>
            </div>
          </div>
        </div>
      </div>

      <div className="alerts-section">
        <div className="alert warning">
          <span>⚠️</span>
          <div>
            <h3>訂閱到期提醒</h3>
            <p>有訂閱項目即將到期，請及時處理</p>
          </div>
        </div>
        <div className="alert danger">
          <span>🍎</span>
          <div>
            <h3>食品到期提醒</h3>
            <p>有食品即將到期，請及時處理</p>
          </div>
        </div>
      </div>

      <div className="system-info">
        <h2>系統功能選單</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🔧 前端技術</h3>
            <ul>
              <li>• SolidJS (SolidStart)</li>
              <li>• 網頁存放於 Netlify</li>
              <li>• 響應式設計 + Tailwind CSS</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3>💎 後端技術</h3>
            <ul>
              <li>• Strapi CMS</li>
              <li>• 多平台發佈 Strapi</li>
              <li>• RESTful API 支援</li>
            </ul>
          </div>
        </div>
        <p className="copyright">鋒兒達習公開資訊 © 版權所有 2025 ~ 2125</p>
      </div>
    </div>
  );
};

export default Dashboard;