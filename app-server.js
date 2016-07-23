var express = require('express');

var app = express();

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3001);

//create a socket server that is also listening on port 3001
var io = require('socket.io').listen(server);

//event handler for when a socket connects
io.sockets.on('connection', function(socket) {
    console.log("Connected: %s", socket.id);
});

console.log("Polling server is running at 'http://localhost:3001'");