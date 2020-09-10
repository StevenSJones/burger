//    * Import (require) `connection.js` (the sql connection) into `orm.js`
const connection = require("connection");

//    * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

//      * `selectAll()`
//      * `insertOne()`
//      * `updateOne()`

//    * Export the ORM object in `module.exports`.

// Import MySQL connection. In this case iporting from the connection.js file
//?? indicates a table OR columns and ? indicates a single point of data
const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM ?? " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

//    * Export the ORM object in `module.exports`.
module.exports = connection;
