## Developer

### Environment variables

Add to the environment file *.env* the following entries:
```
POSTGRES_USER=<<enter user>>
POSTGRES_PASSWORD=<<enter password (only utf-8)>>
POSTGRES_DB=<<enter db name>>
PGADMIN_DEFAULT_EMAIL=<<enter random email>>
PGADMIN_DEFAULT_PASSWORD=<<enter random password>>
```

### Set up local development environment

You need to have python installed on the system. Then for local development create a local python environment:
```
python3 -m venv backend/.venv
source backend/.venv/bin/activate
pip install -r backend/requirements.txt
```

To start and stop the local services:
```
source start.sh --local
```
and if you want to stop it
```
source stop.sh
```
Sometimes if you interrupt the task in the terminal, you need to navigate back to the root folder `cd ..`

If you install new packages check which new requirements you have by

```
pip list --not-required | awk '{print $1 "==" $2}'
```

### For development testing and production

Use 
```
source start.sh --development
source start.sh --development --build
```
depending on whether you need to rebuild the docker containers or not.

Again use 
```
source stop.sh
```
to stop the services

### Introspect

```
docker exec -it backend cat /var/log/apache2/error.log
```


## AWS deployment

connect to instance:

```
ssh -i "keyfile.pem" ubuntu@ip_address
```

update and upgrade
```
sudo apt update
sudo apt upgrade -y
```

reboot instance

```
sudo apt install docker.io git -y
```

``` 
sudo systemctl start docker
sudo systemctl enable docker
```

```
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
``` 

```
sudo chmod +x /usr/local/bin/docker-compose
```

```
sudo usermod -aG docker $USER
```

then log out of the instance and log in again. then clone the repo:

```
git clone https://github.com/Lakat-OS/website.git
```
Then copy .env file over using:

```
sudo source copy_dotenv_via_scp.sh
```

And then push changes to instance using

```
source push_changes_to_instance.sh
```

It might require sudo priviledges.


```
sudo docker system prune -a
```
