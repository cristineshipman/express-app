var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");


// ROUTES

//Root Route
app.get("/", function(req, res){
  res.render("home");
});

//you fell in love with
app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});

//POSTS
app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "Cristine"},
    {title: "Post 2", author: "Ben"},
    {title: "Post 3", author: "Susy"}
  ];
  res.render("posts", {posts: posts})
});

//callback that will run once the server is listening
app.listen(3000, function(){
  console.log("magic wand waving");
});
