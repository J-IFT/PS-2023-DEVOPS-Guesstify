# PS-2023-DEVOPS-Guesstify

*PS = Projet Scolaire*

## 📚 Projet Scolaire | Guesstify

Mars 2023

Groupe : Juliette, Brice, Flavien, Loris & Jeremy

### 📌 Consignes du projet :

Dans le but de remporter un appel d’offres pour la réalisation d’un projet décrit ci-dessous, plusieurs équipes DevOps décident de réaliser un prototype répondant aux spécifications demandées. Ces projets nécessitant un déploiement dans une infrastructure de Cloud, plusieurs équipes SysOps proposent le déploiement et la gestion de cette infrastructure complexe.

Le but du projet est d’implémenter une interface graphique pour un petit jeu dans le langage de votre choix (Web ou autre). En cas de problème sur sur les spécifications du projet, le formateur sera le représentant des besoins du client.

Contraintes :


Certaines contraintes ont déjà été identifiées sur le projet. Ces contraintes sont susceptibles d’évoluer en fonction des retours des utilisateurs, et de nouvelles contraintes pourront être ajoutées par le client si besoin.

• Déploiement au plus tôt : le projet est très prometteur et de nombreux concurrents se sont déjà positionnés sur le marché. Il est donc absolument primordial de disposer d’une première version en production de toute urgence afin de créer un marché captif au plut tôt. Cette version sera certainement très limitée dans un premier temps, et améliorée au fur et à mesure des mises à jour.

• Auto-scaling : il est difficile de prévoir le modèle d’adoption des applications proposées, cependant le service marketing prévoit déjà une montée en charge importante des utilisateurs dès les premières itérations. Il est donc nécessaire que l’infrastructure supporte un service de scaling dès la 2e itération.

• Zero-downtime : ce projet est critique pour le business du client, celui-ci insiste sur le fait qu’il n’est pas envisageable d’avoir une interruption de service lors de la mise à jour des composants applicatifs ou lors de changements dans l’infrastructure.

Le projet sera réalisé en suivant les préconisations des pratiques DevOps et SysOps. L’ensemble des points ci-dessous sont des réflexions à avancer en parallèle pour permettre une compatibilité entre chaque point technique du projet.

Infrastructure de Cloud : 

La mission des équipes SysOps est la mise à disposition et la maintenance d’infrastructures de Cloud (une infrastructure différente par équipe) permettant le déploiement de conteneurs applicatifs Docker. Ces conteneurs applicatifs seront fournis par les équipes DevOps et contiendront le code métier
du projet.
Attention : tout conteneur applicatif de n’importe qu’elle équipe DevOps devra pouvoir être déployé sur n’importe quelle plateforme Cloud des équipes SysOps !
Il pourra donc être nécessaire de définir un ensemble de spécifications communes, en accord avec l’ensemble des équipes projets. L’infrastructure physique utilisée comme support pourra être au choix :
• Une infrastructure d’IaaS (Amazon Web Services, . . . )
• Des machines virtuelles locales (Oracle® VirtualBox, . . . )

Isolation par conteneurs :

Il est demandé d’isoler chaque composant métier dans des conteneurs applicatifs. On utilisera des conteneurs Docker, que l’on pourra stocker dans le répertoire d’images par défaut (Docker Hub) ou dans un répertoire privé de l’équipe. Dans un véritable environnement de production, la sécurisation de ce répertoire d’images est une contrainte importante et pouvant induire des choix d’architecture spécifique. Pour le prototype, on pourra exceptionnellement omettre ces questions de sécurité pour simplifier le déploiement.

Infrastructure as Code :

Afin de suivre la recommandations DevOps d’IaC, il est demandé de coder au maximum les déploiements et configurations afin de les rendre reproductibles.

Le projet étant un prototype, il n’est cependant pas nécessaire d’intégrer l’ensemble des configurations dans un outil d’IaC de type Ansible, ce qui serait une bonne pratique dans un véritable environnement de production. L’ensemble du code nécessaire au déploiement et à la maintenance de l’infrastructure (scripts,
fichiers de configuration, . . . ) devront cependant être versionnés dans un dépôt de code partagé.

CI/CD :

Afin de garantir l’intégrité des images déployées, on mettra en place un pipeline de CI/CD. Pour le prototype, il n’est pas demandé d’ajouter d’étapes de contrôle de la qualité, ce qui serait une bonne idée pour un véritable projet (tests automatiques, analyse statique de code, . . . ) Ce pipeline devra donc au minimum générer une image Docker depuis un commit du code source provenant du dépôt de code.
Pour l’exécution du pipeline, on pourra au choix :
• Déployer un orchestrateur d’intégration continue (Jenkins, . . . )
• Utiliser un orchestrateur SaaS : pipelines Bitbucket, Gitlab, Github

Monitoring :

Un système de monitoring devra être mis en place, tant au niveau métier (crash de l’application, . . . ) qu’au niveau de l’infrastructure technique (état des services Docker ou k8s, . . . ) L’utilisation du couple Prometheus / Grafana est certainement ce qui serait utilisé en production. Une fois de plus, on pourra se limiter pour ce prototype à des outils plus simples, voir à l’écriture de scripts réalisant un monitoring minimal.

Résultat attendu :

• Une description des spécifications de l’application ;
• Un court document décrivant l’ensemble des principes Devops/Sysops suivis dans le projet et comment ceux-ci ont été implémentés ;
• Le ou les dépôts de code source utilisés, que ce soit pour la gestion du code source des applications métier, ou pour la gestion des configurations des infrastructures.
Si nécessaire, certains dépôts de code peuvent être partagés entre les différentes équipes.


### 💻 Applications et langages utilisés :

+ Docker / Python / HTML [...]
+ Visual studio code



## 🌸 Merci !
© J-IFT
