var express = require('express');
var app = express();



// ROUTES

//homepage
app.get("/", function(req, res){
  res.render("home.ejs");
});

//you fell in love with
app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love.ejs", {thingVar: thing});
});

//POSTS
app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "Susy"},
    {title: "Post 2", author: "Susy"},
    {title: "Post 3", author: "Susy"}
  ];
  res.render("posts.ejs", {posts: posts})
});

//callback that will run once the server is listening
app.listen(3000, function(){
  console.log("magic wand waving");
});
