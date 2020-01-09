<<<<<<< HEAD
Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore

@marksirany
ptrckbrown94
   /
   burger
0
00
Code Issues 0 Pull requests 0 Actions Projects 0 Wiki Security Insights
burger / public / assets / js / burger.js / 
@ptrckbrown94 ptrckbrown94 everything is working how it should
e2e19f0 yesterday
41 lines(35 sloc)  1.14 KB

You're using code navigation to jump to definitions or references.
Learn more or give us feedback
console.log("javascript")

document.getElementById("addburger").addEventListener("click", function () {
   event.preventDefault()
   const burgerName = document.getElementById("burger-name").value
   console.log(burgerName)

   // call the route to create the burger on the db  FETCH   (AJAX)  post query, pass the name of the burger
   $.ajax({
      url: "/burger/create",
      method: "POST",
      data: { "burgerName": burgerName }
   })
      .then(function (data) {
         console.log(data)
         //reaload
         window.location.reload(true);
      })
})
const devoured = document.querySelectorAll(".devoured")
for (let i = 0; i < devoured.length; i++) {


   devoured[i].addEventListener("click", function () {
      event.preventDefault()
      const ID = $(this).attr("index")
      console.log(ID)
      // onclick for devour  get the ID
      $.ajax({
         url: "/burger/update/" + ID,
         method: "PUT"
      }).then(function (data) {
         console.log(data)
         //reload the page
         window.location.reload(true);
         console.log("hello")
      })
   })

}
=======
// * Inside `burger.js`, import `orm.js` into `burger.js`
const orm = require("../config/orm.js")
   // * Also inside`burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

   let burger = {
      selectAll : function(cb){
         orm.selectAll("burgers", function(result){
               cb(result)
         })
      }
   }
   // * Export at the end of the`burger.js` file.

   
>>>>>>> parent of 03bb686... added orm funtctions and export functions
