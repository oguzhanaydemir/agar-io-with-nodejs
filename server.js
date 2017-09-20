var express = require('express');

var app = express();

var server = app.listen(3000);

app.use(express.static('public'));

console.log("Server 3000 numaralı portta çalışıyor");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection',newConnection);

function newConnection() {
    console.log('new connection :' + socket.id);
    socket.on('')
}