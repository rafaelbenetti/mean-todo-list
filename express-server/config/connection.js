(function() {
  'use strict';

  const mongo = require('mongodb');
  const mongoClient = mongo.MongoClient;
  const mongoConfig = require('./mongo-config');
  const url = `${mongoConfig.address}:${mongoConfig.port}/${mongoConfig.database}`;

  let mongodb = function() {
    if (mongo.DB) return mongo.DB;

    mongoClient.connect(url, { useUnifiedTopology: true })
      .then(client => {        
        mongo.DB = client.db(mongoConfig.database);
      })
      .catch(error => {
        console.log(error);
      });
  };

  module.exports.connect = mongodb;
})();
