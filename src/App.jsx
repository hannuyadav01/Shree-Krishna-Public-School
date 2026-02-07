import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NoticeBar from './components/NoticeBar';
import FloatingContact from './components/FloatingContact';
import ScrollToTop from './components/ScrollToTop';
import { initEmailJS } from './services/emailService';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CampusesPage from './pages/CampusesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import AdmissionsPage from './pages/AdmissionsPage';
import GalleryPage from './pages/GalleryPage';
import EventsPage from './pages/EventsPage';
import FacultyPage from './pages/FacultyPage';
import ContactPage from './pages/ContactPage';
import AchievementsPage from './pages/AchievementsPage';
import ShreeKrishnaUdairamsarPage from './pages/ShreeKrishnaUdairamsarPage';
import LittleKrishnaBikanerPage from './pages/LittleKrishnaBikanerPage';

function App() {
  useEffect(() => {
    // Initialize EmailJS when app loads
    initEmailJS();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <NoticeBar />
        <Header />
        <main id="main-content" className="pt-28">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/campuses" element={<CampusesPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* SEO Optimized Campus Pages */}
            <Route path="/shree-krishna-public-school-udairamsar" element={<ShreeKrishnaUdairamsarPage />} />
            <Route path="/little-krishna-public-school-bikaner" element={<LittleKrishnaBikanerPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;
