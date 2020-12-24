/*
    Copyright (C) 2020 IBM Corporation

    Rafael Sene <rpsene@br.ibm.com> - Initial implementation.
    
    Yet another OpenShift Hello-World
*/

var express = require("express");
var os = require("os");
var hostname = os.hostname();
var arch = os.arch();
var app = express();

app.get("/", function (req, res) {
  res.send(
    "Hey there! Your " +
      arch +
      " application is running at " +
      hostname +
      ". This is an OpenShit application :)\n"
  );
});

app.listen(8080, function () {
  console.log("Application is listening on port 8080.");
});
