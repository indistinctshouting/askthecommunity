const express = require('express');
const bodyParser = require('body-parser');
const app = express();

console.log("Hello World");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/client/app.js'));


app.get('/', (req, res) => res.send('Hello World'));

app.listen(3000, () => console.log('listening on port 3000'));


