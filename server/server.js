const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname,'../public');
const {generateMessage} = require('./utils/message');

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

  socket.on('createMessage', (message) => {

    console.log('createMessage', message);
    io.emit('newMessage',generateMessage('Admin', 'new User Joined'));

    // socket.broadcast.emit('newMessage',{
    //   from: message.from,
    //     text: message.text,
    //     createAt: new Date().getTime()
    // });

});
});

app.get ('/', (req, res) =>{
    res.render('index.html');
});

const port= process.env.PORT || 3000;
server.listen(port, () =>{
  console.log('server is up to port '+port);
});
