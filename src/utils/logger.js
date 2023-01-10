import pino from 'pino';

const level = process.env.LOGLEVEL || 'info';
console.log(level);
const logger = pino({
  name: 'yama-api',
  level: level,
});

logger.info({ module: 'utils/logger' }, 'Logging added');

export { logger };
