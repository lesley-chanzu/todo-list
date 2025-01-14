import "./ToDoList.css";
import { useState } from "react";
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  function addTask(task) {
    setTasks([...tasks, { id: tasks.length + 1, title: task }]);
    setNewTask("");
    setEditTask(null);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(t => t.id !== taskId));
  }

  return (
    <div className="container">
      <div className="todolists-app">
        <div className="header">ToDo List</div>
        <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} placeholder="Add new task" />
        <button className="btn add-btn" onClick={() => addTask(newTask)}>Add Task</button>
        {tasks.map((task, index) => <div key={task.id}>
          {task.id === editTask?.id ? <input type="text" placeholder="edit task" /> :
            <p>{index + 1}. {task.title}</p>}
          <button className="btn edit-btn" onClick={() => setEditTask(task)}>Edit</button>
          <button className="btn del-btn" onClick={() => deleteTask(task.id)}>Delete</button>
        </div>)}
      </div>
    </div >
  )
}

export default ToDoList