const express = require('express');
const server = express();
const cors = require('cors');
const {response, request} = require("express");

server.listen(3000);
server.use(cors());
server.use(express.json())

const users = [{
    id: 0,
    name: 'Vinicius',
    age: 21,
    }, {
        id: 1,
        name: 'Josué',
        age: 43
    }, {
        id: 2,
        name: 'Ester',
        age: 27
    }
];

server.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('page.html', {root: __dirname});
});

server.get('/users', (req, res) => {
    res.status(200).json(users);
});

server.post('/users', (req, res) => {
    users.push(req.body);
    res.status(201).send(users);
});

server.delete('/users/:id',(req, res) => {
    const indexUserToBeDeleted = req.params.id;
    const userToBeDeleted = users[indexUserToBeDeleted];

    if (indexUserToBeDeleted >= 0) {
        users.splice(indexUserToBeDeleted, 1)
        res.status(200).send(userToBeDeleted);
    } else {
        res.status(404).send('User not found')
    }
});

server.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(x => x.id === +id);

    if(user)
        res.status(200).send(user);
    else 
        res.status(404).send('User not found');
})

server.use((req, res) => {
    res.status(404).sendFile('page_not_found.html', {root: __dirname});
});