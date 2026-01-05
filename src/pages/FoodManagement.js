import React, { useState } from 'react';
import './FoodManagement.css';

const FoodManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [foods] = useState([
    {
      id: 1,
      name: '【張君雅】五香海苔休閒丸子',
      brand: '張君雅',
      quantity: 3,
      price: 'NT$ 0',
      location: '未設定',
      expiryDate: '2026-01-06',
      daysLeft: 15,
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: '【張君雅】日式串燒休閒丸子',
      brand: '張君雅',
      quantity: 6,
      price: 'NT$ 0',
      location: '未設定',
      expiryDate: '2026-01-07',
      daysLeft: 16,
      image: '/api/placeholder/100/100'
    }
  ]);

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="food-management">
      <div className="page-header">
        <div className="header-content">
          <div className="header-icon">🍎</div>
          <div>
            <h1>食品管理系統</h1>
            <p>管理您的食品存放及到期狀況</p>
          </div>
        </div>
        <button className="add-btn">添加食品</button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="搜尋食品名稱或編號..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">🔍 搜尋</button>
        <button className="import-btn">📥 重新載入</button>
      </div>

      <div className="food-grid">
        {filteredFoods.map(food => (
          <div key={food.id} className="food-card">
            <div className="food-image">
              <img src={food.image} alt={food.name} />
            </div>
            <div className="food-info">
              <h3>{food.name}</h3>
              <div className="food-details">
                <div className="detail-row">
                  <span>數量:</span>
                  <span>{food.quantity}</span>
                </div>
                <div className="detail-row">
                  <span>價格:</span>
                  <span>{food.price}</span>
                </div>
                <div className="detail-row">
                  <span>位置:</span>
                  <span>{food.location}</span>
                </div>
                <div className="detail-row">
                  <span>到期日期:</span>
                  <span>{food.expiryDate}</span>
                </div>
                <div className="detail-row">
                  <span>剩餘天數:</span>
                  <span className={`days-left ${food.daysLeft <= 7 ? 'warning' : ''}`}>
                    {food.daysLeft} 天
                  </span>
                </div>
              </div>
              <div className="food-actions">
                <button className="edit-btn">編輯</button>
                <button className="delete-btn">🗑</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFoods.length === 0 && (
        <div className="empty-state">
          <p>沒有找到符合條件的食品</p>
        </div>
      )}
    </div>
  );
};

export default FoodManagement;