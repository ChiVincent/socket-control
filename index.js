let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

io.on('connection', socket => {
    console.log('user connected')

    socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen(3000, () => console.log('listen on *:3000'));