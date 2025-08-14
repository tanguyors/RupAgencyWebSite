import React from 'react';
import { 
  FiTarget, 
  FiCode, 
  FiImage, 
  FiShare2, 
  FiBookOpen, 
  FiCpu 
} from 'react-icons/fi';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: FiTarget,
      title: 'Stratégie & Conseil Digital',
      description: 'Définir une stratégie digitale claire et efficace pour votre entreprise.',
      features: [
        'Audit digital complet',
        'Stratégie de transformation',
        'Roadmap d\'implémentation',
        'Suivi des performances'
      ]
    },
    {
      icon: FiCode,
      title: 'Création Web & Applications',
      description: 'Développement de sites web et applications sur mesure, performants et modernes.',
      features: [
        'Sites web responsives',
        'Applications web',
        'E-commerce',
        'Maintenance & support'
      ]
    },
    {
      icon: FiImage,
      title: 'Branding & Identité Visuelle',
      description: 'Création d\'une identité visuelle forte et cohérente pour votre marque.',
      features: [
        'Logo & charte graphique',
        'Supports de communication',
        'Packaging design',
        'Direction artistique'
      ]
    },
    {
      icon: FiShare2,
      title: 'Marketing & Réseaux Sociaux',
      description: 'Gestion complète de votre présence sur les réseaux sociaux et marketing digital.',
      features: [
        'Gestion des réseaux sociaux',
        'Campagnes publicitaires',
        'Content marketing',
        'Influence marketing'
      ]
    },
    {
      icon: FiBookOpen,
      title: 'Formations & IA',
      description: 'Formation de vos équipes aux nouvelles technologies et à l\'intelligence artificielle.',
      features: [
        'Formation IA & automatisation',
        'Workshops sur mesure',
        'Accompagnement technique',
        'Certifications'
      ]
    },
    {
      icon: FiCpu,
      title: 'Automatisation & IA',
      description: 'Intégration de solutions d\'automatisation et d\'IA pour optimiser vos processus.',
      features: [
        'Chatbots intelligents',
        'Automatisation des tâches',
        'Analyse prédictive',
        'Optimisation des processus'
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nos Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Des solutions complètes pour propulser votre présence digitale
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="p-8 glass-effect rounded-xl card-hover h-full flex flex-col"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  {/* @ts-ignore */}
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className="text-primary-400 hover:text-primary-300 font-semibold text-sm transition-colors duration-200 inline-flex items-center"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
