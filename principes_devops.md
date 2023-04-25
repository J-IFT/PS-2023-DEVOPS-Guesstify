# Principes Devops/Sysops suivis dans le projet

## Technologies

- Docker : Utilisé pour la conteneurisation de l'application.
    - Simplifie grandement le déploiement
    - Largement utilisé, il est simple de trouver de la documentation
    - Tout le groupe connait au moins les bases pour utiliser Docker, il est donc plus simple d'expliquer le travail
      réalisé
- GitLab CI/CD : Utilisé pour les parties d'intégration et développement continus.
    - Directement intégré dans le répertoire GitLab utilisé pour ce projet, évite de s'éparpiller sur plusieurs outils

## Développement continu

_TODO_

## Déploiement continu

### Choix de l'image Docker de base

Notre application est une application Node + Express. Pour l'image Docker, nous avons donc choisi une image node comme
base. Après avoir créé l'image et l'avoir déjà poussée sur le registre, nous nous sommes rendu compte qu'elle pesait
quasiment 1Go. Cela nous a paru étrange pour une application aussi simpliste et après un peu de recherche, nous avons
trouvé que l'image de base en était la cause. L'image `node:14` à elle seule pèse presque 900mo, nous l'avons alors
changée pour sa version alpine `node:14-alpine` et notre image ne pèse plus que 147mo.

### Stocker les variables d’environnement dans une variable GitLab CI/CD

GitLab CI/CD propose de stocker des données dans des variables directement depuis l’interface du répertoire. Nous les
avons utilisées pour stocker les données sensibles utilisées pour le déploiement comme la clé SSH, l’adresse ip du
serveur et les variables d’environnement utilisé par `gitlab-ci.yml`.

### Hébergement sur serveur

L'application est hébergée sur un VPS DigitalOcean. Ce VPS est aussi utilisé pour héberger le site de l'un des membres
du projet, Loris, et est donc déjà configuré pour plus facilement déployer Guesstify sur un des sous domaines :
[guesstify.lorisperc.in](https://guesstify.lorisperc.in/).

Afin de garder une trace des milieux qui seront en contact avec la clé privée SSH du serveur, on enregistre ce dernier
en tant que runner GitLab.

Dans le pipeline de déploiement, je voudrais me connecter à mon serveur en utilisant SSH afin de récupérer et lancer
l'image automatiquement. La clé SSH est stockée dans une variable CI/CD de GitLab.

Nous accordons une autorité autonome (GitLab CI/CD) l'accès au serveur pour automatiser la routine de déploiement.
La clé privée doit donc quitter le système sur lequel elle a été générée et être confiée à GitLab. Nous avons installé
le service gitlab-runner sur le serveur et nous l'avons ensuite enregistré dans les options CI/CD du répertoire GitLab
de l’application. Cette partie normalement plutôt simple a posé pas mal de problème, car le script d’installation
fourni dans la documentation ne fonctionne pas avec l’installation Ubuntu 22.10 du serveur. Nous avons alors dû
installer le runner manuellement en copiant le répertoire sur mon serveur pour lancer l’installation de là.

### Configurer le fichier `gitlab-ci.yml`

Les actions automatisées pour la construction de l'image, sa publication sur un registre de conteneurs et même son
lancement sur le serveur sont configurées dans ce fichier. Ces actions, découpées en étapes forment un pipeline.

Le pipeline va construire une image Docker en utilisant le Dockerfile configuré plus tôt et le poussera sur un registre
de conteneurs. Il se connectera ensuite sur le serveur pour télécharger cette nouvelle image et lancer un conteneur basé
sur cette image, mettant en ligne la dernière version de l’application automatiquement. Ces actions sont réalisées via
SSH directement sur le serveur. Un utilisateur spécial utilisé seulement par les pipelines GitLab se charge de réaliser
les actions.

GitLab fourni un registre de conteneur pour chaque projet. Nous l'utilisons pour la publication de l'image sur le
serveur.
