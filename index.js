let app = require('express')();
let http = require('http').createServer(app);

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

http.listen(3000, () => console.log('listen on *:3000'));