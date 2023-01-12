const express = require('express');
const path = require('path');

const app = express();

console.log(path.join(__dirname,'../public'));

app.use(express.static(path.join(__dirname,'../public')));

app.get('', (req, res) => {
    res.send('Hello world!');
});

app.get('/test', (req, res) => {
    res.send(`You reached /test`);
});

app.get('/customer', (req, res) => {
    res.send({
        "name": "Glenn",
        "age": "5"
    });
});

app.get('/about', (req, res) => {
    let sum = 5 + 4;
    res.send(`About Page and sum is ${sum}.`);
});

app.listen(3000, () => {
    console.log('SERVER UP AND RUNNING ON PORT 3000')
});