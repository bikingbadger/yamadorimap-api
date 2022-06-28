
## Docker

### Create Docker File

```bash
cd yamadori-api
docker build -t yamadori-api .
```

### Run service

```bash
docker run -p 3000:3000 -d --name yamadori-api-ms yamadori-api
```