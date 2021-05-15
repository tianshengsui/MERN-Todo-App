import DeleteButton from "./DeleteButton"

const Todo = ({ todo }) => {
    return ( 
        <div>
            <p>{todo.description} <DeleteButton id={todo._id}/></p>
        </div>
    );
}
 
export default Todo;