import axios from 'axios'
import { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

const DeleteButton = ({id}) => {
    const [todos, setTodos] = useContext(TodosContext)

    const deleteTodo = (e) =>{
        e.preventDefault();

        axios.delete(`http://localhost:8080/api/todos/${id}`)
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
        <input
                type="button"
                value="Delete"
                onClick={deleteTodo}
        />
     );
}
 
export default DeleteButton;