// Create the client
// const { mongoose, mongo } = require('mongoose');
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

// Set the region
const REGION = 'us-east-1';

// Create the DynamoDB Service Client Object
const ddbClient = new DynamoDBClient({region: REGION})

export {ddbClient}