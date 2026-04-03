import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// Lazy load pages for better performance, but for now we'll do standard imports if they exist.
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
import KamaiPage from './pages/KamaiPage';
import NearbyPage from './pages/NearbyPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricesPage from './pages/PricesPage';
import DownloadPage from './pages/DownloadPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/scan" element={<ScanPage />} />
          <Route path="/earnings" element={<KamaiPage />} />
          <Route path="/nearby" element={<NearbyPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
