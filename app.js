var express = require('express');
var app = express();

// ======================
// ROUTES (ORDER MATTERS)
// ======================

// "/speak/:animal" => animal says noise!"
app.get("/speak/:animal", function(req, res){
  var sounds = {
      pig: "Oink",
      cow: "Moo",
      dog: "Woof Woof",
      cat: "I hate you human",
      goldfish: "...."
  }
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send(animal + " says " + sound);
});


// ""/repeat/hello/3" => "hello hello hello"
app.get("/repeat/:word/:number", function(req, res){
  var word = req.params.word;
  var number = Number(req.params.number);
  var result = "";
  for(var i = 0; i < number; i++){
    result += word + " ";
  }
  res.send(result);
});

// /* => error message
app.get("*", function(req, res){
  res.send("Sorry, page not found... What are you doing with your life?");
});

//Tell Express to listen for requests (start server)
app.listen(3000, function(){
  console.log("magic wand waving");
});
