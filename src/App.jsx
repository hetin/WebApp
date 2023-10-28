// src/TodoApp.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";

const TodoApp = () => {
  const [inpValue, setInpValue] = useState('');
  const [todoData, setTodoData] = useState([]);

  const addTodoHandler = () => {
    if (inpValue.trim() !== '') {
      setTodoData(prev => [...prev, inpValue]);
      setInpValue('');
    }
  }

  const deleteTodoHandler = (index) => {
    const updatedTodoData = todoData.filter((_, i) => i !== index);
    setTodoData(updatedTodoData);
  }

  const editTodoHandler = (index) => {
    const newText = prompt("Edit Todo:", todoData[index]);
    if (newText !== null) {
      const updatedTodoData = [...todoData];
      updatedTodoData[index] = newText;
      setTodoData(updatedTodoData);
    }
  }

  const deleteAllTodosHandler = () => {
    setTodoData([]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TextField
        label="Enter Todo"
        variant="outlined"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addTodoHandler}>
        Add
      </Button>

      {todoData.length ? (
        <div>
          <List>
            {todoData.map((todo, index) => (
              <ListItem key={index}>
                <ListItemText primary={todo} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => editTodoHandler(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteTodoHandler(index)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Button
            variant="outlined"
            color="secondary"
            onClick={deleteAllTodosHandler}
            startIcon={<ClearIcon />}
          >
            Delete All
          </Button>
        </div>
      ) : (
        'NO TODOS'
      )}
    </div>
  );
}

export default TodoApp;
