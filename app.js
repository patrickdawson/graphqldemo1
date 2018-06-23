const express = require('express');
const graphQlHttp = require('express-graphql');
const schema = require('./schema');
const data = require('./data');

const app = express();

app.get('/users', (req, res) => {
    res.send(data.getUsers());
});

app.get('/users/:id', (req, res) => {
    res.send(data.getUser(req.params.id));
})

app.use(graphQlHttp({
    schema,
    graphiql: true,
}));

app.listen(5000);


