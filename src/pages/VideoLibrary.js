import React, { useState } from 'react';
import './VideoLibrary.css';

const VideoLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos] = useState([
    {
      id: 1,
      title: '鋒兒的傳奇人生',
      description: '鋒兒人生歷程介紹',
      duration: '00:45',
      size: '2.01 MB',
      format: 'MP4',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: '鋒兒雜什Show 🔴',
      description: '鋒兒雜談影片檔案',
      duration: '01:23',
      size: '4.21 MB',
      format: 'MP4',
      thumbnail: '/api/placeholder/300/200'
    }
  ]);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="video-library">
      <div className="page-header">
        <div className="header-content">
          <div className="header-icon">🎬</div>
          <div>
            <h1>鋒兒影片庫</h1>
            <p>鋒兒的精彩人生與娛樂收藏</p>
          </div>
        </div>
        <button className="add-btn">添加影片</button>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="搜尋影片名稱..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn">🔍 搜尋</button>
      </div>

      <div className="video-grid">
        {filteredVideos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.title} />
              <div className="play-overlay">
                <div className="play-button">▶</div>
              </div>
              <div className="duration-badge">{video.duration}</div>
              <div className="format-badge">{video.format}</div>
            </div>
            
            <div className="video-info">
              <h3>{video.title}</h3>
              <p className="video-description">{video.description}</p>
              
              <div className="video-meta">
                <span>大小: {video.size}</span>
                <span>時長: {video.duration}</span>
              </div>
              
              <div className="video-actions">
                <button className="play-btn">播放</button>
                <button className="download-btn">下載</button>
                <button className="delete-btn">刪除</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🎬</div>
          <p>沒有找到符合條件的影片</p>
        </div>
      )}
    </div>
  );
};

export default VideoLibrary;