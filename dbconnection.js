// Import the mysql2 library
const mysql = require('mysql2');

// Create a connection to the database using your existing connection parameters
const connection = mysql.createConnection({
  host: 'localhost', // Make sure this is the correct host
  user: 'root',      // Your MySQL username
  password: '',      // Your MySQL password
  database: 'student_evaluation_systems' // Your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + connection.threadId);

  // Run the query after successful connection
  connection.query('SELECT * FROM stud_info', (err, results, fields) => {
    if (err) {
      console.error('Error with SELECT query:', err);
      return;
    }

    // Print the results of the query
    console.log(results); // Outputs the query results

    // Close the connection after the query completes
    connection.end((endErr) => {
      if (endErr) {
        console.error('Error closing the connection:', endErr);
      } else {
        console.log('Connection closed successfully.');
      }
    });
  });
});
