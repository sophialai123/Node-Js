// require express package
const express = require('express');

//Create post requests body-parser
const bodyParser=require('body-parser');

//Setup express
const app = express();

app.use(bodyParser.urlencoded({extended:true}));




//Create a root route get method with app.get();
//https://expressjs.com/en/4x/api.html#res.sendFile
app.get("/",function(req,res){
  res.sendFile(__dirname +"/index.html");  // filepath
  console.log(__dirname);
})



///bmicalculator Route
app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname +"/bmicalculator.html");
})


// post requests
app.post("/",function(req,res){


 //Create a calculator
  var num1 = Number(req.body.num1);  // get the name value of the input
  var num2 = Number(req.body.num2);
  result = num1 + num2;

  res.send("The result of the calculation is " + result)
});



//Create bmicalculator
//The Math.round() function returns the value of a number rounded to the nearest integer.
app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  bmi = Math.round(weight / (height*height))
  res.send("Your BMI is" + bmi);
})




//Spin up our server on port 3000 with app.listen
app.listen(3000,function(){
  console.log("Server start");
})
