<h1 align="center">
  HiPay Test technique - API Plantes
</h1>

Ce présent projet est un test technique pour HiPay. Il s'agit d'une API REST permettant de récupérer des informations sur des plantes via une API externe.

## Prérequis

[Node.js](https://nodejs.org/en/) version 18.14 ou supérieure

[NPM](https://www.npmjs.com/) version 9.8 ou supérieure

## Installation

Pour télécharger les dépendances du projet, exécutez la commande suivante :

```bash
npm install
```

## Configuration

Pour configurer le projet, vous devez créer un fichier `.env` à la racine du projet. Vous pouvez vous baser sur le fichier `.env.example` pour le remplir.

Ce dernier va necessiter une clé d'API pour l'API [Trefle.io](https://trefle.io/). Vous pouvez en générer une [ici](https://trefle.io/users/sign_up).

## Utilisation

Pour lancer le projet vous avez les commandes suivantes :

```bash
# Lancer le projet en mode développement
npm start:dev

# Lancer le projet en mode production
npm start
```

## Tests

Pour lancer les tests du projet, vous avez la commande suivante :

```bash
npm run test
```