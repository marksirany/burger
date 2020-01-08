//Inside the`burgers_controller.js` file, import the following: Express and `burger.js`

const express = require("express");
const burger = require("../models/burger")

//Create the`router` for the app, and export the`router` at the end of your file.

router.get("/", function(req,res){
res.redirect()
})

router.get("/burgers", function (req, res) {
    burger.selectAll(function(burgerData){
        res.render("")
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