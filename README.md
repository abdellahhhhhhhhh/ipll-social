# IPL Social

## Auteur
- Nom : EL haddaoui
- Prénom : Abdellah
- Email Vinci : abdellah.elhaddaoui@student.vinci.be

## Lien du projet
**À compléter** (URL GitHub du dépôt, ex. https://github.com/moncompte/ipl-social)

## Description
Ce projet implémente une fonction de **validation de mot de passe** en JavaScript avec une approche **TDD** (tests avec Jest).
Un pipeline **CI GitHub Actions** exécute automatiquement les tests lors de chaque **Pull Request** vers la branche `main`.

### Règles de validation du mot de passe
- Longueur **≥ 8** caractères
- Contient **au moins un caractère spécial** (hors espace)
- Contient **au moins un chiffre**
- **Ne contient pas** la chaîne **"IPL"** (insensible à la casse)

## Lancer les tests en local
```bash
npm install
npm test
```

## Déclenchement du pipeline CI
Le workflow GitHub Actions situé dans `.github/workflows/ci.yml` se déclenche pour toute **Pull Request** visant la branche `main` et exécute `npm install` puis `npm test` sur **Node.js 20**.

## Informations utiles
- Tests : `passwordChecker.test.js`
- Implémentation : `passwordChecker.js`
- Commande de test : `npm test`
- Pensez à **inviter** les enseignants sur le repo : `sebastien.debeauffort@vinci.be`, `jerome.plumat@vinci.be`
