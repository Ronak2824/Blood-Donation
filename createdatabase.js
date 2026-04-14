const mysql = require('mysql');

// Create connection (no database selected here)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '' // Default XAMPP MySQL has no password
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    return console.error('Connection error: ' + err.stack);
  }
  console.log('Connected as ID ' + db.threadId);

  // Create database
  db.query('CREATE DATABASE blood_donation', (err, result) => {
    if (err) {
      if (err.code === 'ER_DB_CREATE_EXISTS') {
        console.log('Database already exists.');
      } else {
        console.error('Error creating database:', err);
      }
    } else {
      console.log('Database "blood_donation" created successfully!');
    }

    db.end(); // Close connection
  });
});