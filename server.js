var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('private route hit!');
    next();
  },
  logger: function(req, res, next) {
    console.log('Request: '  + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('This is the about page!')
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('/public/index.html');
});

app.listen(PORT, function() {
  console.log('Server listening on PORT ' + PORT + '...');
});