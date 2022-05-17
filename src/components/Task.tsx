import React from 'react'
import { TaskDTO, TaskStatus } from '../api/dto/task.dto';
import {Card,CardActions,CardContent,CardMedia, Button, Container, Typography, Chip  } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { TaskAPI } from '../api/task.api';


interface Props{
    data:TaskDTO;
    onTaskDelete: (taskId: number) => void;
    onTaskUpdated: (task: TaskDTO) =>void;
}

const Task = ({data, onTaskDelete, onTaskUpdated}: Props) =>{
    const deleteTask = async () =>{
      await TaskAPI.deleteOne(data.id);
      onTaskDelete(data.id);
    }

    const getTaskStatusToString = (status: TaskStatus) =>{
      let text: string = '';
      switch(status)
      {
        case TaskStatus.Created:
          text = "Created";
          break;
        case TaskStatus.InProgress:
          text = "InProgress";
          break;
        case TaskStatus.Done:
          text = "Done";
          break;
        default:
          text = "";
      }
      return text;
    };

    const getTaskStatusColor = (status: TaskStatus) => {
      let color: string = '';
      switch(status)
      {
        case TaskStatus.Created:
          color = "gray";
          break;
        case TaskStatus.InProgress:
          color = "orange";
          break;
        case TaskStatus.Done:
          color = "green";
          break;
        default:
          color = "";
      }
      return color;

    };

    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://d57439wlqx3vo.cloudfront.net/iblock/f5d/f5dcf76697107ea302a1981718e33c95/1f68f84b53199df9cae4b253225eae63.png"
            alt="Task"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {data.description}
            </Typography>
            <Chip label={getTaskStatusToString(data.status)} style = {{margin: 7,backgroundColor:getTaskStatusColor(data.status)}} />
          </CardContent>
          <CardActions>
              <Container>
                <Button size="small" variant="contained"  endIcon={<SendIcon />} 
                        style={{marginLeft: 5}} onClick={()=>onTaskUpdated(data)}>
                    Edit
                </Button>
                <Button size="small" variant="outlined" startIcon={<DeleteIcon />} 
                        style={{marginLeft: 5}} onClick={deleteTask}>
                    Delete
                </Button>
              </Container>
          </CardActions>
        </Card>
      );
}

export default Task