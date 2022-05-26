// HTTP Server
import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = process.env.CONFIGURATION_PORT || 3000;

// DB Setup

import { dbClient } from './services/DBClient.js';
import { setupTables } from './models/index.js';

setupTables(dbClient);

// Router
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.get('/', (req, res) => {
  res.send('Yamadori API');
});

app.use('/api', [...Object.values(router)]);

// Start Server
async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log({ message: e.message });
  }
}

if (process.env.NODE_ENV === 'development') {
  start();
}

export { app };
