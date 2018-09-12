var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'askthecommunity'
}); 

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id' + connection.threadId);
});

var randomNumber = faker.random.number();
var text = faker.random.words();
var user = faker.random.word();

console.log(randomNumber);
console.log(text);
console.log(user);

//put for loop
for (var i = 0; i < 100; i++) {
  connection.query(`INSERT INTO QUESTIONS (text, user, restaurant_id)
    values
    ("${text}", "${user}", ${randomNumber})`, function(err, results, fields) {
      if (err) {
        throw err;
        console.log(result);
      }
  })
};

for (var i = 0; i < 200; i++) {
  connection.query(`INSERT INTO ANSWERS (text, user)
    values 
    ("${text}", "${user}")
    `, function(err, results, fields) {
      if (err) {
        throw err;
        console.log(result);
      }
  })
};


console.log(faker.name.findName());

//csv file
//create data and send to database
  //insert that data into the table
  //script that contains node
