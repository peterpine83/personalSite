var express = require("express");
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

var server = app.listen(80, function(){
    console.log("Server is listening on posrt 80");
});