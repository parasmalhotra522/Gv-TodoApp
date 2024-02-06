import React, { useState } from 'react'
import TaskCard from './TaskCard';
import AddNote from './AddNote.component';
import { useNavigate } from 'react-router-dom';


export default function NoteCard({allTasks}) {
    // console.log("Inside the task list..", allTasks);
  const [note, setNote] = useState();
  const { notes, message } = allTasks;

  const navigate = useNavigate();


  const handleOnClickNote = async (note) => {
  // HANDLE THE API CALL HERE TO GET THE PARTICULAR NOTE
  navigate(`/notes/${note._id}`);
  }


  return (
        <div className="container">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
       
      >
        {notes.map((note, index) => (
          <TaskCard
                onClick={handleOnClickNote}
                key={index}
                message={message}
                note={note}
            updateNote={setNote}
           
          />
        ))}
      

      </div>
      
      <AddNote/>
        </div>
    
  )
}



