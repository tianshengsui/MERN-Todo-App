import { useState, useContext } from 'react'
import axios from 'axios'
import { TodosContext } from '../context/TodosContext'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tooltip from '@material-ui/core/Tooltip';

const Form = () => {
    const [description, setDescription] = useState('')
    const setTodos = useContext(TodosContext)[1]

    const handleOnSubmit = (e) =>{
        e.preventDefault();

        const newTodo = {
            description: description,
            completed: false
        };

        axios.post('http://localhost:8080/api/todos', newTodo)
          .then(function (response) {
            setTodos(previousTodos => [...previousTodos, response.data])
            setDescription('')
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return ( 
        <form onSubmit={handleOnSubmit} autoComplete="off">
            <TextField 
                    id="standard-basic" 
                    label="Add an item" 
                    size="small" 
                    required 
                    value={description} 
                    style = {{width: "80%"}}
                    InputProps={{
                        endAdornment: (
                          <InputAdornment>
                          <Tooltip title="Add" arrow>
                            <IconButton type='submit' size="medium" color="primary">
                                <AddIcon fontSize="large"/>
                            </IconButton> 
                          </Tooltip>
                            
                          </InputAdornment>
                        )
                      }}
                    onChange={(e) => {
                        setDescription(e.target.value)
            }} /> 
        </form>
     );
}
 
export default Form;