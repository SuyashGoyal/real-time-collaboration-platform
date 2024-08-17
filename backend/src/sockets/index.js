// src/sockets/index.js
/*hanfle rea-time updates and broadcast changes*/
module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('A user connected');
  
      socket.on('document-update', (data) => {
        io.emit('document-update', data); // Broadcast the update to all clients
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected');
      });
    });
  };
  