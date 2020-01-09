// * Inside `burger.js`, import `orm.js` into `burger.js`
const orm = require("../config/orm.js")
   // * Also inside`burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

   let burgers = {
      selectAll : function(cb){
         orm.selectAll("burgers", function(result){
               cb(result)
         })
      }
      insertOne: function (cb) {
         orm.insertOne("burgers", function (result) {
            cb(result)
         })
      }

      updateOne: function (tableInput, cb) {
         orm.updateOne("burgers", function (result) {
            cb(result)
         })
      }
   }
   // * Export at the end of the`burger.js` file.
module.exports = burgers;
