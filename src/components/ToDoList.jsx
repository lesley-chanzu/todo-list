
import { useState } from "react";
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function addTask(task) {
    setTasks([...tasks, task]);
    setNewTask("");
  }

  function deleteTask(task) {
    setTasks(tasks.filter(t => t !== task));
  }

  return (
    <>
      <div>ToDoLists</div>
      {tasks.map((task, index) => <div key={task}>
        <p>{index + 1}. {task}</p>
        <button onClick={() => deleteTask(task)}>Delete</button>
      </div>)}
      <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />
      <button onClick={() => addTask(newTask)}>Add Task</button>
    </>
  )
}

export default ToDoList