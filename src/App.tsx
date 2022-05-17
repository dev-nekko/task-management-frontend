import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { TaskAPI } from './api/task.api';
import { TaskDTO } from './api/dto/task.dto';
import { Grid, AppBar, Toolbar,Typography,Button,IconButton  } from '@mui/material';
import Task from './components/Task';
import MenuIcon from '@mui/icons-material/Menu';

import CreateTaskModal from './components/CreateTaskModal';

function App() {

  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [createTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  const addTask = (task:TaskDTO) => {
    setTasks([...tasks,task])

  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((x)=>x.id !== taskId));

  };

  useEffect(() => {
    async function fetchAll(){
      const resp = await TaskAPI.getAll();

      setTasks(resp);
    }

    fetchAll();
  }, [])


  return (
    <div className="App">
      <CreateTaskModal 
        open={createTaskModalOpen} 
        handleClose={()=>setCreateTaskModalOpen(false)}
        onTaskCreated = {addTask}
      />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Task Management
          </Typography>
          <Button variant= "contained" color="success" onClick={()=>setCreateTaskModalOpen(true)}>
            Create Task
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={1} style={{padding: 10}}>
        {tasks.map(task => {
          return(
            <Grid item xs={3}>
              <Task data={task} onTaskDelete={deleteTask}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
