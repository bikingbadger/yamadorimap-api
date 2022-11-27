import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// eslint-disable-next-line
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);
const __env_file = path.join(__dirname, `../../.env.${process.env.NODE_ENV}`);
console.log(__env_file);
dotenv.config({ path: path.resolve(__env_file) });

export default dotenv;
