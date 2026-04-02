/* 
  - create the server 
  - config the server
*/

const express = require("express");

const app = express(); // instance of a server created

app.use(express.json());

module.exports = app;  