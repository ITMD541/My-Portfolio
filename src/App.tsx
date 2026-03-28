import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection';
import AboutSection from './components/AboutSection';
import CertificationsSection from './components/CertificationsSection';
import InternshipsSection from './components/InternshipsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <InternshipsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;