// console.log(process.env.APP_ENV)
// console.log(process.env.DB_HOST)
// console.log(process.env.DB_PASSWORD)
const mysql = require('mysql2');
const express = require("express");
var cors = require('cors');
const routes = require('./routes')
const db = require("./models");

const connection = mysql.createConnection({
  host: 'mysql-3056fcf1-prateekyadav1656-6378.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_m2YBZb10iyE0k6Ntz1I',
  database: 'defaultdb'
});

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'rG5$#tF7@kL2&zP9*!',
//   database: 'momentum'
// });
// Connect to the database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL:', error);
  } else {
    console.log('Connected to MySQL database');
  }
});

const associations = require('./models/associations')
associations(db)

const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors());
// app.use(fileUpload());


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())

db.sequelize.sync();

app.get('/', (req, res) => {
	res.send('sample')
  })
app.use('/api/v1', routes)

app.listen(PORT, () => {
    console.log("Running on port 5000.");
});


// Export the Express API
module.exports = app;