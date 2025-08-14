import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[50vh] flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[50vh] py-2">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">On propulse votre</span>
                <br />
                <span className="gradient-text">marque</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                De l'idée à la réussite. Agence créative & digitale à Bali — Web, Automatisation & IA, Photo pro, Réseaux sociaux.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="btn-primary text-center"
              >
                Voir nos réalisations
              </a>
              <a
                href="#contact"
                className="btn-outline text-center"
              >
                Réserver un appel
              </a>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/rup/hero-laptop.png"
                alt="Laptop RupAgency"
                className="w-full h-auto max-w-lg mx-auto animate-float"
                onError={(e) => {
                  // Fallback si l'image n'existe pas
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            
            {/* Fallback illustration si l'image n'existe pas */}
            <div className="hidden w-full h-96 bg-gradient-to-br from-primary-600/20 to-cyan-500/20 rounded-2xl border border-primary-500/30 items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-cyan-400 rounded-2xl mx-auto flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-primary-400 font-semibold">RupAgency</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
