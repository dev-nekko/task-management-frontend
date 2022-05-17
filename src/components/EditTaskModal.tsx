import React, { useEffect, useState } from 'react'
import {Box,Button,Typography,Modal,TextField,Select, SelectChangeEvent ,MenuItem }  from '@mui/material';
import { TaskAPI } from '../api/task.api';
import { TaskDTO, TaskStatus } from '../api/dto/task.dto';

interface Props {
    open:boolean;
    handleClose:() =>void;
    onTaskUpdated: (task: TaskDTO) => void;
    data: TaskDTO | undefined;

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

  const styleSelect = {
    width: "100%",
    marginTop: 5
  };
const styleTextField = {
   width: "100%",
  };





const EditTaskModal = (props: Props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState<undefined | string>(undefined)
    const [status, setStatus] = useState(TaskStatus.Created);

    useEffect(() => {
        if(props.data){
            setTitle(props.data.title);
            setDescription(props.data.description);
            setStatus(props.data.status);
        }
    }, [props.data])
  
    const editTask = async () => {
        if(props.data){
            const resp = await TaskAPI.updateOne( props.data.id,{
                title,
                description,
                status
            });
            props.onTaskUpdated(resp);
            console.log("New Task",resp);
        }
    };

  return (
    <div><Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit My Task
          </Typography>
          <TextField sx={styleTextField}
            required
            id="outlined-required-title"
            label="Title"
            variant="filled"
            onChange={(e) =>setTitle(e.target.value)}
            value={title}
        />
         <TextField sx={styleTextField}
            required
            id="outlined-required-description"
            label="Description"
            variant="filled"
            onChange={(e) =>setDescription(e.target.value)}
            value={description}
        />
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
          sx={styleSelect}
        >
          <MenuItem value={TaskStatus.Created}>Created</MenuItem>
          <MenuItem value={TaskStatus.InProgress}>InProgress</MenuItem>
          <MenuItem value={TaskStatus.Done}>Done</MenuItem>
        </Select>

        <Button variant="contained" color="success" sx={styleBtn} onClick={editTask}>
            Edit My Task
        </Button>
        </Box>
      </Modal>
      </div>
  );
};

export default EditTaskModal