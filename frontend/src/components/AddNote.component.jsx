import React, {useState} from 'react'
import CreateModal from './CreateModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import {createNote}  from '../services/AllTasks.service.js';
import { useMutation } from 'react-query';
import Alert from '../utils/Alert.jsx';

export default function AddNote() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    let heading = null;
    const [noteForm, setNoteForm] = useState({
        noteName: '',
        createdBy: '',
        updatedBy: '',
        tasks: [{ task: '', isChecked: false }],
      });
    
      const handleInputChange = (index, key, value) => {
        const updatedTasks = [...noteForm.tasks];
        updatedTasks[index][key] = value;
        setNoteForm({ ...noteForm, tasks: updatedTasks });
      };
    
      const handleAddTask = () => {
        setNoteForm({
          ...noteForm,
          tasks: [...noteForm.tasks, { task: '', isChecked: false }],
        });
      };
    
        const mutation = useMutation(createNote);
      const HandleSubmit = (e) => {
        e.preventDefault();
        // onSubmit(noteForm);
          console.log("fomr data", noteForm);
          setIsOpenModal(false);
          mutation.mutate({
              queryKey: ['New Note'],
              data: noteForm
          });
        //   const newNote = useQuery(["NewNote", createNote]);
        //   console.log("Data after adding new note", newNote);

          
      };

      const handleRemoveTask = (index) => {
        const updatedTasks = noteForm.tasks.filter((_, i) => i !== index);
        setNoteForm({ ...noteForm, tasks: updatedTasks });
      };
    
    

  return (
      <div>
        <button
              className="w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 border
                
              border-blue-500 rounded-md text-center text-lg font-bold flex items-center justify-center transition duration-300 ease-in-out bg-white hover:bg-blue-500 hover:text-white hover:border-blue-700"
      onClick={()=>setIsOpenModal(true)}
    >
      <span className="mr-2">+</span> Add Note
    </button>
    
          
          <CreateModal
              isOpen={isOpenModal}
              onRequestClose={() => setIsOpenModal(false)}
          >
              
    <form className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Note</h2>

      <div className="mb-4">
        <label htmlFor="noteName" className="block text-sm font-semibold text-gray-600">
          Note Name
        </label>
        <input
          type="text"
          id="noteName"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={noteForm.noteName}
          onChange={(e) => setNoteForm({ ...noteForm, noteName: e.target.value })}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="createdBy" className="block text-sm font-semibold text-gray-600">
          Created By
        </label>
        <input
          type="text"
          id="createdBy"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={noteForm.createdBy}
          onChange={(e) => setNoteForm({ ...noteForm, createdBy: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="updatedBy" className="block text-sm font-semibold text-gray-600">
          Updated By
        </label>
        <input
          type="text"
          id="updatedBy"
          className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={noteForm.updatedBy}
          onChange={(e) => setNoteForm({ ...noteForm, updatedBy: e.target.value })}
        />
      </div>

      <div className="mb-4">
            <label htmlFor="tasks" className="block text-sm font-semibold text-gray-600">
              Tasks
            </label>

            {noteForm.tasks.map((task, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  value={task.task}
                  onChange={(e) => handleInputChange(index, 'task', e.target.value)}
                  required
                />

                {index === noteForm.tasks.length - 1 && (
                  <button
                    type="button"
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                    onClick={handleAddTask}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                )}

                {index !== noteForm.tasks.length - 1 && (
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => handleRemoveTask(index)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                )}
              </div>
            ))}
          </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        onClick={HandleSubmit}
      >
        Add Note
      </button>
    </form>
             
              
          </CreateModal>
          

          {mutation.isError && (
        <Alert
          heading="Error: "
          showAlert={true}
          colorCode="red"
          message={mutation.error.message}
        />
      )}

      {mutation.isLoading && <span className="loader"></span>}
          
    </div>
  )
}
