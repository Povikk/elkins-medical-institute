# Elkins Medical Institute

Registre médical destiné à gérer un cabinet installé dans l’Ouest américain en 1899. L’application centralise les patients, les consultations, les photographies médicales et les tâches courantes du cabinet dans une interface inspirée des registres de l’époque.

L’application est accessible en ligne : [registre-medical-rp.povik.chatgpt.site](https://registre-medical-rp.povik.chatgpt.site/)

## Fonctionnalités

- Tableau de bord avec consultations récentes, rendez-vous et patients à suivre.
- Création, modification, recherche, archivage et suppression des dossiers patients.
- Fiches patients avec coordonnées télégraphiques, antécédents, allergies, statut et historique des consultations.
- Consultations détaillées avec choix rapides pour les motifs, symptômes et soins, suivi des blessures et impression d’une fiche.
- Photographies médicales ajoutées par glisser-déposer, converties en WebP et classées par patient, date, nature, localisation et étape des soins.
- Galerie photographique globale avec recherche, aperçu en grand, filtre sépia et cadres adaptés au format de l’image.
- Registre des maladies nerveuses et mentales pour consigner les observations, l’attitude, les sujets abordés et le suivi.
- Agenda des rendez-vous avec gestion des statuts.
- Ordonnances à saisie libre, imprimables ou exportables en PDF depuis le navigateur.
- Génération de fiches patients, certificats médicaux, notes d’hospitalisation et comptes rendus de consultation.
- Livre des honoraires avec montants, statuts de règlement, monnaie configurable et total des recettes réglées.
- Personnalisation du médecin, du cabinet, de la ville, de la signature et de l’année du registre.
- Sauvegarde automatique dans le navigateur, avec import et export complets au format JSON.
- Données de démonstration chargées lors de la première utilisation.

## Technologies utilisées

- TypeScript
- React 19 et Next.js 16
- Vinext et Vite 8
- Tailwind CSS 4
- Composants shadcn/ui et Radix UI
- IndexedDB pour la sauvegarde locale
- API Canvas du navigateur pour le traitement et la conversion des photographies
- Cloudflare Workers pour l’exécution et l’hébergement

## Installation et utilisation

Les données restent dans le navigateur utilisé. Il est conseillé d’exporter régulièrement une copie JSON depuis les paramètres du registre.

Pour lancer le projet localement, Node.js 22.13 ou une version plus récente est nécessaire :

```bash
git clone https://github.com/Povikk/elkins-medical-institute.git
cd elkins-medical-institute
npm run install:ci
npm run dev
```

Le serveur de développement est disponible par défaut sur [http://localhost:5173](http://localhost:5173).

Commandes utiles :

```bash
npm run lint
npm run build
npm start
```

`npm start` lance un aperçu local de la version compilée. L’adresse utilisée est affichée dans le terminal.

## Auteur

**Jonathan Ragot**\
GitHub : [Povikk](https://github.com/Povikk)
