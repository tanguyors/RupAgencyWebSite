import React, { useState } from 'react';
import { FiExternalLink, FiGithub, FiCode, FiTrendingUp } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "EcoVoyage",
      category: "ecommerce",
      type: "Site E-commerce",
      description: "Plateforme de voyage éco-responsable avec réservation en ligne et blog intégré.",
      image: "/rup/paysagesite.jpg",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      features: ["Paiement sécurisé", "Gestion des réservations", "Blog intégré", "Responsive design"],
      link: "#",
      github: "#",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "TechFlow",
      category: "webapp",
      type: "Application Web",
      description: "Dashboard de gestion de projets avec automatisation des tâches et analytics.",
      image: "/rup/paysagesite.jpg",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Redis"],
      features: ["Dashboard interactif", "Automatisation", "Analytics temps réel", "API REST"],
      link: "#",
      github: "#",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "ArtGallery",
      category: "creative",
      type: "Site Vitrine",
      description: "Galerie d'art contemporain avec exposition virtuelle et système de vente aux enchères.",
      image: "/rup/paysagesite.jpg",
      technologies: ["Next.js", "TypeScript", "Supabase", "Stripe"],
      features: ["Exposition virtuelle", "Enchères en ligne", "Galerie 3D", "Paiement sécurisé"],
      link: "#",
      github: "#",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "FitConnect",
      category: "webapp",
      type: "Application Mobile",
      description: "Application de fitness avec suivi personnalisé et communauté d'entraînement.",
      image: "/rup/paysagesite.jpg",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
      features: ["Suivi fitness", "Communauté", "Chat en temps réel", "Géolocalisation"],
      link: "#",
      github: "#",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "GreenMarket",
      category: "ecommerce",
      type: "Marketplace",
      description: "Marketplace de produits bio et locaux avec système de livraison optimisé.",
      image: "/rup/paysagesite.jpg",
      technologies: ["Angular", "Java", "MySQL", "AWS"],
      features: ["Marketplace", "Livraison optimisée", "Paiement multi-vendeurs", "Géolocalisation"],
      link: "#",
      github: "#",
      color: "from-teal-500 to-green-600"
    },
    {
      id: 6,
      title: "CreativeStudio",
      category: "creative",
      type: "Site Portfolio",
      description: "Portfolio d'agence créative avec animations avancées et présentation interactive.",
      image: "/rup/paysagesite.jpg",
      technologies: ["Three.js", "GSAP", "WebGL", "Framer Motion"],
      features: ["Animations 3D", "Interactions avancées", "Portfolio interactif", "Performance optimisée"],
      link: "#",
      github: "#",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'webapp', name: 'Applications Web' },
    { id: 'creative', name: 'Créatif' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-cyan-900/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Notre Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos réalisations créatives et innovantes. Chaque projet raconte une histoire unique de transformation digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-cyan-900/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white border border-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
                  
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <a
                          href={project.link}
                          className="flex-1 bg-primary-500 hover:bg-primary-600 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                        >
                          {/* @ts-ignore */}
                          <FiExternalLink className="w-4 h-4" />
                          Voir le projet
                        </a>
                        <a
                          href={project.github}
                          className="bg-dark-800 hover:bg-dark-700 text-white p-2 rounded-lg transition-colors"
                        >
                          {/* @ts-ignore */}
                          <FiGithub className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      {project.type}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                        {/* @ts-ignore */}
                        <FiCode className="w-4 h-4" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-dark-800 text-primary-400 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                        {/* @ts-ignore */}
                        <FiTrendingUp className="w-4 h-4" />
                        Fonctionnalités
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="text-gray-400 text-xs flex items-center gap-2">
                            <span className="w-1 h-1 bg-primary-500 rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-12">
              <h2 className="text-3xl font-bold mb-4">Prêt à créer votre projet ?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Transformons votre vision en réalité. Notre équipe est prête à vous accompagner dans la création de votre projet digital unique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  <span className="mr-2">→</span>
                  Démarrer votre projet
                </a>
                <a
                  href="/services"
                  className="bg-dark-800 hover:bg-dark-700 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-gray-700 hover:border-primary-500"
                >
                  Voir nos services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
