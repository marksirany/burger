// setup the code to connect Node to MySQL //

const mysql = require("mysql")
let connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root", 
    password: "root",
    database: "burgers_db",
    port: '8889'
  });
};

connection.connect();
// export the connection //

module.exports = connection;
