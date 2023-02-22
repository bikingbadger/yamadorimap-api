import { Router } from 'express';
import Coordinate from '../../models/Coordinates.js';

const coordRouter = Router();

// Create
coordRouter.post('/', async (req, res) => {
  console.log('POST: /api/v1/coordinates/');
  const createdCoordinates = { success: [], errors: [] };

  try {
    const coordinates = req.body;
    console.log(coordinates);

    for (const coord in coordinates) {
      console.log(coordinates[coord]);

      // Create coordinate object
      const coordinate = new Coordinate({
        w3w: coordinates[coord].w3w,
        tree: coordinates[coord].tree,
        notes: coordinates[coord].notes,
        public: coordinates[coord].public,
        image: coordinates[coord].image,
        userID: coordinates[coord].userID,
      });

      // TODO: Validate data

      // Save the user
      try {
        const savedCoordinate = await coordinate.save();
        createdCoordinates.success.push(savedCoordinate);
        //res.status(200).json({ error: false, message: 'Coordinates created', user: savedCoordinate });
      } catch (error) {
        createdCoordinates.errors.push({ coordinate: coordinate, error: error }); //res.status(400).send(error);
      }
    }
  } finally {
    res.status(200).json({ error: false, message: 'Coordinates created', coordinates: createdCoordinates });
  }
});

// Read coordinate
coordRouter.get('/', async (req, res) => {
  console.log('GET: /api/v1/coordinates/');
  res.status(200).json({ error: false, message: 'Coordinates Retrieved' });
});

// Update

// Delete

export default coordRouter;
