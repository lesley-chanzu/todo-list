import "./ToDoList.css";
import { useState } from "react";
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState("");

  function addTask(task) {
    setTasks([...tasks, { id: tasks.length + 1, title: task }]);
    setNewTask("");
    setEditTask(null);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  function updateTask() {
    const newTasks = tasks.map((t) => {
      if (t.id === editTask.id) {
        return {
          ...t,
          title: taskToEdit
        }
      }
      return t;
    })
    setTasks(newTasks);
    setEditTask(null)
    setTaskToEdit("")
  }

  return (
    <div className="container">
      <div className="todolists-app">
        <div className="header">ToDo List</div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button className="btn add-btn" onClick={() => addTask(newTask)}>
          Add Your Task Here
        </button>
        {tasks.map((task, index) => (
          <div key={task.id}>
            {task.id === editTask?.id ? (
              <input type="text" placeholder="edit task"
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
              />
            ) : (
              <p>
                {index + 1}. {task.title}
              </p>
            )}
            {task.id === editTask?.id ? (
              <div>
                {" "}
                <button className="btn edit-btn" onClick={() => { updateTask() }}>
                  Save
                </button>
                <button
                  className="btn edit-btn"
                  onClick={() => {
                    setEditTask(null)
                    setTaskToEdit("")
                  }}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                className="btn edit-btn"
                onClick={() => {
                  setEditTask(task);
                  setTaskToEdit(task.title);
                }}
              >
                Edit
              </button>
            )}
            <button className="btn del-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
