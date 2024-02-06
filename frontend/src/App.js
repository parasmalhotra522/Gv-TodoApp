import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.component';
import Home from './components/Home.component';
// import Notes from './components/Notes.js';
import { QueryClient, QueryClientProvider } from 'react-query';
import ToDoList from './components/Notes.jsx';
import AddNote from './components/AddNote.component.jsx';
import Note from './components/Note.component.jsx';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <NavBar></NavBar>
   
   
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='home' element={<Home/>}/>



     <Route
          path="notes/*"
          element={
            <Routes>
              <Route index element={<ToDoList />} />
              <Route path=":id" element={<Note />} />
            </Routes>
          }
        />
  
    <Route path='createNote' element={<AddNote/>}/>
    </Routes>
      
    </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
