const express = require('express');

const server = express();

server.listen(3000);

server.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('page.html', {root: __dirname});
});

server.get('/teste', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('teste.html', {root: __dirname});
});

server.use((req, res) => {
    res.status(404).sendFile('page_not_found.html', {root: __dirname});
});