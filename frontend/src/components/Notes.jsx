import React from 'react'
import  {fetchAllTasks}  from '../services/AllTasks.service.js';
import { useQuery } from 'react-query';
import './styles.scss';
import Note from './NoteCard.component.jsx';
import Alert from '../utils/Alert';

export default function Notes() {

    // [GET] API call to fetch the existing tasks and notes;/
    let heading = null;
    const allNotes = useQuery( ["AllTasks"]  ,fetchAllTasks);
    // console.log('-- get Api',allNotes);
    if (allNotes.isError) {
        heading = 'Error : ';
        return (
            <div className="flex items-center justify-center h-screen">
               
                {/* <h1 className="error-class text-center m-4">Something went wrong</h1> */}
                <Alert
                    heading={heading}
                    showAlert={true}
                    colorCode='red'
                    message={allNotes.data.message} />
            </div>
       
        );
    }

    if(allNotes.isLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loader"></span>
           </div>     
        )
    } 
    else if (allNotes.isSuccess) {
        heading = 'Success : ';
        return (
       
            <div>
                 
                <div className="container p-3 m-3">
                <Alert
                        colorCode='green'
                        heading={heading}
                        showAlert={true}
                        message={allNotes.data.message} />
   
                  <Note allTasks={allNotes.data} />  
                             </div>
          
                          
                          
          </div>
      )
    }
  
}



