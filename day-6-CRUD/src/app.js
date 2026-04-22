/* - Create the server */
const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();

app.use(express.json());

/* 
 - POST /notes
 - req.body => {title,description}
*/

app.post("/notes",async(req,res)=>{
    const {title,description,user} = req.body;

    const note = await noteModel.create({
        title,description,user
    })

    res.status(201).json({
        message : "Note created" ,
        note
    })
})

/* 
 - GET /notes
 - fetch all the notes data
*/

app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message : "note fetched successfully",
        notes
    })
})

module.exports = app;