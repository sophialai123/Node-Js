//https://expressjs.com/en/guide/routing.html
// require express package
const express = require('express');

// app function
const app = express();

//get request ("homeRoute / callback function")
app.get("/",function(request,response){
  response.send("<h1>Hello this is homepage route!!</h1>"); // return on the screen
}) ;


//get request ("ContactRoute / callback function")
app.get("/contact",function(req,res){
  res.send("<h1>Hello this is Contact route!!</h1>"); // return on the screen
}) ;

//get request ("AboutRoute / callback function")
app.get('/about',function(req,res){
  res.send("<h1>This is About Route</h1>");
})


//get request ("ProjectsRoute / callback function")
app.get('/project',function(req,res){
  res.send("<h1>This is Project Route</h1>");
})


// listen http port request
app.listen(3000,function(){
  console.log("Server started port 3000");
});
