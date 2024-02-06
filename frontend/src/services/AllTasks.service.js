import axios from 'axios';
import BASE_URL from '../utils/utils';

// [GET] call to fetch all the tasks
export  const fetchAllTasks = async ({ queryKey }) => {
  try {
    const apiOutput = await axios.get(`${BASE_URL}/lists`); // Assuming queryKey[1] is the list ID
    // const apiOutput = await axios.get(``);

    if (!apiOutput.data) {
      throw new Error('No data received from the API');
    }

    return apiOutput.data;
  } catch (error) {
    console.error('Error fetching tasks:', error.message);
    throw error;
  }
};


// ['POST'] to create a new Note

export const createNote = async({queryKey, data}) => {
  try {
    const apiOutput = await axios.post(`${BASE_URL}/lists`, data);
    if (!apiOutput.data) {
      throw new Error('No data received from the API');
    }

    return apiOutput.data;
  } catch (error) {
    console.error('Error creating note:', error.message);
    throw error;
  }
}


// ['GET'] NOTE/:id

export const getNoteById = async(queryKey, noteId) => {
  try {
    console.log("Hitting api....", `${BASE_URL}/lists/${noteId}`);
    const apiOutput = await axios.get(`${BASE_URL}/lists/${noteId}`)
    if (!apiOutput.data) {
      throw new Error('No data received from the API');
    }
    return apiOutput.data;
  
  } catch (error) {
    console.error('Error fetching note:', error.message);
    throw error;
  }
}

export const updateNoteTasks = async({noteId, updatedTasks}) => {

  console.log("Check the updated tasks",noteId, updatedTasks);
  try { 
    const payload = {tasks:updatedTasks};
    const apiOutput = await axios.post(`${BASE_URL}/lists/${noteId}/tasks`,payload );
    if (!apiOutput.data) {
      throw new Error('No data received from the API');
    }

    return apiOutput.data;
  }
  catch (error) {
    console.error('Error updating tasks:', error.message);
    throw error;
  }

}




