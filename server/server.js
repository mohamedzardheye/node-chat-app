const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname,'../public');
const {generateMessage, generateLocationMessage} = require('./utils/message');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log('New user connected');

  socket.on('disconnect',() =>{
    console.log('User Disconnected');
  });

  socket.emit('newMessage',generateMessage('Admin', 'Welcome To the Chat room'));


  socket.broadcast.emit('newMessage',generateMessage('Admin', 'New User Joined'));

  socket.on('createMessage', (message, callback) => {

    console.log('createMessage', message);
    io.emit('newMessage',generateMessage(message.from, message.text));
    callback('this is from server');

});

socket.on('createLocationMessage', (coords) => {
  io.emit('newLocationMessage',generateLocationMessage('Admin', coords.latitude, coords.longitude));
});



});

app.get ('/', (req, res) =>{
    res.render('index.html');
});

const port= process.env.PORT || 3000;
server.listen(port, () =>{
  console.log('server is up to port '+port);
});
