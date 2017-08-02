var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

app.post("/addfriend", function(req, res){
  res.send("YOU HAVE REACHED THE POST ROUTE");
});

app.get("/friends", function(req, res){
  var friends = ["Ben", "Teresa", "Brittany", "Lindsay"];
  res.render("friends", {friends: friends});
});

app.listen(3000, function(){
  console.log("magic happeninggggggg");
});
