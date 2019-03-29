import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');



function connectP1(cb) {
  socket.on('player1', player1 => cb(null, player1));
  socket.emit('player1Connect');
}
function connectP2(cb) {
  socket.on('player2', player1 => cb(null, player1));
  socket.emit('player2Connect');
}
function connectP3(cb) {
  socket.on('player3', player1 => cb(null, player1));
  socket.emit('player3Connect');
}
function connectP4(cb) {
  socket.on('player4', player1 => cb(null, player1));
  socket.emit('player4Connect');
}
function setUser(user, cb) {
  socket.on('connSuccess', (lobby, connectedUsers) => cb(null, lobby, connectedUsers))
  socket.emit('newUser', user);
}


export { connectP1, connectP2, connectP3, connectP4, setUser };