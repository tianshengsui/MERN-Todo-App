import axios from 'axios'
import { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const DeleteButton = ({id}) => {
    const [todos, setTodos] = useContext(TodosContext)

    const deleteTodo = (e) =>{
        e.preventDefault();

        axios.delete(`/api/todos/${id}`)
        .then(function (response) {
            const newList = todos.filter(function(value, index, arr){ 
                return value._id !== id
            });
            setTodos(newList)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return ( 
        <Tooltip title="Delete" arrow>
            <IconButton edge="end" aria-label="delete" color="secondary" onClick={deleteTodo}>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
     );
}
 
export default DeleteButton;