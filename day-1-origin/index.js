// console.log("Hello");

/* packages are the code which are not written by us but anther developer & make itpublic so that we can use it in our projects or applications */ 

// const catMe = require("cat-me");

// console.log(catMe());

/* server is a machine which it's own operating system , processor , RAM or memory storage & it is programmed to give user a response when a request is performed. */

// "npm init -y " means we are starting a node.js application

// express is a package which allows us to create a server

const express = require('express');

const app = express();  // server is created

app.listen(3000);  // start the server