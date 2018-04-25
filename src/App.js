import React, { Component } from 'react';
import TodoInput from './ToDoInput'
import TodoList from './ToDoList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const tasks = [
      { title: 'ToDo1つ目', id: 0 },
      { title: 'ToDo2つ目', id: 1 },
    ];

    return (
      <div>
        <h1>TODO App</h1>
        <TodoInput />
        <TodoList tasks={tasks} />
      </div>
    );
  }
}

export default App;
