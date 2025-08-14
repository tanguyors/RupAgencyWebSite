import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    {
      number: '100+',
      label: 'Projets réalisés',
      description: 'Des projets variés et innovants livrés avec succès'
    },
    {
      number: '230%',
      label: 'd\'augmentation de trafic',
      description: 'Amélioration moyenne du trafic pour nos clients'
    },
    {
      number: '95%',
      label: 'Fidélisation client',
      description: 'Taux de satisfaction et de fidélisation exceptionnel'
    }
  ];

  return (
    <section className="pt-0 pb-2 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-cyan-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nos Chiffres Clés
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Des résultats concrets qui parlent d'eux-mêmes
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 rounded-xl card-hover"
            >
              {/* Halo effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-cyan-500/20 rounded-xl blur-xl"></div>
              
              {/* Card content */}
              <div className="relative bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8 h-full">
                <div className="text-center">
                  {/* Number */}
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
