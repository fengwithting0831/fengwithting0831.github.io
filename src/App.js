import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import FoodManagement from './pages/FoodManagement';
import SubscriptionManagement from './pages/SubscriptionManagement';
import VideoLibrary from './pages/VideoLibrary';
import ImageLibrary from './pages/ImageLibrary';
import './App.css';

function App() {
  // 由於使用 username.github.io，不需要 basename
  const basename = '';
  
  return (
    <Router basename={basename}>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/food" element={<FoodManagement />} />
            <Route path="/subscription" element={<SubscriptionManagement />} />
            <Route path="/videos" element={<VideoLibrary />} />
            <Route path="/images" element={<ImageLibrary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;