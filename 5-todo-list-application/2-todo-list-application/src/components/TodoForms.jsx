import React from 'react'

function TodoForms() {
  function handelSubmit(e) {
    console.log("submitted");
    e.preventDefault();
  }
  return <form onSubmit={handelSubmit}>
    <input type="text" />
    <button type='submit'>Add</button>
  </form>
}

export default TodoForms
