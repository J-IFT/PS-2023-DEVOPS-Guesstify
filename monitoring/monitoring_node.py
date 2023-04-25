import requests
import time
import os

url = os.environ.get('CONTAINER_IP')
# url = 'http://localhost:5000'
log_file_path = 'serveur_node.log'+':5000'
check_interval = 5 # Delai en secondes

while True:
    try:
        # Envoyer une requête HTTP GET a l'URL du serveur Node.js
        start_time = time.time()
        response = requests.get(url)
        end_time = time.time()

        if response.status_code == 200:
            with open(log_file_path, 'a') as f:
                f.write(f"{time.strftime('%Y-%m-%d %H:%M:%S')} - {url} ONLINE - response : {response.status_code}  ({end_time - start_time:.2f}) \n")
        else:
            with open(log_file_path, 'a') as f:
                f.write(f"{time.strftime('%Y-%m-%d %H:%M:%S')} - {url} - response : {response.status_code}.\n")
    except requests.exceptions.RequestException:
        with open(log_file_path, 'a') as f:
            f.write(f"{time.strftime('%Y-%m-%d %H:%M:%S')} - {url} OFFLINE\n")

    time.sleep(check_interval)