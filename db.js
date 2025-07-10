// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'your_mysql_password',
  database: 'sms_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

module.exports = connection;
