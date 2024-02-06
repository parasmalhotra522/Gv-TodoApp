import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getNoteById, updateNoteTasks } from '../services/AllTasks.service.js'; // Assuming you have an updateNoteTasks function
import { useParams } from 'react-router-dom';
import Alert from '../utils/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Note() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const { data, isLoading, isError, isSuccess } = useQuery(
    ['NoteById', id],
    async () => await getNoteById('NoteById', id),
    {
      initialData: () => {
        const cachedData = queryClient.getQueryData(['NoteById', id]);
        return cachedData;
      },
    }
  );
    useEffect(() => {
        setTasks(data ? data.Notes.tasks : []);
    }, [data]);

  const handleInputChange = (index, key, value) => {
    const updatedTasks = [...tasks];
    updatedTasks[index][key] = value;
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    setIsAddingTask(true);
  };

  const mutation = useMutation(updateNoteTasks);
  const handleRemoveTask = async (index) => {
    const taskId = tasks[index]._id; // Assuming each task has an 'id' field
      // Make API call to remove task
      console.log(taskId, "updateddd", tasks);
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
 
      console.log("Checking updated Tasks", updatedTasks);
      mutation.mutate({
        queryKey: ['Updating Tasks'],
        noteId: data.Notes._id,
        updatedTasks:updatedTasks
    })

    // const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

 
  const handleSave = async () => {
    const updatedTasks = [...tasks, { task: newTask, isChecked: false }];
    // Make API call to save tasks
      console.log("Checking updated Takss", updatedTasks);
      mutation.mutate({
          queryKey: ['New Tasks'],
          noteId: data.Notes._id,
          updatedTasks:updatedTasks
      });
     
    //   await updateNoteTasks(updateNoteTasks(data.Notes._id, updatedTasks));
    setTasks(updatedTasks);
    setIsAddingTask(false);
    setNewTask('');
  };

  const removeTaskFromServer = async (taskId) => {
    // Implement your API call to remove task by taskId
  };

//   const updateTasksOnServer = async (updatedTasks) => {
//     // Implement your API call to update tasks for the note
//     const note = data.notes[0];
//     const noteId = note.id;
//     await updateNoteTasks(noteId, updatedTasks);
//   };

  return (
    isLoading ? (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    ) : isError ? (
      <div className="flex items-center justify-center h-screen">
        <h1 className="error-class text-center m-4">Something went wrong</h1>
      </div>
    ) : (
      <div className="container p-3 m-3">
        <Alert
          colorCode='green'
          heading='Success : '
          showAlert={true}
          message={data.message}
        />
        <div className="flex items-center justify-center">
          <div className="w-3/4 md:w-1/2 lg:w-3/4 xl:w-1/2 bg-white p-8 rounded-md shadow-md">
            <h1 className="text-2xl font-bold mb-4">{data.Notes.noteName}</h1>
            <ul className="list-disc pl-6 mt-4">
              <li>
                Tasks:
                <ul className="list-disc pl-6 mt-2">
                  {tasks.map((task, index) => (
                    <li key={index}>
                      {task.task}
                      {isAddingTask && (
                        <button onClick={() => handleRemoveTask(index)}>
                          <FontAwesomeIcon className="text-red-500 px-3" icon={faTrash} />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            {isAddingTask && (
              <div className="flex items-center mt-4 px-4">
                <input
                  type="text"
                  className="border p-2 mr-2 ml-2"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={handleSave}
                 className="text-green-500 hover:text-green-700">
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            )}

            <button
              onClick={handleAddTask}
              className="bg-blue-500 text-white p-3 rounded-md transform hover:scale-105 transition duration-300 ease-in-out block mx-auto mt-4"
            >
              Edit Task
            </button>
          </div>
        </div>
      </div>
    )
  );
}

