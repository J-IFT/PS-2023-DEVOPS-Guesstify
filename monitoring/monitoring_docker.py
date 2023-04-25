import docker

client = docker.from_env()

# Afficher l'état de tous les conteneurs Docker
for container in client.containers.list():
    status = container.status
    name = container.name
    print(f"Container name: {name}, Status: {status}")