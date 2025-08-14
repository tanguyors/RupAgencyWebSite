import React from 'react';

const About: React.FC = () => {
  const values = [
    {
      icon: "⚡",
      title: "Innovation",
      description: "Toujours à la pointe des tendances."
    },
    {
      icon: "🛡️",
      title: "Excellence",
      description: "Qualité irréprochable à chaque étape."
    },
    {
      icon: "🎯",
      title: "Impact",
      description: "Des résultats mesurables et durables."
    }
  ];

  const process = [
    {
      number: "1",
      title: "Analyse",
      subtitle: "& stratégie"
    },
    {
      number: "2",
      title: "Création",
      subtitle: "& design"
    },
    {
      number: "3",
      title: "Développement",
      subtitle: "& intégration"
    },
    {
      number: "4",
      title: "Lancement",
      subtitle: "& optimisation"
    }
  ];

  const features = [
    {
      icon: "⚡",
      title: "Créativité",
      description: "Des identités et expériences numériques premium qui marquent."
    },
    {
      icon: "🛡️",
      title: "Exigence",
      description: "Qualité irréprochable, du cadrage à la mise en production."
    },
    {
      icon: "🎯",
      title: "Impact",
      description: "Des résultats mesurables et durables, guidés par la data."
    },
    {
      icon: "👥",
      title: "Accompagnement",
      description: "Une relation simple, humaine et transparente à chaque étape."
    }
  ];

  const team = [
    {
      name: "Amaury",
      role: "Co-fondateur & Stratégiste Digital",
      image: "/rup/amaury.jpg",
      initial: "A"
    },
    {
      name: "Tanguy",
      role: "Co-fondateur & Responsable Technique",
      image: "/rup/tanguy.jpg",
      initial: "T"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-cyan-900/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section À propos */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            À propos
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl">
            Mission, valeurs, équipe. Nous créons des expériences premium qui propulsent les marques.
          </p>
        </div>

        {/* Section Qui sommes-nous */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Qui sommes-nous ?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              RUPAGENCY est née de la passion pour l'innovation et la créativité digitale. Nous aidons les marques à se démarquer dans un monde connecté grâce à des stratégies sur mesure et une exécution impeccable.
            </p>
                         <ul className="space-y-3">
               <li className="flex items-center text-gray-300">
                 <span className="text-primary-500 mr-3 flex-shrink-0">✓</span>
                 Création sur mesure
               </li>
               <li className="flex items-center text-gray-300">
                 <span className="text-primary-500 mr-3 flex-shrink-0">✓</span>
                 Stratégies data-driven
               </li>
               <li className="flex items-center text-gray-300">
                 <span className="text-primary-500 mr-3 flex-shrink-0">✓</span>
                 Approche humaine et transparente
               </li>
             </ul>
          </div>
          
                     <div className="grid grid-cols-2 gap-4">
             {features.map((feature, index) => (
               <div key={index} className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6">
                 <div className="text-primary-500 mb-3 text-2xl">
                   {feature.icon}
                 </div>
                  <h4 className="text-white font-semibold mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Section Ce qui nous anime */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Ce qui nous anime
          </h3>
                     <div className="grid md:grid-cols-3 gap-8">
             {values.map((value, index) => (
               <div key={index} className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8 text-center">
                 <div className="text-primary-500 mb-4 flex justify-center text-3xl">
                   {value.icon}
                 </div>
                  <h4 className="text-white font-semibold mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Section Comment nous travaillons */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Comment nous travaillons
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl md:text-7xl font-bold gradient-text mb-4">
                  {step.number}
                </div>
                <h4 className="text-white font-semibold text-lg mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-300">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
          
                     {/* CTA Button */}
           <div className="text-center mt-12">
             <a
               href="#contact"
               className="btn-primary inline-flex items-center"
             >
               <span className="mr-2">→</span>
               Démarrer votre projet
             </a>
           </div>
        </div>

        {/* Section Équipe */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Derrière chaque projet, une équipe passionnée
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                    onError={(e) => {
                      // Fallback si l'image n'existe pas
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<span class="text-2xl font-bold text-white">${member.initial}</span>`;
                      }
                    }}
                  />
                </div>
                <h4 className="text-white font-semibold text-xl mb-2">
                  {member.name}
                </h4>
                <p className="text-gray-300">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
