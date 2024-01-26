import Todo from "./components/Todo";
import TodoForms from "./components/TodoForms";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Guitar", completed: false },
    { id: 2, title: "Learn React", completed: true },
    { id: 3, title: "find good words in Am", completed: false },
  ]);

  const addTodo = (newTodo) => {
    setTodos(prevState => [...prevState, newTodo])
  }

  // function toggleCompleted(id) {
  //   // console.log(id, "toggle-completed");
  //   // const newTodos = [];
  //   // for (let todo of todos) {
  //   //   if (todo.id === id) {
  //   //     newTodos.push({ ...todo, completed: !todo.completed });
  //   //   }
  //   //   else {
  //   //     newTodos.push(todo);
  //   //   }
  //   // }
  //   // setTodos(newTodos);
  //  }

  const toggleCompleted = (id) => {
    setTodos(prevState => {
      return prevState.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        else {
          return todo;
        }
      })
    })
  }

  // function removeTodo(id) {
  //   let newTodos = [];
  //   for (let todo of todos) {
  //     if (todo.id !== id) {
  //       newTodos.push(todo);
  //     }
  //   }
  //   setTodos(newTodos);
  // }

  const removeTodo = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  // const removeTodo = (id) => {
  //   setTodos(prevState => prevState.filter((todo) => todo.id !== id));
  // }

  return (
    <div className="container">
      <h1 className="main-title">TodoList</h1>
      <TodoForms addTodo={addTodo} />
      <Todos todos={todos} toggleCompleted={toggleCompleted} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
