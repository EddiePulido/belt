
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var server = app.listen(8000, function() {
  console.log("listening on port 8000");
})

app.use(bodyParser.json());

app.use(express.static( __dirname + "/public/dist/public" ));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});




