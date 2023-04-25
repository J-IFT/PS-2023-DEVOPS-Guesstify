FROM python:3.8-slim-buster

WORKDIR /app

# Installation des dépendances
RUN apt-get update && \
    apt-get install -y git && \
    rm -rf /var/lib/apt/lists/*

# Mise à jour des outils pip et setuptools
RUN pip install --upgrade pip && \
    pip install --upgrade setuptools

# Clonage du repo
RUN git clone https://gitlab.com/J-IFT/projet_devops_guesstify_monitoring.git

# Installation des dépendances Python
RUN pip install requests docker

# Définition de l'adresse IP du deuxième conteneur
ENV CONTAINER_IP 192.168.1.2

# Exécution du script Python
CMD ["python", "monitoring_node.py"]