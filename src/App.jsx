import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import FloatingDock from './components/FloatingDock';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';

// Scroll to top upon route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <FloatingDock />
          <ScrollToTopButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}
