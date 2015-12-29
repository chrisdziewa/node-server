var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./app/middleware/middleware');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
  res.send('About Us!')
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('/public/index.html');
});

app.listen(PORT, function() {
  console.log('Server listening on PORT ' + PORT + '...');
});