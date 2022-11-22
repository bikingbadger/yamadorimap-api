// Environment Variables
import 'dotenv/config.js';
// HTTP Server
import express from 'express';
import cors from 'cors';
// import router from './routes/index.js';

const app = express();

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }
const PORT = process.env.NODE_DOCKER_PORT || 3000; //getRandomInt(3000,3999);

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
  }),
);

app.get('/', (req, res) => {
  res.send('Yamadori API');
});

// app.use('/api', [...Object.values(router)]);

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
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export { app };
