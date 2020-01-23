//Inside the`burgers_controller.js` file, import the following: Express and `burger.js`

const express = require("express");
const burger = require("../models/burger.js")
var router = express.Router(); 

//Create the`router` for the app, and export the`router` at the end of your file.

router.get("/", function(req,res){
    res.redirect("/burgers"); 
})

router.get("/burgers", function (req, res) {
    burger.selectAll(function(burgerData){
        res.render("index", { burger: burgerData})
    })
})

router.post("/burgers/create", function (req, res) {
    burger.insertOne(function (burgerData) {
        res.render("")
    })
})

router.put("/burgers/:id", function (req, res) {
    burger.updateOne(function (burgerData) {
        res.render("")
    })
})


module.exports = router;