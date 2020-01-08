// setup the code to connect Node to MySQL //

const mysql = require("mysql")
const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "burgers_db"
})

connection.connect(function(error){
    if (err) throw err;
    console.log(connection.threadId);

})
// export the connection //

module.exports=connection;
