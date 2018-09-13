const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'askthecommunity'
}); 

const app = express();

console.log("Hello World");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));



// app.get('/askthecommunity', (req, res) => {
//   res.db.connection.query('select * from questions', function(error, results, fields){
//     if (error) {
//       throw error;
//     }
//     res.send(JSON.stringify(results));
//   });
// });


app.get('/askthecommunity', (req, res) => {
  connection.connect();

  connection.query('SELECT * FROM questions', function (error, results, fields){
    if (error) {
      throw error;
    }
    res.send(JSON.stringify(results));
  });

  connection.end();
});

app.listen(3000, () => console.log('listening on port 3000'));


