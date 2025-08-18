import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CTASticky from './components/CTASticky';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Zones from './pages/Zones';
import Business from './pages/Business';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-perle-ivory font-inter">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prestations" element={<Services />} />
            <Route path="/tarifs" element={<Pricing />} />
            <Route path="/zones" element={<Zones />} />
            <Route path="/entreprises" element={<Business />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <CTASticky />
      </div>
    </Router>
  );
}

export default App;