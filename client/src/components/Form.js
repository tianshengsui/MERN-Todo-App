import { useState, useContext } from 'react'
import axios from 'axios'
import { TodosContext } from '../context/TodosContext'


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
            setTodos(previousTodos => [...previousTodos, newTodo])
            setDescription('')
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return ( 
        <form onSubmit={handleOnSubmit}>
            <input type='text' required value={description} onChange={(e) => {
                setDescription(e.target.value)
            }} />
            <input type='submit' value='Add' />
        </form>
     );
}
 
export default Form;