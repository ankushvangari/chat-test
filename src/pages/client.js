import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');


function setUser(user, cb) {
  socket.on('connSuccess', (lobby, connectedUsers, length) => cb(null, lobby, connectedUsers, length))
  socket.emit('newUser', user);
}

function update(t) {


  socket.on('connSuccess', (lobby, c, l) =>  t.setState({ 
    connectedUsers: c,
    length: l
  }));
  socket.on('newUserInfo', (c) =>  t.setState({ 
    connectedUsers: c
  }));

}


export { setUser, update };