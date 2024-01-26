import React from "react";

function Todo({ id, title, completed, toggleCompleted, removeTodo }) {
  return (
    <div>
      <p
        style={{
          border: "2px solid #242424",
          padding: "2rem",
          margin: "1rem",
        }}
      >
        id : {id} <br />
        title : {title} <br />
        status : {completed ? "Yes" : "No"} <br />
        <input
          type="checkbox"
          checked={completed}
          onChange={() => {
            toggleCompleted(id);
          }}
        />
        <br />
        <button onClick={() => removeTodo(id)}>Remove</button>
      </p>
    </div>
  );
}

export default Todo;
