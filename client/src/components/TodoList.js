import { useEffect, useContext } from 'react'
import axios from 'axios'
import Todo from './Todo';
import { TodosContext } from '../context/TodosContext'

const TodoList = () => {
    const [todos, setTodos] = useContext(TodosContext)

    useEffect(() => {
        const fetchTodos = () => {
            axios.get('http://localhost:8080/api/todos')
                .then(function (response) {
                    console.log(response.data)
                    setTodos(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };    
        fetchTodos();
      }, [setTodos]);

    return ( 
        <div>
            {todos.map((todo, i) => {
                return<Todo key={i} todo={todo}/>
            })}
        </div>
     );
}
 
export default TodoList
;