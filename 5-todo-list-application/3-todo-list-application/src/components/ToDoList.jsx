import Todo from "./Todo";
function ToDoList({ taskList, toggleCompleted, removeTodo }) {
  console.log(taskList);
  return (
    <div>
      {taskList.map((task) => (
        <Todo {...task} key={task.id} toggleCompleted={toggleCompleted} removeTodo={removeTodo}/>
      ))}
    </div>
  );
}
export default ToDoList;
