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

const insertDocuments = function (req, db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  const objeto = req.query;

  collection.insertMany([objeto],
    function (err, result) {
      assert.equal(err, null);
      callback(result);
    });
}

function postGrafica(req, callback) {
  // Connection URL
  const url = 'mongodb://localhost:27017';

  // Database Name
  const dbName = 'parcial1';

  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    insertDocuments(req, db, (data) => {
      callback(data);
      client.close();
    });

  });
}



//se usa para registrar una visualizacion
router.post('/postGrafica', function (req, res, next) {
  postGrafica(req, (data) => res.send(data));
});

/* GET iamgenes */
router.get('/getGraficas', function(req, res, next) {
  getDatos((data) =>
    res.send(data) 
    );

});

module.exports = router;
