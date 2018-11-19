//Require dependencies 
var express = require('express');
var path = require('path');

//Setting up Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//refer to routes in routing folder
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });