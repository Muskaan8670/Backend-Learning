// const express = require('express');

// const app = express();

// app.get('/',(req,res)=>{
//     res.send("Hello !!");
// })

// app.get('/home',function(req,res){
//     res.send("This is Home page");
// })

// app.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });

/* An API or Application Programming Interface is a set of rules & protocols that enables software programs to communicate & exchange data with each other */


const express = require("express");

const app = express();

app.use(express.json()); 
// express can't read json data by default . to read the json data we need to use this middleware (express.json()) . it acts like a translator .

let notes = []

app.post("/notes",(req,res)=>{

    console.log(req.body);

    notes.push(req.body);

    res.send("Note created");
})

app.get("/notes",(req,res)=>{
    res.send(notes);
})

app.listen(3000, ()=>{
    console.log("Server is running on port number 3000");
})