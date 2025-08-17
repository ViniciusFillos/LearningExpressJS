const express = require('express');

const server = express();

server.listen(3000);

server.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('page.html', {root: __dirname});
});
