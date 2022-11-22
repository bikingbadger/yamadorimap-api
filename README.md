# Yamadori
## Setup Development Environment


### Create Docker Container

```bash
cd yamadori-api
docker-compose up --build -d mongodb
```
### Rebuild Image

```bash
docker-compose up --build
```
## Local Development

```bash
yarn
yarn server
```
