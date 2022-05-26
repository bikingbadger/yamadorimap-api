import {
  CreateTableCommand,
  ListTablesCommand,
} from '@aws-sdk/client-dynamodb';

const tableName = 'yama_coords';

// Table Setup
const params = {
  AttributeDefinitions: [
    {
      AttributeName: 'latLng',
      AttributeType: 'S',
    },
    {
      AttributeName: 'tree',
      AttributeType: 'S',
    },
  ],
  KeySchema: [
    {
      AttributeName: 'latLng',
      KeyType: 'HASH',
    },
    {
      AttributeName: 'tree',
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

export { setupTable };
