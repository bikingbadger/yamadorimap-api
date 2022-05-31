import { dbDocClient } from '../services/DBClient.js';
import { createCoordinate } from '../models/Coordinates.js';

class coordinatesController {
  async getCoordinates(req, res) {
    try {
      res.status(200).json({
        data: {
          latLng: '32.123,43.234',
        },
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }

  async createCoordinate(req, res) {
    try {
      const data = await createCoordinate(dbDocClient, req.body);
      console.log(data.$metadata);
      res
        .status(data.$metadata.httpStatusCode)
        .json({ data: { ...req.body }, ...data });
    } catch (err) {
      console.log(err);
      return res.status(err.$metadata.httpStatusCode).json({
        error: err.message,
        data: { ...req.body },
      });
    }
  }
}

export default new coordinatesController();
