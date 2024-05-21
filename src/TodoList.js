// src/TodoList.js
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = () => {
    if (taskInput.trim() === "") return;
    if (editingIndex !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editingIndex ? taskInput : task
      );
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, taskInput]);
    }
    setTaskInput("");
  };

  const handleEditTask = (index) => {
    setTaskInput(tasks[index]);
    setEditingIndex(index);
  };

  const handleDeleteTask = (index) => {
    const filteredTasks = tasks.filter((task,i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "40px" }}>
      <TextField
        fullWidth
        variant="outlined"
        label="New Task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={handleAddTask}
      >
        {editingIndex !== null ? "Update Task" : "Add Task"}
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => handleEditTask(index)}
            >
              <Edit />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDeleteTask(index)}
            >
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TodoList;
