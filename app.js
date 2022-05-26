import { ddbClient } from './services/DBClient.js';
import { createTable } from './model/Coordinates.js';

createTable(ddbClient);
