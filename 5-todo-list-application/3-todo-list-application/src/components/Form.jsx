import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ addTodo }) {
  const [title, setTitle] = useState("");
  function handelSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      alert("enter data");
      return;
    }
    const newTodo = {
      id: uuidv4(),
      task: title,
      status: false,
    };
    addTodo(newTodo);
  }
  console.log("Form rerendered");

  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
