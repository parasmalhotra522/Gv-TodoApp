/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useEffect, useState} from 'react';
import AddTaskModal from './CreateModal';

export default function TaskCard(props) {
  /// IT IS ONE INSTANCE OF THE TASK DATA
  // updateNote
  const { name, tasks } = props.note;

  
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <div className="md:flex" onClick={()=>{props.onClick(props.note);}}>
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src='https://www.murdoch.edu.au/sf-images/newsportallibrary/feature-images/note-taking-feature.jpg?sfvrsn=ff31cf5f_0'
            alt="Task Image"
          />
        </div>
              
   <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
          {console.log('CHECK',props.note.tasks)}
         {/* { ----- Tasks Array } */}
          {props.note.tasks.map((task, index) => (
            <div key={index} className="mt-2">
              <p className="text-gray-500">{task.task}</p>
              {/* <p className={`mt-2 ${task.isCompleted ? 'text-green-500' : 'text-red-500'}`}>
                      {task.isCompleted ? 'Completed' : 'Not Completed'}
                       */}
                 <div className="border p-3 m-2">
                <h3 className={task.isCompleted ? 'line-through text-gray-500' : 'text-black'}>
                    {task.task}
                </h3>
                {!task.isCompleted && <input type="checkbox" />}
              </div>
              
             
              {/* </p> */}
            </div>
          ))}
        </div>
      </div>

     

    </div>
  )
}




