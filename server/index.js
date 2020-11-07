const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const router = require('./router');

//Creates a server instance of socket.io for real time communication
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('New connection has been made!');

    socket.on('join', ({ name, room }, callback) => {
        console.log(name,room);

        
    })

    socket.on('disconnect', () => {
        console.log('User has left :(');
    })
})

app.use(router);


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));