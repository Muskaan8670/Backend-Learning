const express = require('express');

const app = express();

app.get('/',(req,res)=>{
   res.send("Hello");
})

app.get('/home',function(req,res){
   res.send("This is Home page");
})

app.get('/about',function(req,res){
   res.send("This is About page");
})

app.listen(3000);

/* npm is a package manager where npx is a package executer */
