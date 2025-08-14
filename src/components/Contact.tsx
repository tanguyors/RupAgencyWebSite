import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiMessageCircle, FiSend, FiCheck } from 'react-icons/fi';
import Header from './Header';
import Footer from './Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
         {
       icon: FiMail,
       title: "Email",
       value: "contact@rupagency.com",
       description: "Réponse sous 24h"
     },
    {
      icon: FiPhone,
      title: "Téléphone",
      value: "+62 812-3456-7890",
      description: "Lun-Ven, 9h-18h (WIB)"
    },
         {
       icon: FiMapPin,
       title: "Bureau",
       value: "Bali, Indonésie",
       description: "Lovina, Buleleng Regency"
     },
    {
      icon: FiClock,
      title: "Disponibilité",
      value: "Projets internationaux",
      description: "Fuseaux horaires adaptés"
    }
  ];

  const services = [
    "Sites web & e-commerce",
    "Automatisation & IA",
    "Photographie & vidéo",
    "Social Media & campagnes",
    "Branding & identité",
    "Formation & conseil"
  ];

  const budgets = [
    "Moins de 5 000€",
    "5 000€ - 15 000€",
    "15 000€ - 30 000€",
    "30 000€ - 50 000€",
    "Plus de 50 000€"
  ];

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
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Prêt à transformer votre vision en réalité ? Discutons de votre projet et créons ensemble quelque chose d'extraordinaire.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/5 to-cyan-900/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {/* @ts-ignore */}
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                  <p className="text-primary-400 font-medium mb-1">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Démarrer votre projet</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                                     <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                     {/* @ts-ignore */}
                     <FiCheck className="w-8 h-8 text-green-400" />
                   </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message envoyé !</h3>
                  <p className="text-gray-300">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                        Service souhaité
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Budget estimé
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      >
                        <option value="">Sélectionnez un budget</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Détails du projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                      placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                                         ) : (
                       <>
                         {/* @ts-ignore */}
                         <FiSend className="w-5 h-5 mr-2" />
                         Envoyer le message
                       </>
                     )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              
              {/* Quick Contact */}
              <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Contact rapide</h3>
                <div className="space-y-4">
                                     <a 
                     href="mailto:contact@rupagency.com"
                     className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                   >
                     {/* @ts-ignore */}
                     <FiMail className="w-5 h-5 mr-3" />
                     contact@rupagency.com
                   </a>
                                     <a 
                     href="tel:+6281234567890"
                     className="flex items-center text-gray-300 hover:text-primary-400 transition-colors"
                   >
                     {/* @ts-ignore */}
                     <FiPhone className="w-5 h-5 mr-3" />
                     +62 812-3456-7890
                   </a>
                                     <div className="flex items-start text-gray-300">
                     {/* @ts-ignore */}
                     <FiMapPin className="w-5 h-5 mr-3 mt-0.5" />
                     <div>
                       <p>Bali, Indonésie</p>
                       <p className="text-sm text-gray-400">Lovina, Buleleng Regency</p>
                     </div>
                   </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Notre processus</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Consultation gratuite</h4>
                      <p className="text-gray-400 text-sm">Discussion de vos besoins et objectifs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Proposition personnalisée</h4>
                      <p className="text-gray-400 text-sm">Devis détaillé et planning de projet</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Démarrage du projet</h4>
                      <p className="text-gray-400 text-sm">Mise en œuvre et suivi régulier</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Notre localisation</h3>
                                 <div className="bg-dark-800 rounded-lg h-48 flex items-center justify-center">
                   <div className="text-center">
                     {/* @ts-ignore */}
                     <FiMapPin className="w-12 h-12 text-primary-500 mx-auto mb-2" />
                     <p className="text-gray-400">Lovina, Bali</p>
                     <p className="text-sm text-gray-500">Indonésie</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Quels sont vos délais de réponse ?</h3>
                <p className="text-gray-400 text-sm">Nous répondons généralement sous 24h en semaine. Pour les urgences, n'hésitez pas à nous appeler.</p>
              </div>
              <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Travaillez-vous à distance ?</h3>
                <p className="text-gray-400 text-sm">Absolument ! Nous collaborons avec des clients du monde entier via visioconférence et outils collaboratifs.</p>
              </div>
              <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Proposez-vous des devis gratuits ?</h3>
                <p className="text-gray-400 text-sm">Oui, nous proposons une consultation gratuite pour évaluer vos besoins et établir un devis personnalisé.</p>
              </div>
              <div className="bg-dark-900/80 backdrop-blur-sm border border-primary-500/30 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">Quels sont vos moyens de paiement ?</h3>
                <p className="text-gray-400 text-sm">Nous acceptons les virements bancaires, PayPal, et les cartes de crédit. Paiement échelonné possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
