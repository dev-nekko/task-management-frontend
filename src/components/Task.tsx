import React from 'react'
import { TaskDTO } from '../api/dto/task.dto';


import {Card,CardActions,CardContent,CardMedia, Button, Container, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


interface Props{
    data:TaskDTO;
}

const Task = ({data}: Props) =>{
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
          </CardContent>
          <CardActions>
              <Container>
                <Button size="small" variant="contained"  endIcon={<SendIcon />} style={{marginLeft: 5}}>
                    Edit
                </Button>
                <Button size="small" variant="outlined" startIcon={<DeleteIcon />} style={{marginLeft: 5}}>
                    Delete
                </Button>
              </Container>
          </CardActions>
        </Card>
      );
}

export default Task