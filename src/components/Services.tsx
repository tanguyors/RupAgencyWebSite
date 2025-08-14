import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';

const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      title: "Sites web & e-commerce",
      description: "Des sites modernes, performants et optimisés SEO, conçus pour convertir et refléter votre identité.",
      features: [
        "Design responsive premium (dark / néon)",
        "Performance (Core Web Vitals) et accessibilité",
        "SEO technique + balisage OG, sitemaps",
        "Checkout et intégrations e-commerce"
      ]
    },
    {
      title: "Automatisation & IA",
      description: "Automatisez vos process, intégrez des assistants IA et alignez vos outils pour gagner du temps.",
      features: [
        "Workflows no-code/low-code (Zapier/Make)",
        "Assistants IA (chat, RAG, FAQ, back-office)",
        "Analytique et reporting automatisé",
        "Connecteurs CRM et bases de données"
      ]
    },
    {
      title: "Photographie & vidéo",
      description: "Un contenu visuel premium qui renforce votre marque sur le web et les réseaux.",
      features: [
        "Shooting produits, reportages, interviews",
        "Montage vidéo court format, sous-titres, reels",
        "Retouche avancée et direction artistique",
        "Delivery optimisée (web/social, formats compressés)"
      ]
    },
    {
      title: "Social Media & campagnes",
      description: "Ligne éditoriale, planning, contenus performants et campagnes mesurables.",
      features: [
        "Calendrier éditorial et templates",
        "Création/programmation multi-plateformes",
        "Ads (Meta/TikTok/Google) & AB testing",
        "Tableau de bord KPI et itérations"
      ]
    }
  ];

  const faqQuestions = [
    {
      question: "Combien de temps pour un site vitrine ?",
      answer: "Un site vitrine prend généralement 2-4 semaines selon la complexité et le nombre de pages."
    },
    {
      question: "Proposez-vous la maintenance ?",
      answer: "Oui, nous proposons des forfaits de maintenance incluant mises à jour, sauvegardes et support technique."
    },
    {
      question: "Quelles techno utilisez-vous ?",
      answer: "React, Next.js, TypeScript, Tailwind CSS, Node.js, et les meilleures pratiques du web moderne."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
              Nos Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Des solutions complètes et premium pour votre marque : sites web & e-commerce, automatisation & IA, photographie/vidéo pro, social media & campagnes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-cyan-900/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Services Sections */}
          {services.map((service, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-12 mb-20">
              {/* Service Details */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="text-primary-500 mr-3 flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* FAQ Section */}
              <div>
                <h4 className="text-white font-semibold mb-6">FAQ</h4>
                <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6">
                  {faqQuestions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="border-b border-gray-700 last:border-b-0">
                      <button
                        onClick={() => toggleFaq(faqIndex)}
                        className="w-full flex justify-between items-center py-4 text-left text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <span className="font-medium">{faq.question}</span>
                        {/* @ts-ignore */}
                        <FiChevronDown 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            openFaq === faqIndex ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {openFaq === faqIndex && (
                        <div className="pb-4 text-gray-400 text-sm">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* CTA Section */}
          <div className="text-center mt-16">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center"
            >
              <span className="mr-2">→</span>
              Démarrer votre projet
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
