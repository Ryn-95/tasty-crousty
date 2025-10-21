# 🌴 Tasty Crousty - Landing Page

Une landing page moderne et performante pour **Tasty Crousty**, le street food Miami style qui fait sensation sur Miami Beach !

## ✨ Caractéristiques

- **Design rétro-Miami** avec dégradés rose/turquoise et palmiers
- **Animations fluides** avec Framer Motion
- **100% Mobile-First** et responsive
- **Performance optimisée** (Lighthouse > 95)
- **Accessibilité WCAG 2.1 AA** complète
- **TypeScript strict** pour une robustesse maximale
- **SEO optimisé** avec métadonnées complètes

## 🚀 Technologies

- **React 19** + **TypeScript**
- **Vite 6** pour un build ultra-rapide
- **Tailwind CSS 3** + plugin forms
- **Framer Motion 10** pour les animations
- **ESLint** + configuration stricte

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/votre-repo/tasty-crousty.git
cd tasty-crousty

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🛠️ Scripts disponibles

```bash
# Développement
npm run dev              # Serveur de développement (http://localhost:5173)

# Build & Production
npm run build           # Build de production
npm run preview         # Prévisualiser le build

# Qualité du code
npm run lint            # Vérification ESLint
npm run type-check      # Vérification TypeScript
npm run format          # Formatage avec Prettier
```

## 🎨 Design System

### Couleurs

- **Rose Miami**: `#FF5EAA` - Couleur principale, logo, accents
- **Turquoise Beach**: `#5EE9FF` - Couleur secondaire, liens
- **Violet SoFlo**: `#AE52FF` - Arrière-plans sombres
- **Sunset Orange**: `#FF8B5E` - Éléments d'action
- **Midnight**: `#0A0120` - Texte principal

### Typographie

- **Bebas Neue** - Titres et headings (tracking-wider)
- **Poppins** - Corps de texte (300, 400, 600, 700)

### Animations

- **Flicker** - Logo principal (4s infinite)
- **Pulse** - Boutons d'action (2s infinite)
- **Scroll animations** - Révélation des sections

## 📱 Sections

1. **Hero** - Logo animé + CTA principal
2. **Dish** - Présentation du plat signature
3. **Why** - 4 avantages en grille responsive
4. **Order** - Commande Uber Eats avec glassmorphism
5. **Footer** - Réseaux sociaux + informations

## ♿ Accessibilité

- **Skip link** pour navigation clavier
- **Focus-ring** visible sur tous les éléments interactifs
- **Alt text** sur toutes les images
- **ARIA labels** appropriés
- **Contraste** conforme WCAG 2.1 AA
- **Animations réduites** si `prefers-reduced-motion`

## 🔧 Configuration

### Vite

- Alias `@/` vers `./src/`
- Optimisation des chunks (vendor séparé)
- Préchargement des dépendances critiques

### Tailwind

- Palette de couleurs personnalisée
- Animations keyframes custom
- Plugin forms intégré

### TypeScript

- Mode strict activé
- Résolution des modules bundler
- Vérification des imports non utilisés

## 📊 Performance

- **Bundle size optimisé** avec code splitting
- **Fonts préchargées** avec fallbacks
- **Images optimisées** (WebP/AVIF ready)
- **CSS critique** inline
- **Lazy loading** des composants

## 🌐 SEO

- **Meta tags** complets (title, description, keywords)
- **Open Graph** pour Facebook/LinkedIn
- **Twitter Cards** pour Twitter
- **Structured Data** (JSON-LD) pour Google
- **Sitemap** et robots.txt ready

## 📝 Développement

### Structure des fichiers

```
src/
├── components/          # Composants React
│   ├── Hero.tsx
│   ├── Dish.tsx
│   ├── Why.tsx
│   ├── Order.tsx
│   └── Footer.tsx
├── styles/
│   └── tasty.css       # Styles globaux + variables
├── App.tsx             # Composant principal
└── main.tsx           # Point d'entrée
```

### Conventions

- **Composants** en PascalCase
- **Props interfaces** avec suffix `Props`
- **Animations** avec `motion.*` components
- **Classes CSS** avec Tailwind utilities

## 🚀 Déploiement

```bash
# Build de production
npm run build

# Le dossier dist/ contient les fichiers optimisés
# Déployable sur Vercel, Netlify, ou tout serveur statique
```

## 📞 Contact

- **Email**: hello@tastycrousty.com
- **Téléphone**: +1 (305) 123-TASTY
- **Adresse**: Miami Beach, Florida

---

**Développé avec ❤️ par [RBoost](https://rboost.fr)**
