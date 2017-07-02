const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname,'../public');


var app = express();
var server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection',(socket) => {
  console.log(' New user connected');

  socket.on('disconnect',() =>{
    console.log('User Disconnected');
  });

  socket.emit('newEmail',{
    from:'mike@example.com',
    text:'Hey Whats is goin on',
    createdAt:123
  });

  socket.emit('newMessage', {
    from:'mohamed@gmail.com',
    text:'hello world',
    createdAt:'123'
  })

  socket.on('createEmail', (newEmail) => {
    console.log('createEmail', newEmail);
  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  });
});

app.get ('/', (req, res) =>{
    res.render('index.html');
});

const port= process.env.PORT || 3000;
server.listen(port, () =>{
  console.log('server is up to port '+port);
});
