import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { logger } from './logger.js';

// eslint-disable-next-line
const __filename = fileURLToPath(import.meta.url);
logger.info(__filename);
const __dirname = path.dirname(__filename);
logger.info(__dirname);
const __env_file = path.join(__dirname, `../../.env.${process.env.NODE_ENV}`);
logger.info(__env_file);
dotenv.config({ path: path.resolve(__env_file) });

export default dotenv;
