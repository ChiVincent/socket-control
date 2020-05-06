let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

io.on('connection', socket => {
    socket.on('power', msg => {
        console.log(`Power: ${msg}`);
        io.emit('power', msg);
    });
    socket.on('stage', stage => {
        console.log(`Stage: ${stage}`);
        io.emit('stage', stage);
    });
});

http.listen(3000, () => console.log('listen on *:3000'));