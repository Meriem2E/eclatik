# éclatik — Site vitrine (Angular 20)

Site vitrine one-page pour **éclatik**, agence de communication 360°, développé en Angular 20
(composants *standalone*, sans NgModules), fidèle à la maquette et à la charte graphique fournies
(noir #0A0A0A, jaune #FFD64D, blanc, gris anthracite/moyen/clair, ivoire).

## Structure du projet

```
src/
  app/
    components/
      navbar/         Barre de navigation sticky + menu mobile
      hero/            Section d'accueil "Des marques qui font avancer le monde."
      vision/          "Des idées aujourd'hui pour un impact demain."
      expertises/      4 pôles d'expertise (Stratégie, Branding, Web, Activation)
      realisations/    Projets filtrables + bandeau de statistiques (+150, +80, +6, 100%)
      clients/         Logos clients + témoignages
      actualites/      Cartes d'articles / insights
      newsletter/      Formulaire d'inscription (bandeau sombre)
      contact/         Bloc contact + coordonnées
      footer/          Pied de page
    app.ts / app.html   Assemblage des sections
  assets/images/        Visuels fournis (portraits, ambiances jaune/noir)
  styles.scss           Design tokens (couleurs, typographie, boutons, layout)
```

## Démarrer le projet

Prérequis : Node.js ≥ 18.19 (idéalement Node 20+) et npm.

```bash
npm install
npm start        # démarre le serveur de dev sur http://localhost:4200
```

## Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans `dist/eclatik/browser`.

> Remarque : les polices Google Fonts (Manrope, Archivo) sont chargées via un lien dans
> `src/index.html`. Le "font inlining" au build est désactivé dans `angular.json`
> (`optimization.fonts: false`) car il nécessite un accès réseau sortant vers
> `fonts.googleapis.com` au moment du build ; les polices se chargent normalement
> dans le navigateur au runtime.

## Contenu et images

Les textes (accroches, expertises, réalisations, témoignages, articles) reprennent le
contenu de la maquette fournie. Les images utilisées dans `src/assets/images/` sont celles
que vous avez fournies ; certaines visuels "génériques" de la maquette (photo de couverture
avec la femme aux cheveux courts, logos clients en tant qu'images) n'étaient pas disponibles
en fichiers séparés — ils ont été remplacés par les visuels équivalents fournis ou par des
logotypes texte, à ajuster librement une fois vos assets finaux en main.

## Prochaines étapes suggérées

- Brancher le formulaire de newsletter et le bouton "Nous contacter" à un vrai service
  (API, CRM, Mailchimp, etc.).
- Remplacer les logotypes texte des clients par vos fichiers logo réels (SVG/PNG).
- Ajouter les pages de détail (fiche réalisation, article de blog) si besoin, via le routeur Angular.
