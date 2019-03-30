const io = require('socket.io')();

const connectedUsers = []

io.on('connection', (client) => {
  console.log('a user connected');
  io.emit('newUserInfo', connectedUsers);
  client.on('newUser', (user)=>{
    connectedUsers.push(user);// = addUser(connectedUsers, user)
    //client.user = user
    console.log(user);
    io.emit('connSuccess', true, connectedUsers);
    console.log(connectedUsers);
  })
});


const port = 8000;
io.listen(port);
console.log('listening on port ', port);