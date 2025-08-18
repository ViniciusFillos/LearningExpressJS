const express = require('express');
const server = express();
const cors = require('cors');

server.listen(3000);
server.use(cors());

const users = [{
    id: 0,
    name: 'Vinicius',
    age: 21
}];

server.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('page.html', {root: __dirname});
});

server.get('/users', (req, res) => {
    res.status(200).json(users);
})

server.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(x => x.id == id);

    if(user)
        res.status(200).send(user);
    else 
        res.status(404).send('User not found');
})

server.use((req, res) => {
    res.status(404).sendFile('page_not_found.html', {root: __dirname});
});