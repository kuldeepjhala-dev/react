import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

function TodoForms({ addTodo }) {
  const [title, setTitle] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    if (title.trim().length === 0) {
      // alert("please fill input");
      toast.info("Please fill input", {
        autoClose: 1500,
      });
      return;
    }
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    addTodo(newTodo);
    setTitle("");
  }

  return (
    <div>
      <form onSubmit={handelSubmit} className="todoForm">
        <input
          className="todoForm__input"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button type="submit" className="todoForm__btn">
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForms;
