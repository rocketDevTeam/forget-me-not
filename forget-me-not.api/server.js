const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }))


mongoClient.connect(db.url, {native_parser:true}, (err, client) => {
  if(err){
    console.log(err);
  } 
  const database = client.db(db.dbName);
  require('./app/routes')(app, database);
  app.listen(port, () => {
    console.log('works')
  })
})