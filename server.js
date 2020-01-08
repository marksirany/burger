
// DECLARE REQUIREMENTS //
const db = require("./models");
const express = require("express");

// SETUP EXPRESS //

const app = express();
const PORT = process.env.PORT || 8889;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CREATE ROUTES //

app.use(express.static('public'))
require("./routes/api-routes")(app);

// SYNCING MODELS AND START EXPRESS //


    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });

