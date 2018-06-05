## Sample Demo app for demoing docker
This runs dockerization of a minute micro service type of app

Runs 4 containers, 2 are for resources (mongodb, redis) and 2 are for services

### Prerequisites
- Docker should be installed (latest version)
- docker-compose should be installed (latest version)

### To build & run

`docker-compose up -d`

### To test it 
Keep watching the logs and execute command 

`docker-compose logs -f --tail=1`

Now that service is running, from another terminal, make a API request like below 

```shell
curl -X POST \
  http://localhost:3000/api/v1/employees/ \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Batman",
  "dob": "2018-03-03",
  "department": "vigilante",
  "email":"batman@gotham.com"
}'
```

### Additional settings
Optionally you may have to run this command, in case your docker-compose is unable to create by itself

`docker volume create mongodata`