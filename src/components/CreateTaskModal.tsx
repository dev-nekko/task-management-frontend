import React, { useState } from 'react'
import {Box,Button,Typography,Modal,TextField}  from '@mui/material';
import { TaskAPI } from '../api/task.api';
import { TaskDTO } from '../api/dto/task.dto';

interface Props {
    open:boolean;
    handleClose:() =>void;
    onTaskCreated: (task: TaskDTO) => void;

}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const styleBtn = {
    width: "100%",
    marginTop: 5
  };
const styleTextField = {
   width: "100%",
  };





const CreateTaskModal = (props: Props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState<undefined | string>(undefined)
  
    const createTask = async () => {
    const resp = await TaskAPI.createOne({
        title,
        description,
    });

    props.onTaskCreated(resp);
    console.log("New Task",resp);

    }
  return (
    <div><Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create New Task
          </Typography>
          <TextField sx={styleTextField}
            required
            id="outlined-required-title"
            label="Title"
            variant="filled"
            onChange={(e) =>setTitle(e.target.value)}
        />
         <TextField sx={styleTextField}
            required
            id="outlined-required-description"
            label="Description"
            variant="filled"
            onChange={(e) =>setDescription(e.target.value)}
        />
        <Button variant="contained" color="success" sx={styleBtn} onClick={createTask}>
            Create New Task
        </Button>
        </Box>
      </Modal></div>
  )
}

export default CreateTaskModal;