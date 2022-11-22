import { app } from './src/app.js';

const PORT = process.env.NODE_DOCKER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
