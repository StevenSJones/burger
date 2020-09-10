// #### Config Setup
// 2. Create a `connection.js` file inside `config` directory.

//* Inside the `connection.js` file, setup the code to connect Node to MySQL.

//* Export the connection.

//import our npm packages
const mysql = require("mysql");
//this describes the connection to-be of the sql server(dialing the number to make the connection)
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "pets_db",
});
//Using the sql server (pressing the green call button)
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//exports the mysql server connection
module.exports = connection;
