var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


function getDatos(callback){

  // Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'parcial1';  //poner el nombre de la base de datos

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  findDocuments(db,(data) => {
    callback(data);
    client.close();
  } );
 
  
});
}


const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');  // nombre de la coleccion
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
   
    callback(docs);
  });
}

const insertDocuments = function (req, string, db, callback) {
  // Get the documents collection
  const collection = db.collection(string);
  // Insert some documents
  const objeto = req.query;

  collection.insertMany([objeto],
    function (err, result) {
      assert.equal(err, null);
      callback(result);
    });
}





/* GET home page. */
router.get('/getData', function(req, res, next) {
  getDatos((data) =>
    res.send(data) 
    );

});

module.exports = router;
