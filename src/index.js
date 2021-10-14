// var http = require("http");

// //createing a server object:
// http
//   .createServer(function(req, res) {
//     res.write("Hello World!"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //the server object listens on port 8080
var express = require("express");

var app = express();

app.use(express.static(__dirname));

app.listen(8080, () => {
  console.log("Server is serving at port 8080");
});
