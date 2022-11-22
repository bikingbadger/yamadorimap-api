// Environment Variables
import 'dotenv/config.js';
// HTTP Server
import express from 'express';
import cors from 'cors';
//import router from './routes/v1/index.js';

const app = express();

// CORS setup
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// DB Setup
// import { dbClient } from './services/DBClient.js';
// import { setupTables } from './models/index.js';

// setupTables(dbClient);

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

//app.use('/api', [...Object.values(router)]);
app.post('/api/v1/users', (req, res) => {
  return res.send({ message: 'User created' });
});

// Start Server
// async function start() {
//   try {
//     app.listen(PORT, () => {
//       console.log(`Server started on port ${PORT}`);
//     });
//   } catch (e) {
//     console.log({ message: e.message });
//   }
// }

// if (process.env.NODE_ENV === 'development') {
//   start();
// }

export { app };
