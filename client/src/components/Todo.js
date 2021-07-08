import { useState } from 'react'
import axios from 'axios'
import DeleteButton from "./DeleteButton"
import CompletedButton from "./CompletedButton";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

const Todo = ({ todo, handleEdit}) => {
    const [completed, setCompleted] = useState(todo.completed)
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.description)

    const handleEditButton = () => {
        setOnEdit(true)
    }
    
    const handleSaveButton = () => {
        handleEdit(todo._id, editValue)
        setOnEdit(false)
    }
    const updateCompleted = () =>{
        axios.put(`/api/todos/${todo._id}`, 
        {
            completed: !completed
        })
          .then(function (response) {
            setCompleted(!completed)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    if (onEdit){
        return ( 
            <ListItem role={undefined} dense>
                <ListItemIcon>
                    <CompletedButton completed={completed}/>
                </ListItemIcon>
                <TextField 
                    id="standard-basic" 
                    required 
                    value={editValue} 
                    style = {{width: "100%"}}
                    onChange={(e) => {
                        setEditValue(e.target.value)
            }} /> 
                <ListItemSecondaryAction>
                    <Tooltip title="Save" arrow>
                        <IconButton edge="end" aria-label="edit" color="secondary" onClick={handleSaveButton}>
                            <CheckIcon />
                        </IconButton>
                    </Tooltip>
                    
                </ListItemSecondaryAction>
            </ListItem>
        );
    }else{
        return ( 
            <ListItem role={undefined} dense button onClick={updateCompleted}>
                <ListItemIcon>
                    <CompletedButton completed={completed}/>
                </ListItemIcon>
                <ListItemText primary={todo.description} className={completed ? "completed" : ""} />
                <ListItemSecondaryAction>
                    <Tooltip title="Edit" arrow>
                        <IconButton edge="end" aria-label="edit" color="secondary" disabled={completed} onClick={handleEditButton}>
                            <CreateIcon />
                        </IconButton>
                    </Tooltip>
                    <DeleteButton id={todo._id}/>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
    
}
 
export default Todo;