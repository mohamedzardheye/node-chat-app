
  var socket = io();
  socket.on('connect',function () {
    console.log('connected to server');

    socket.emit('createEmail', {
      to:'jen@mohamed.com',
      text:'mohamed'
    });

    socket.emit('createMessage', {
      from:'mohamedzardheye@gmail.com',
      text:'yup How are guys'
    });
  });
  socket.on('disconnect', function()  {
    console.log('Disconnected to server');
  });

  socket.on('newEmail', function(email) {
    console.log('new Email', email);
  });

  socket.on('newMessage', function(message) {
    console.log('New email', message);
  });
