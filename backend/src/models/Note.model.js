import mongoose from "mongoose";

// craetedBy :  is the user who created the tasks.. mostly who is logged 
// in as user

const NoteSchema = mongoose.Schema({
    noteName: { type: String, required: true },
    createdAt: { type: Date, default: new Date },
    createdBy: { type: String },
    updatedBy: { type: String },
    tasks: [
        {
            task: { type: String, required: true },
            isChecked: { type: Boolean, default: false, required: true },
        }
    ]
});

// Use mongoose.model to create the model
const NoteModel = mongoose.model("NoteModel", NoteSchema);

export default NoteModel;
