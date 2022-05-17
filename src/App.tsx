import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskAPI } from './api/task.api';
import { TaskDTO } from './api/dto/task.dto';


function App() {

  const [tasks, setTasks] = useState<TaskDTO[]>([])

  useEffect(() => {
    async function fetchAll(){
      const resp = await TaskAPI.getAll();

      setTasks(resp);
    }

    fetchAll();
  }, [])


  return (
    <div className="App">
      <ul>
          {
        tasks.map(task => {
          return <li>{task.title}</li>
        })
      }
      </ul>
    
    </div>
  );
}

export default App;
