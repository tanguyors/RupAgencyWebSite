# RupAgency - Site Web Officiel

Site web officiel de RupAgency, agence créative & digitale basée à Bali.

## 🚀 Technologies

- **React 18** - Framework JavaScript moderne
- **TypeScript** - Typage statique pour un code plus robuste
- **TailwindCSS** - Framework CSS utilitaire
- **React Icons** - Icônes SVG optimisées
- **React Helmet Async** - Gestion du SEO

## 📦 Installation

1. **Cloner le projet**
```bash
git clone [url-du-repo]
cd RupAgencyWebSite
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer en développement**
```bash
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 🏗️ Structure du Projet

```
src/
├── components/          # Composants React
│   ├── Header.tsx      # Navigation principale
│   ├── Hero.tsx        # Section d'accueil
│   ├── Intro.tsx       # Section "L'Excellence Digitale"
│   ├── Mission.tsx     # Section "Notre Mission"
│   ├── Services.tsx    # Section services
│   ├── Stats.tsx       # Section chiffres clés
│   └── Footer.tsx      # Pied de page
├── App.tsx             # Composant principal
├── index.tsx           # Point d'entrée
└── index.css           # Styles globaux

public/
├── rup/                # Assets spécifiques
│   ├── hero-laptop.png # Image hero
│   ├── amaury.jpg      # Photo équipe
│   ├── tanguy.jpg      # Photo équipe
│   └── og-home.png     # Image Open Graph
└── manifest.json       # Configuration PWA
```

## 🎨 Design System

### Couleurs
- **Primary**: Violet gradient (`#8b5cf6` → `#06b6d4`)
- **Dark**: Fond sombre (`#0b0b12`)
- **Gray**: Nuances de gris pour le texte

### Typographie
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Composants
- **Boutons**: `.btn-primary` et `.btn-outline`
- **Cartes**: `.glass-effect` avec effet de verre
- **Gradients**: `.gradient-text` et `.gradient-bg`

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile First** - Design optimisé mobile
- **Breakpoints** - sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation** - Menu hamburger sur mobile

## 🚀 Déploiement

### Railway (Recommandé)
1. Connecter le repo GitHub à Railway
2. Configurer les variables d'environnement si nécessaire
3. Déployer automatiquement

### Build de Production
```bash
npm run build
```

### Tests
```bash
npm test
```

## 📊 Performance

- **Lighthouse Score** ≥ 90 sur Performance, SEO, Accessibilité
- **Images optimisées** avec fallbacks
- **Lazy loading** des composants
- **Code splitting** automatique

## 🔧 Configuration

### TailwindCSS
Configuration personnalisée dans `tailwind.config.js` avec :
- Couleurs personnalisées
- Animations custom
- Breakpoints optimisés

### TypeScript
Configuration stricte dans `tsconfig.json` :
- Target ES5
- Module ESNext
- JSX react-jsx
- Strict mode activé

## 📝 SEO

- **Meta tags** complets
- **Open Graph** pour les réseaux sociaux
- **Twitter Cards** optimisées
- **Schema.org** markup
- **Sitemap** automatique

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Site Web**: [rupagency.com](https://rupagency.com)
- **Email**: contact@rupagency.com
- **Localisation**: Bali, Indonésie

---

Développé avec ❤️ par l'équipe RupAgency
