import React from 'react';
import { FiZap, FiTrendingUp, FiUsers } from 'react-icons/fi';

const Mission: React.FC = () => {
  const values = [
    {
      icon: FiZap,
      title: 'Innovation',
      subtitle: 'Technologies de pointe',
      description: 'Nous utilisons les dernières technologies pour créer des solutions innovantes et performantes.'
    },
    {
      icon: FiTrendingUp,
      title: 'Performance',
      subtitle: 'Résultats mesurables',
      description: 'Chaque projet est conçu pour générer des résultats concrets et mesurables pour votre entreprise.'
    },
    {
      icon: FiUsers,
      title: 'Proximité',
      subtitle: 'Accompagnement dédié',
      description: 'Un accompagnement personnalisé et une relation de confiance avec chaque client.'
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Notre Mission
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformer les idées en réalités digitales performantes. Nous croyons que chaque entreprise mérite une présence digitale qui reflète son excellence et génère des résultats concrets.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="text-center p-8 glass-effect rounded-xl card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {/* @ts-ignore */}
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                
                <p className="text-primary-400 font-semibold mb-4">
                  {value.subtitle}
                </p>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#about"
            className="btn-primary"
          >
            Découvrir notre équipe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mission;
