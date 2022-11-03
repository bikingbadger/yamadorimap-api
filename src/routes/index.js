


app.get('/', (req, res) => {
  res.send('Yamadori API');
});


import Coordinates from './coordinates.routes.js';

export default {
  Coordinates,
};
