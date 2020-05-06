let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

io.onconnection(socket => console.log('user connected'));

http.listen(3000, () => console.log('listen on *:3000'));