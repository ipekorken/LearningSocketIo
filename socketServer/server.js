const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

//----------------------------user count----------------------------//
let count = 0;
//----------------------------user count----------------------------//

io.on('connection', socket => {
  console.log('user connected');

  //----------------------------user count----------------------------//
  count++;
  io.emit('onlineUsers', count);
  //----------------------------user count----------------------------//

  //----------------------------change background----------------------------//
  socket.on('changeBgColor', color => {
    socket.broadcast.emit('changeBgColor', color);
  });
  //----------------------------change background----------------------------//

  socket.on('disconnect', () => {
    //----------------------------user count----------------------------//
    count--;
    io.emit('remainingUsers', count);
    //----------------------------user count----------------------------//
    console.log('user disconnected');
  });
});
