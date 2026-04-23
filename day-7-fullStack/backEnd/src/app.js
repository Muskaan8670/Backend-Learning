/*- create the server */

const express = require("express");
const noteModel = require("./models/note.model")
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* 
 - /POST /api/notes
 - create a new note & save the data in mongoDb
 - req.body => {title,description}
*/

app.post("/api/notes", async (req,res)=>{
     const {title,description} = req.body;

     const note = await noteModel.create({
        title,description
     })

     res.status(201).json({
        message : "note created successfully",
        note
     })
})

/*
 - /GET /api/notes
 - fetch all the notes from the database & send them in the response
*/

app.get("/api/notes", async (req,res)=>{
   const notes = await noteModel.find();

   res.status(200).json({
      message : "Notes fetched successfully",
      notes
   })
})

/* 
  - /DELETE /api/notes/:id
  - delete note with the id from req.params
*/

app.delete("/api/notes/:id", async (req,res)=>{
    const id = req.params.id;

    await noteModel.findByIdAndDelete(id);

    console.log(id);

    res.status(200).json({
       message : "Note deleted successfully"
    })
})

/* 
 - /UPDATE /api/notes
 - update description of the note
 - req.body => {description}
*/

app.patch("/api/notes/:id", async (req,res)=>{
   const id = req.params.id
   const {description} = req.body

   await noteModel.findByIdAndUpdate(id , {description})

   res.status(200).json({
      message : "note updated successfully"
   })
})

module.exports = app;