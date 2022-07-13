import { dbDocClient } from '../services/DBClient.js';
import { createCoordinate, getUserCoordinates, deleteCoordinate } from '../models/Coordinates.js';

// Examples of using dynamodb
// https://github.com/awsdocs/aws-sdk-for-javascript-v3/blob/main/doc_source/dynamodb-example-dynamodb-utilities.md

class coordinatesController {
  async getCoordinates(req, res) {
    try {
      const data = await getUserCoordinates(dbDocClient, {
        userID: 'auth0|6280f87aa64d24006f51332d',
      });
      res.status(200).json({
        data,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: err.message,
      });
    }
  }

  async createCoordinate(req, res) {
    try {
      const data = await createCoordinate(dbDocClient, req.body);
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

  async createCoordinates(req, res) {
    try {
      const coordinates = req.body;

      for (const coordinate in coordinates) {
        const data = await createCoordinate(
          dbDocClient,
          coordinates[coordinate],
        );
      }
      res.status(200).json({
        //  data: { ...req.body }, ...data
      });
    } catch (err) {
      console.log(err);
      return res.status(err.$metadata.httpStatusCode).json({
        error: err.message,
        data: { ...req.body },
      });
    }
  }

  async deleteCoordinate(req, res) {
    try {
      const coordinate = req.body;
      console.log(coordinate);
      coordinate.userID = 'auth0|6280f87aa64d24006f51332d';
      const data = await deleteCoordinate(dbDocClient, coordinate);
      console.log(data);
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
