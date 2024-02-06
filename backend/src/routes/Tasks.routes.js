import express from 'express';
import Note from '../models/Note.model.js';

const app = express.Router();


// ----- [POST]
app.post('/:noteId/tasks', async (req, res) => {
    console.log("I am hitting backend api");
    const noteId = req.params.noteId;
    console.log('Note Id:', noteId);

    try {
        const { tasks } = req.body;

        // Assuming Note is your Mongoose model
        // Assuming tasks is an array of objects like { task: '...', isChecked: ... }
        await Note.findByIdAndUpdate(noteId, { $set: { tasks } });

        res.status(200).json({ message: 'Tasks updated successfully' , data: await Note.findById(noteId)});
    } catch (error) {
        console.error('Error updating tasks:', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
});








export default app;

