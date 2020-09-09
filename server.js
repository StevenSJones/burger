//import our npm modules
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");
//creating and calling the express server instance
const app = express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;
