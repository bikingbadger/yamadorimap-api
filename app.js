import { ddbClient } from './services/DBClient.js';
import { setupTables } from './model/index.js';

setupTables(ddbClient)
