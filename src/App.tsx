import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Mission from './components/Mission';
import ServicesSection from './components/ServicesSection';
import ServicesPage from './components/Services';
import Contact from './components/Contact';
import Stats from './components/Stats';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Agence créative & IA à Bali | RupAgency</title>
        <meta name="description" content="De l'idée à la réussite : sites web, automatisation & IA, photo pro, réseaux sociaux." />
        <meta name="keywords" content="agence digitale, Bali, web design, développement web, IA, automatisation, marketing digital" />
        <meta name="author" content="RupAgency" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Agence créative & IA à Bali | RupAgency" />
        <meta property="og:description" content="De l'idée à la réussite : sites web, automatisation & IA, photo pro, réseaux sociaux." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rupagency.com" />
        <meta property="og:image" content="/rup/og-home.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agence créative & IA à Bali | RupAgency" />
        <meta name="twitter:description" content="De l'idée à la réussite : sites web, automatisation & IA, photo pro, réseaux sociaux." />
        <meta name="twitter:image" content="/rup/og-home.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://rupagency.com" />
      </Helmet>

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Header />
              <main>
                <Hero />
                <Stats />
                <Intro />
                <Mission />
                <ServicesSection />
              </main>
              <Footer />
            </div>
          }
        />
                    <Route path="/a-propos" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
