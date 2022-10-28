import { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ListItem, Box } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { useDispatch } from "react-redux"
import { getTodos } from "./actions/todo.action"
function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([])
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTodos(todos))
  }, []);
  const addTodo = (e) => {
    e.preventDefault();
    setTodo("");
    setTodos([...todos, todo]);
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTodo(event);
    }
  }
  return (
    <div className="App">
      <div>

        <div className="mb-5" >
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
          <TextField
            id="standard-name"
            label="Todo Name"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            size="large"
            fullWidth
            onKeyDown={handleKeyDown} 
            InputProps={{ endAdornment: <Button onClick={addTodo} 
              variant="contained">Add</Button> }}
          />
          </Box>
        </div>

        <div>

          {todos.map((todo, i) => (
              <ListItem key={`todo-${i}`}
                secondaryAction={
                  <Button aria-label="comment">
                    <DeleteOutline />
                  </Button>
                }
              > {todo}
              </ListItem>
          ))}
        </div>
      </div>
    </div>

  );
}

export default App;
