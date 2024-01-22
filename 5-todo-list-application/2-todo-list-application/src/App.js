import TodoForms from "./components/TodoForms";
import Todos from "./components/Todos";
function App() {
  return (
    <div>
      <h1 className="main-title">TodoList</h1>
      {/* todo form */}
      <TodoForms />
      {/* todos */}
      <Todos />
    </div>
  );
}

export default App;
