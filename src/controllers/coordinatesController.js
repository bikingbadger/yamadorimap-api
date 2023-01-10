import { dbDocClient } from '../services/DBClient.js';
import {
  createCoordinate,
  getUserCoordinates,
  deleteCoordinate,
} from '../models/Coordinates.js';
import { logger } from '../utils/logger.js';

// Examples of using dynamodb
// https://github.com/awsdocs/aws-sdk-for-javascript-v3/blob/main/doc_source/dynamodb-example-dynamodb-utilities.md

class coordinatesController {
  async getCoordinates(req, res) {
    try {
      logger.info(`getCoordinates: ${req.auth.sub}`);
      const data = await getUserCoordinates(dbDocClient, {
        userID: req.auth.sub,
      });
      res.status(200).json({
        data,
      });
    } catch (err) {
      logger.error(err);
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
      logger.error(err);
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
      logger.error(err);
      return res.status(err.$metadata.httpStatusCode).json({
        error: err.message,
        data: { ...req.body },
      });
    }
  }

  async deleteCoordinate(req, res) {
    try {
      const coordinate = req.body;
      logger.trace({coordinate});
      coordinate.userID = req.auth.sub;
      const data = await deleteCoordinate(dbDocClient, coordinate);
      logger.trace({data});
      res
        .status(data.$metadata.httpStatusCode)
        .json({ data: { ...req.body }, ...data });
    } catch (err) {
      logger.error(err);
      return res.status(err.$metadata.httpStatusCode).json({
        error: err.message,
        data: { ...req.body },
      });
    }
  }
}

export default new coordinatesController();
