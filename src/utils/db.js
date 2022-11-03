import mongoose from 'mongoose';

const uri = process.env.DB_CONNECT;

const dbConnection = mongoose
  .connect(uri, { dbName: 'Yamadori' })
  .then(() => {
    console.log('connected to DB');
  })
  .catch((err) => {
    console.log('DB Connection Error:' + err);
  });

export { dbConnection };
