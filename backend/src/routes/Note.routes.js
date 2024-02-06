import express from 'express';
import Note from '../models/Note.model.js';

const app = express.Router();

// // GET /lists - list of all the Notes
app.get("/lists", async(req, res, next) => {
    try {

        const listOfNotes = await Note.find();
        res.status(200).json({
            message: "Notes retreived successfully",
            notes: listOfNotes
        });
    } catch(error) {
        res.status(500).json({
            message: "Notes retreival failed",
            error: error 
        })
    }
});

// POST /list
app.post("/lists",async(req, res, next) => {

    try {
        const {noteName, createdAt, createdBy, updatedBy, tasks} = req.body;

        const newNote = await Note.create({
            noteName,
            createdAt, 
            createdBy, 
            updatedBy, 
            tasks
        });
    
        const listOfNotes = await Note.find();
        res.status(201).send({
            message: "New ToDo List craeted Successfully",
            Notes : listOfNotes
        });

    } catch(error) {
        console.log("Error", error);
        res.status(500).json({error: "Internal server error"});
    }
   
});



// -- GET NOTE by ID:

app.get('/lists/:noteId', async(req, res) => {
    const noteId = req.params.noteId;
    console.log("Checking list Id", noteId);
    try {
       const note = await Note.findById(noteId);
       console.log(note);
       res.status(201).send({
        message: `Note with Id ${noteId} retreived successfully`,
        Notes : note
    });
    } catch (error) {
        console.log("Error getting .. id",error);
        res.status(500).json({error: "Internal server error"});
    }


});

export default app;






