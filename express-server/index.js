(function() {
  'use strict';

  var http = require('http');
  var host = require('./config/host-config');
  var app = require('./config/express'); 

  http.createServer(app).listen(host.port, () => { 
    console.log(`Node server on port: ${host.port}`); 
  });    
})();
