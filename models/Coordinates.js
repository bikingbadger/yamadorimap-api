import {
  CreateTableCommand,
  ListTablesCommand,
} from '@aws-sdk/client-dynamodb';

import { PutCommand, QueryCommand } from '@aws-sdk/lib-dynamodb';

const tableName = 'yama_coords';

// Table Setup
const params = {
  AttributeDefinitions: [
    {
      AttributeName: 'userID',
      AttributeType: 'S',
    },
    {
      AttributeName: 'latLng',
      AttributeType: 'S',
    },
  ],
  KeySchema: [
    {
      AttributeName: 'userID',
      KeyType: 'HASH',
    },
    {
      AttributeName: 'latLng',
      KeyType: 'RANGE',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: tableName,
  StreamSpecification: {
    StreamEnabled: false,
  },
};

const setupTable = (client) => {
  const listTableCommand = new ListTablesCommand({
    ExclusiveStartTableName: 'yama',
  });
  client
    .send(listTableCommand)
    .then((tables) => {
      if (tables.TableNames.findIndex((table) => table === tableName) === -1) {
        client
          .send(new CreateTableCommand(params))
          .then((data) => {
            return data;
          })
          .catch((err) => {
            console.error(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const createCoordinate = async (client, coordinate) => {
  console.log(coordinate);
  const createCoordinateCommand = new PutCommand({
    TableName: tableName,
    Item: {
      latLng: coordinate.latLng,
      tree: coordinate.tree,
      notes: coordinate.notes,
      image: coordinate.image,
      public: coordinate.public,
      userID: coordinate.userID,
    },
  });

  const data = await client.send(createCoordinateCommand);
  return data;
};

const getUserCoordinates = async (client, user) => {
  console.log('getUserCoordinates', user.userId);
  const getCoordinateCommand = new QueryCommand({
    TableName: tableName,
    ExpressionAttributeValues: {
      ':s': user.userId,
    },
    KeyConditionExpression: 'userID = :s',
  });
  const data = await client.send(getCoordinateCommand);
  console.log('getUserCoordinates', data);
  return data.Items;
};

export { setupTable, createCoordinate, getUserCoordinates };
