## Local Development

### Install

For local development install packages

```
npm install
```

### Setup Amazon Details



### Start local server

```
npm run server
```

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