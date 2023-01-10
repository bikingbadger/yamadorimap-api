import mongoose from 'mongoose';
import { logger } from './logger.js';

// The URL should be in the .env file locally or an environment
// variable when hosted in the cloud

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_LOCAL_PORT}/${process.env.DB_NAME}?authMechanism=DEFAULT`;
logger.trace({uri}, 'URI Details for connection to mongoDB');

mongoose
  .connect(uri, { dbName: `${process.env.DB_NAME}` })
  .then(() => {
    logger.info('connected to db');
  })
  .catch((err) => {
    logger.error({err},'DB Connection Error' );
  });

const dbConnection = mongoose.connection;

const listCollections = () => {
  dbConnection.db.listCollections().toArray(() => {});
};

export { dbConnection, listCollections };
