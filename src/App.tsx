import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { TaskAPI } from './api/task.api';
import { TaskDTO } from './api/dto/task.dto';
import { Grid } from '@mui/material';

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
      <Grid container spacing={1}>
        {tasks.map(task => {
          return(
            <Grid item xs={3}>
              Title: {task.title}
            <br/>
              Description: {task.description}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
