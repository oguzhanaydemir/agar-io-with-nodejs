var express = require('express');

var app = express();

var server = app.listen(process.env.PORT || 3000,listen);

function listen() {
    var host = server.address().address;
    var port = server.adress().port;
    console.log('Server http://' + host + ":" + port + "adresinde çalışıyor");
}

app.use(express.static('public'));



var io = require('socket.io')(server);

io.sockets.on('connection',newConnection);

function newConnection() {
    console.log('new connection :' + socket.id);
    socket.on('')
}