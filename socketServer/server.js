const http = require('http').createServer();
const io = require('socket.io')(http);

http.listen(3000);

//----------------------------user count----------------------------//
let count = 0;
//----------------------------user count----------------------------//

//----------------------------for don't lose color when reload----------------------------//
let activeColor = '#f0f0f0'; //It's valid if first screen is ChangeBackground.
//----------------------------for don't lose color when reload----------------------------//

io.on('connection', socket => {
  console.log('user connected');

  //----------------------------user count----------------------------//
  count++;
  socket.emit('changeBgColor', activeColor); //for don't lose color when reload
  io.emit('onlineUsers', count);

  //----------------------------user count----------------------------//

  //----------------------------change background----------------------------//
  socket.on('changeBgColor', color => {
    activeColor = color; //for don't lose color when reload
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
