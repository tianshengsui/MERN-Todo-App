import { useState, createContext } from 'react'
import axios from 'axios'

export const TodosContext = createContext();

export const  TodosProvider= props => {
    const [todos, setTodos] = useState([])
    const fetchTodos = () => {
        axios.get('http://localhost:8080/api/todos')
            .then(function (response) {
                // console.log(response.data)
                setTodos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }; 

    return ( 
        <TodosContext.Provider value={[todos, setTodos, fetchTodos]}>
            {props.children}
        </TodosContext.Provider>
     );
}
 