import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodosProvider } from './context/TodosContext';

function App() {
  return (
    <TodosProvider>
      <div className="App">
        <Form />
        <TodoList />
    </div>
    </TodosProvider>
  );
}

export default App;
