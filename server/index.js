const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../database/data');

console.log("Hello World");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('build'));


app.get('/askthecommunity', (req, res, next) => {
  res.db.connection.query('select * from questions', function(error, results, fields){
    if (error) {
      throw error;
    }
    res.send(JSON.stringify(results));
  });
});

app.listen(3000, () => console.log('listening on port 3000'));


