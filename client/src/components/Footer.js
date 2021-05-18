import {useContext} from 'react'
import { TodosContext } from '../context/TodosContext'

const Footer = () => {
    const [todos] = useContext(TodosContext)
    return ( 
        <div className="footer">
            {todos.length} to do
        </div>
     );
}
 
export default Footer;