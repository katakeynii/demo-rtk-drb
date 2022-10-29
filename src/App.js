import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ListItem, Box } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./actions/todo.action";
import { getUsers, getUser } from "./actions/user.action";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
function App() {
  const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([])
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todosReducer.todos);
  const { user, users } = useSelector((state) => state.usersReducer);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    setTodo("");
    // setTodos([...todos, todo]);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTodo(event);
    }
  };
  const getSelectedUser = (userId) => {
    dispatch(getUser(userId));
    dispatch(getTodos(userId));
  };

  return (
    <div className="App">
      <div>
        <div className="mb-5">
          <Box
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>

              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={user?.name ?? ""}
                label="Users"
                fullWidth
                onChange={(e) => getSelectedUser(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {users.map((user) => (
                  <MenuItem value={user.id}>{user.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          {user && (
            <div className="user-container">
              <h1> {user.name} </h1>
              <div className="user-contact">
                <div>{user.email}</div>
                <div>{user.phone}</div>
                <div>{user.website}</div>
              </div>
              <div className="user-address">
                <h2>Address</h2>
                <div className="address-container">
                  <div>
                    <h3>Street</h3>
                    <div>{user.address.street}</div>
                  </div>
                  <div>
                    <h3>Suite</h3>
                    <div>{user.address.suite}</div>
                  </div>
                  <div>
                    <h3>City</h3>
                    <div>{user.address.city}</div>
                  </div>
                  <div>
                    <h3>Zipcode</h3>
                    <div>{user.address.zipcode}</div>
                  </div>
                </div>
              </div>

              <div className="user-todos" >
                <h2> Todos</h2>
                <div>
                  {todos.map((todo, i) => (
                    <ListItem
                      key={`todo-${i}`}
                      secondaryAction={
                        <Button aria-label="comment">
                          <DeleteOutline />
                        </Button>
                      }
                    >
                      {" "}
                      {todo.title}
                    </ListItem>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
