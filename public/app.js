var express = require('express')
  , http = require('http')
  , path = require('path')
  ,io=require("socket.io")
  , app = express();
 
app.configure(function(){
  app.use(express.static(path.join(__dirname, 'public')));
});
 
app.get('/', function(req, res){
  res.sendfile(__dirname + '/views/index.html');
});
 
var server = http.createServer(app).listen(3000, function(){
  console.log("Express server listening on port 3000");
  io.listen(server);
io.sockets.on('connection', function (socket) {
  socket.emit("message", "Welcome to Revealer");
});