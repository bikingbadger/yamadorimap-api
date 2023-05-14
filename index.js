import { app } from './src/app.js';
import { logger } from './src/utils/logger.js';

const PORT = process.env.NODE_DOCKER_PORT || 3000;

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});
