import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'CGV', href: '/cgv' },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold gradient-text">
              RupAgency
            </a>
            <p className="text-gray-400 text-sm mt-2">
              Agence créative & digitale à Bali
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="text-center md:text-right">
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 mb-4">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-xs"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <p className="text-gray-500 text-xs">
              © {currentYear} RupAgency. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
