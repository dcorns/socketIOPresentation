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
  

//documentation on http://www.sitepoint.com/create-multi-user-presentation-reveal-js/ where I pulled the info to get this up says below here io.listen(server);
//io.sockets.on(...)
//io.sockets has no on method so it does not work.
//modifying it below as suggested by Dan Zajdband corrects the problem.
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


