// Environment Variables
import './utils/env.js';

// HTTP Server
import express from 'express';
import cors from 'cors';
import routerV1 from './routes/v1/index.js';

import { dbConnection } from './utils/db.js';


const app = express();

// CORS setup
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Router
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.send('Yamadori API');
});

app.use('/api/v1', routerV1);

export { app };
