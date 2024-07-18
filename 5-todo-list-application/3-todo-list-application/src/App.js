import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
function App() {
  console.log("component rendered");
  const [todoList, setToDoList] = useState([
    { id: uuidv4(), task: "Task-1", status: false },
    { id: uuidv4(), task: "Task-2", status: true },
    { id: uuidv4(), task: "Task-1", status: false },
  ]);
  const addTodo = (newTodo) => {
    setToDoList((prevState) => [...prevState, newTodo]);
  };
  const toggleStatus = (id) => {
    // const newTodo = [];
    // for (let todo of todoList) {
    //   if (todo.id === id) {
    //     newTodo.push({ ...todo, status: !todo.status });
    //   } else {
    //     newTodo.push(todo);
    //   }
    // }
    // setToDoList(newTodo);
    // console.log(id, "toggle completed");
    setToDoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        } else {
          return { ...todo };
        }
      });
    });
  };
  const removeTodo = (id) => {
    setToDoList((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <ToDoList
        taskList={todoList}
        toggleCompleted={toggleStatus}
        removeTodo={removeTodo}
      ></ToDoList>
    </div>
  );
}

export default App;
