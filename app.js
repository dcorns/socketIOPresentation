var express = require('express')
  , http = require('http')
  , path = require('path')
  , app = express();
var io = require('socket.io');

app.configure(function(){
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res){
  res.sendfile(__dirname + '/app/views/index.html');
});

app.get('/master', function(req, res){
  res.sendfile(__dirname + '/app/views/master.html');
});


var server = http.createServer(app);

var sio=io.listen(server);
sio.on('connection', function (socket) {
  console.log(socket);
  socket.emit("message", "Welcome to Revealer");
  socket.on("slidechanged", function(data){
    console.log(data);
  socket.broadcast.emit("slidechanged", data);
});

socket.on("nectClicked",function(data){
  console.log(data);
});


});
server.listen(3000);
console.log('Presentation server Started on Port 3000');


