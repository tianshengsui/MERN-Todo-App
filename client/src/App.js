import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { TodosProvider } from './context/TodosContext';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <TodosProvider>
      <NavBar />
      <Box width='50%' mt="5%" mx="auto" textAlign="center">
          <Typography variant="h3" gutterBottom>
              To-do App
          </Typography>

          <Paper elevation={8}>
            <Form />
            <TodoList />
          <Footer />

          </Paper>
      </Box>
    </TodosProvider>
  );
}

export default App;
