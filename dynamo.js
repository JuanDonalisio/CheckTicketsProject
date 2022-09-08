const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000',
    accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
    secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
});

async function createTransaction(data) {
   await docClient.put({
    TableName: 'InformationTable',
    Item: {
        information: data
    }
   }).promise();
}

module.exports.createTransaction = createTransaction;