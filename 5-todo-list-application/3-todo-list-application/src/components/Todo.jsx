import "../App.css";
function Todo({ id, task, status, toggleCompleted, removeTodo }) {
  return (
    <div className="todoList">
      task: {task}
      <br />
      status: {status}
      <input
        type="checkbox"
        checked={status}
        onChange={() => {
          toggleCompleted(id);
        }}
      />
      <br />
      <button
        onClick={() => {
          removeTodo(id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default Todo;
