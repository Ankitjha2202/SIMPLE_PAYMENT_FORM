const express = require("express");


const app = express();

app.get("/",function(req,res){
   res.sendFile(__dirname+"/summary.html");
});

// app.get("/details.html",function(req,res){
//     res.sendFile(__dirname+"/details.html");
//  });
 
//  app.get("/payments.html",function(req,res){
//     res.sendFile(__dirname+"/payments.html");
//  });

//  app.get("/success.html",function(req,res){
//    res.sendFile(__dirname+"/success.html");
// });

app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
