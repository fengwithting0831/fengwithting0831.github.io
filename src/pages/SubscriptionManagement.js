import React, { useState } from 'react';
import './SubscriptionManagement.css';

const SubscriptionManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subscriptions] = useState([
    {
      id: 1,
      name: '天虎/資信訊/心臟內科',
      category: '醫療服務',
      url: 'https://www.tcmg.com.tw/index.php/main/schedule_time?id=18',
      price: 'NT$ 530',
      nextPayment: '2025-12-26',
      daysLeft: 1,
      status: 'active'
    },
    {
      id: 2,
      name: 'kiro pro',
      category: '軟體服務',
      url: 'https://app.kiro.dev/account/',
      price: 'NT$ 640',
      nextPayment: '2026-01-01',
      daysLeft: 10,
      status: 'active'
    }
  ]);

  const filteredSubscriptions = subscriptions.filter(sub =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="subscription-management">
      <div className="page-header">
        <div className="header-content">
          <div className="header-icon">📋</div>
          <div>
            <h1>訂閱管理系統</h1>
            <p>管理您的各項訂閱服務和會員資訊</p>
          </div>
        </div>
        <button className="add-btn">添加訂閱</button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="搜尋訂閱名稱或網址..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">🔍 搜尋</button>
        <button className="import-btn">📥 重新載入</button>
      </div>

      <div className="subscription-list">
        {filteredSubscriptions.map(subscription => (
          <div key={subscription.id} className="subscription-card">
            <div className="subscription-info">
              <div className="subscription-header">
                <h3>{subscription.name}</h3>
                <span className={`status-badge ${subscription.status}`}>
                  {subscription.status === 'active' ? '啟用中' : '已停用'}
                </span>
              </div>
              
              <div className="subscription-details">
                <div className="detail-grid">
                  <div className="detail-item">
                    <span className="label">網站:</span>
                    <a href={subscription.url} target="_blank" rel="noopener noreferrer" className="url-link">
                      {subscription.url}
                    </a>
                  </div>
                  <div className="detail-item">
                    <span className="label">價格:</span>
                    <span className="price">{subscription.price}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">下次付款:</span>
                    <span>{subscription.nextPayment}</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">剩餘天數:</span>
                    <span className={`days-left ${subscription.daysLeft <= 7 ? 'warning' : ''}`}>
                      {subscription.daysLeft} 天
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="subscription-actions">
              <button className="edit-btn">編輯</button>
              <button className="delete-btn">刪除</button>
            </div>
          </div>
        ))}
      </div>

      {filteredSubscriptions.length === 0 && (
        <div className="empty-state">
          <p>沒有找到符合條件的訂閱</p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionManagement;