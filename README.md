# Kasa — Plateforme de location d'appartements entre particuliers

Refonte front end de Kasa : migration du site historique (legacy ASP.NET) vers une application React moderne, composants réutilisables et navigation complète.

## Contexte

Kasa, leader français de la location d'appartements entre particuliers (plus de 500 annonces par jour), demande une refonte totale de son site vieux de dix ans et une migration vers une stack JavaScript avec React côté front end. Ma mission : développer l'ensemble de l'application — composants React et routes React Router — en suivant les maquettes Figma responsives. Le back end n'étant pas encore recruté, les 20 dernières annonces extraites en JSON servent de données réalistes en attendant l'API.

## Fonctionnalités

- **Page d'accueil** : les 20 annonces en cartes cliquables vers leur fiche
- **Galerie photo en boucle** — « précédent » depuis la première affiche la dernière, et inversement ; boutons et numérotation masqués si une seule image ; hauteur de cadre constante, images cadrées et centrées
- **Fiche logement** : titre, localisation, tags, hôte, note, description et équipements
- **Composants Collapse** fermés par défaut, ouverture/fermeture au clic, animés comme sur le prototype Figma
- **Pages À propos et 404**, navigation React Router complète

## Méthode

- Arbre de composants dessiné avant le code, à partir de la logique de composants du Figma — qui affiche quoi, qui détient quel état
- Un composant = une responsabilité, réutilisé dès que le besoin apparaît deux fois
- Contraintes fonctionnelles traitées en cas limites explicites : galerie à une image, boucle infinie, état initial des Collapse
- Données mockées dans une couche séparée — le jour où l'API arrive, rien d'autre à changer

## Technologies

- React (application montée avec Vite, conformément aux coding guidelines de Kasa)
- React Router
- Données JSON mockées (20 annonces)

## Démarrage

```bash
git clone https://github.com/DierWey/site-kasa.git
cd site-kasa
npm install
npm run dev
```

## Liens

- 📁 Repo : [github.com/DierWey/site-kasa](https://github.com/DierWey/site-kasa)
- 🎨 Maquettes Figma et coding guidelines : fournies dans le brief du projet
