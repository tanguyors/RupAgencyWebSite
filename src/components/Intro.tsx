import React from 'react';

const Intro: React.FC = () => {
  const stats = [
    { number: '5+', label: 'Années d\'expertise' },
    { number: '100+', label: 'Projets livrés' },
    { number: '25+', label: 'Pays couverts' },
    { number: '24/7', label: 'Support premium' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
                BASÉ À BALI, IMPACT MONDIAL
              </p>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-white">RupAgency</span>
                <br />
                <span className="gradient-text">L'Excellence Digitale</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Depuis Bali, nous accompagnons les entreprises européennes et asiatiques dans leur transformation digitale avec une approche premium, créative et orientée résultats mesurables.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 glass-effect rounded-xl card-hover"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
