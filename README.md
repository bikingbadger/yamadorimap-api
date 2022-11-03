## Local Development

### Install

For local development install packages

```
npm install
```

### Setup Environment File

Make sure the following are in an `.env` file in your root directory of the project

- **DB_CONNECT**: mongodb+srv://*{username}*:*{password}*@*{url from mongo}*/?retryWrites=true&w=majority
- **CORS_ORIGIN**: for testing set to *


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