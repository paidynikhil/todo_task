import React from "react";
import TodoList from "./TodoList";
import { AppBar, Toolbar, Typography } from "@mui/material";
import './App.css'
function App() {
  return (
    <div className="App">
      <AppBar className="heading" position="relative">
        <Toolbar className="title">
          <Typography variant="h6">To-Do List</Typography>
        </Toolbar>
      </AppBar>
      <TodoList />
    </div>
  );
}

export default App;
