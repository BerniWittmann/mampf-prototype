var connect = require('connect');
var favicon = require('serve-favicon');
var path = require('path');
var serveStatic = require('serve-static');
var port = process.env.PORT || 8080;

var app = connect();
app.use(favicon(path.join(__dirname, '../dist/static', 'favicon.ico')));
app.use(serveStatic(__dirname + '/../dist/'));
app.listen(port, function(){
  console.log('Server running on ' + port + ' ...');
});
