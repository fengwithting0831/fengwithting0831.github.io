import React, { useState } from 'react';
import './ImageLibrary.css';

const ImageLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [images] = useState([
    {
      id: 1,
      name: '1761405813-e...',
      filename: '1761405813-edha...',
      format: 'JPG',
      size: '88.7 KB',
      dimensions: '800x600',
      thumbnail: '/api/placeholder/200/150'
    },
    {
      id: 2,
      name: '1761405863-3...',
      filename: '1761405863-3...',
      format: 'JPG',
      size: '73.1 KB',
      dimensions: '1024x768',
      thumbnail: '/api/placeholder/200/150'
    },
    {
      id: 3,
      name: '1761405934-7...',
      filename: '1761405934-740...',
      format: 'JPG',
      size: '94.0 KB',
      dimensions: '1200x900',
      thumbnail: '/api/placeholder/200/150'
    },
    {
      id: 4,
      name: '20240917_183...',
      filename: '20240917_183...',
      format: 'PNG',
      size: '7.46 MB',
      dimensions: '1920x1080',
      thumbnail: '/api/placeholder/200/150'
    },
    {
      id: 5,
      name: '202509_A4_2...',
      filename: '202509_A4_2.png',
      format: 'PNG',
      size: '9.78 MB',
      dimensions: '2480x3508',
      thumbnail: '/api/placeholder/200/150'
    },
    {
      id: 6,
      name: '20251026_214...',
      filename: '20251026_214...',
      format: 'JPG',
      size: '689.4 KB',
      dimensions: '1600x1200',
      thumbnail: '/api/placeholder/200/150'
    }
  ]);

  const filteredImages = images.filter(image =>
    image.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedImages = [...filteredImages].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'size':
        return parseFloat(a.size) - parseFloat(b.size);
      case 'format':
        return a.format.localeCompare(b.format);
      default:
        return 0;
    }
  });

  return (
    <div className="image-library">
      <div className="page-header">
        <div className="header-content">
          <div className="header-icon">🖼️</div>
          <div>
            <h1>鋒兒圖片庫</h1>
            <p>鋒兒的精彩圖片AI創作 (241 張圖片)</p>
          </div>
        </div>
        <div className="header-actions">
          <button className="organize-btn">重新整理</button>
          <button className="add-btn">添加圖片</button>
        </div>
      </div>

      <div className="controls-bar">
        <div className="search-section">
          <input
            type="text"
            placeholder="搜尋圖片名稱或檔案名..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">🔍 搜尋</button>
        </div>
        
        <div className="filter-section">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">所有類型</option>
            <option value="format">按格式排序</option>
            <option value="size">按大小排序</option>
          </select>
          
          <select>
            <option>按名稱排序</option>
            <option>按大小排序</option>
            <option>按日期排序</option>
          </select>
        </div>
      </div>

      <div className="stats-bar">
        <div className="stats-item">
          <span className="count">顯示 241 / 241 張圖片</span>
        </div>
        <div className="format-stats">
          <span className="format-tag jpg">JPG (4) 825.95 MB</span>
          <span className="format-tag png">PNG 192</span>
          <span className="format-tag jpeg">JPG 41</span>
          <span className="format-tag other">JPEG 8</span>
        </div>
      </div>

      <div className="image-grid">
        {sortedImages.map(image => (
          <div key={image.id} className="image-card">
            <div className="image-thumbnail">
              <img src={image.thumbnail} alt={image.name} />
              <div className="image-overlay">
                <button className="view-btn">👁️</button>
                <button className="download-btn">⬇️</button>
                <button className="delete-btn">🗑️</button>
              </div>
              <div className="format-badge">{image.format}</div>
            </div>
            
            <div className="image-info">
              <h4 title={image.filename}>{image.name}</h4>
              <div className="image-meta">
                <span>{image.size}</span>
                <span>{image.dimensions}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedImages.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🖼️</div>
          <p>沒有找到符合條件的圖片</p>
        </div>
      )}
    </div>
  );
};

export default ImageLibrary;