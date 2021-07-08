import { useEffect, useContext } from 'react'
import axios from 'axios'
import Todo from './Todo';
import { TodosContext } from '../context/TodosContext'
import List from '@material-ui/core/List';

const TodoList = () => {
    const [todos, setTodos, fetchTodos] = useContext(TodosContext)
    

    useEffect(() => {
        fetchTodos();
      }, [fetchTodos, setTodos]);

      const handleEdit = (id, editValue) => {
        axios.put(`/api/todos/${id}`, 
        {
            description: editValue
        })
          .then(function (response) {
            
            console.log(response);
            fetchTodos();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return ( 
        <List style={{padding:'10px'}}>
            {todos.map((todo) => {
                return<Todo key={todo._id} todo={todo} handleEdit={handleEdit} />
            })}
        </List>
     );
}
 
export default TodoList
;