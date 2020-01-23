// Import (require) `connection.js` into `orm.js` //

const connection = require("./connection.js");
// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. 
const orm = {
    selectAll: function (tableInput, cb) {
        connection.query(`SELECT * FROM ${tableInput};`, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    

    insertOne: function (tableInput, cb) {
        connection.query(`SELECT * FROM ${tableInput};`, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function (tableInput, cb) {
        connection.query(`SELECT * FROM ${tableInput};`, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}



// Export the ORM object in `module.exports`

module.exports = orm