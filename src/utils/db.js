import mongoose from 'mongoose';

// The URL should be in the .env file locally or an environment
// variable when hosted in the cloud

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_LOCAL_PORT}/${process.env.DB_NAME}?authMechanism=DEFAULT`;
console.log(`URI: ${uri}`);

mongoose
  .connect(uri, { dbName: `${process.env.DB_NAME}` })
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log('DB Connection Error: ', err);
  });

const dbConnection = mongoose.connection;

const listCollections = () => {
  dbConnection.db.listCollections().toArray(() => {});
};

export { dbConnection, listCollections };
