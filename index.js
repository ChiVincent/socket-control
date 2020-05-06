let app = require('express')();
let http = require('http').createServer(app);

app.get('/', (req, res) => res.send('<h1>Hello World</h1>'));

http.listen(3000, () => console.log('listen on *:3000'));