const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

//create server using http
var server = http.createServer(app);
//configure server to use socketio
var io = socketIO(server);

app.use(express.static(publicPath));

server.listen(port, () => {
	console.log(`Server is up on ${port}`);
});
io.on('connection', socket => {
	console.log('New connection');

	socket.on('disconnect', () => {
		console.log('User was disconnected');
	});
});
