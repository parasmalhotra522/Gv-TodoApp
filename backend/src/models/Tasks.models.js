import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    }
        
); 
const Tasks = mongoose.model("Tasks", taskSchema);
export default Tasks;


