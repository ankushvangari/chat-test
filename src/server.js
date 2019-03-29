const io = require('socket.io')();

const connectedUsers = []

io.on('connection', (client) => {
  console.log('a user connected');
  client.on('player1Connect', () => {
      console.log('Player 1 connected');
      client.emit('player1', 'Player 1 has joined the lobby');
  });
  client.on('player2Connect', () => {
      console.log('Player 2 connected');
      client.emit('player2', 'Player 2 has joined the lobby');
  });
  client.on('player3Connect', () => {
      console.log('Player 3 connected');
      client.emit('player3', 'Player 3 has joined the lobby');
  });
  client.on('player4Connect', () => {
      console.log('Player 4 connected');
      client.emit('player4', 'Player 4 has joined the lobby');
  });
  client.on('newUser', (user)=>{
    connectedUsers.push(user);// = addUser(connectedUsers, user)
    //client.user = user
    console.log(user);
    client.emit('connSuccess', true, connectedUsers)
    console.log(connectedUsers);
  })
});

function addUser(userList, user){
	let newList = Object.assign({}, userList)
	newList[user] = user
	return newList
}

const port = 8000;
io.listen(port);
console.log('listening on port ', port);