# PS-2023-DEVOPS-Guesstify

## Création de l'image Docker

Construire l'image docker depuis la racine du projet :

`docker build --tag guesstify .`

## Utiliser l'image Docker

Récupérer l'image depuis DockerHub

`docker pull lorispercin/guesstify`

Lancer l'image. Guesstify utilise le port 5000, si ce port est déjà utilisé par une autre application, publier ce port vers un port libre de la machine hôte.

`docker run -d -p 5000:5000 --name guesstify lorispercin/guesstify`