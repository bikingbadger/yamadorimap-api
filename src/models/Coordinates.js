import mongoose from 'mongoose';

const coordinateSchema = mongoose.Schema({
  w3w: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  tree: {
    type: String,
    required: false,
    min: 6,
    max: 255,
  },
  notes: {
    type: String,
    required: false,
    min: 6,
    max: 1024,
  },
  image: {
    type: String,
    required: false,
    min: 6,
    max: 1024,
  },
  public: {
    type: Boolean,
    required: false,
    default: false,
  },
  userID: {
    type: String,
    required: false,
    min: 6,
    max: 1024,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Coordinate', coordinateSchema);

// import {
//   CreateTableCommand,
//   ListTablesCommand,
// } from '@aws-sdk/client-dynamodb';

// import { PutCommand, QueryCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';

// const tableName = 'yamadori';

// // Table Setup
// const params = {
//   AttributeDefinitions: [
//     {
//       AttributeName: 'userID',
//       AttributeType: 'S',
//     },
//     {
//       AttributeName: 'latlng',
//       AttributeType: 'S',
//     },
//   ],
//   KeySchema: [
//     {
//       AttributeName: 'userID',
//       KeyType: 'HASH',
//     },
//     {
//       AttributeName: 'latlng',
//       KeyType: 'RANGE',
//     },
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 1,
//     WriteCapacityUnits: 1,
//   },
//   TableName: tableName,
//   StreamSpecification: {
//     StreamEnabled: false,
//   },
// };

// const setupTable = (client) => {
//   const listTableCommand = new ListTablesCommand({
//     ExclusiveStartTableName: 'yama',
//   });
//   client
//     .send(listTableCommand)
//     .then((tables) => {
//       if (tables.TableNames.findIndex((table) => table === tableName) === -1) {
//         client
//           .send(new CreateTableCommand(params))
//           .then((data) => {
//             return data;
//           })
//           .catch((err) => {
//             console.error(err);
//           });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const createCoordinate = async (client, coordinate) => {
//   const createCoordinateCommand = new PutCommand({
//     TableName: tableName,
//     Item: {
//       _id: coordinate._id,
//       latlng: coordinate.latlng,
//       tree: coordinate.tree,
//       notes: coordinate.notes,
//       image: coordinate.image,
//       public: coordinate.public,
//       userID: coordinate.userID,
//     },
//   });

//   const data = await client.send(createCoordinateCommand);
//   return data;
// };

// const getUserCoordinates = async (client, user) => {
//   const getCoordinateCommand = new QueryCommand({
//     TableName: tableName,
//     ExpressionAttributeValues: {
//       ':s': user.userID,
//     },
//     KeyConditionExpression: 'userID = :s',
//   });
//   const data = await client.send(getCoordinateCommand);
//   return data.Items;
// };

// const deleteCoordinate = async (client, coordinate) => {
//   const deleteCoordinateCommand = new DeleteCommand({
//     TableName: tableName,
//     Key: {
//       userID: coordinate.userID,
//       latlng: coordinate.latlng,
//     },
//   });

//   const data = await client.send(deleteCoordinateCommand);
//   return data;
// };

// export { setupTable, createCoordinate, getUserCoordinates, deleteCoordinate };
