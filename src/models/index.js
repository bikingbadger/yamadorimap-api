import { setupTable as setupCoordinatesTable } from './Coordinates.js';

const setupTables = (dbClient) => {
  setupCoordinatesTable(dbClient);
};

export { setupTables };
