import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import EditTask from "./components/EditTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState(null)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Feed Shopping',
      day: 'Feb 5th at 3:30pm',
      reminder: false,
    }
  ])

  // Add Task
  const addTask = (someTask) => {
    const filteredTasks = tasks.filter((task) => task.id === someTask.id)
    if (filteredTasks.length > 0) {
      setTasks(tasks.map((task) =>
        task.id === someTask.id ? { ...task, text: someTask.text, day: someTask.day, reminder: someTask.reminder } : task
      ))
    } else {
      const id = Math.floor(Math.random() * 10000 + 1)
      const newTask = { id, ...someTask }
      setTasks([...tasks, newTask])
    }
    setTaskToEdit(null)
    setShowAddTask(false)
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }

  // Toggle Edit
  const toggleEdit = (taskToEdit) => {
    setTaskToEdit(taskToEdit)
    setShowAddTask(true)
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <EditTask onEdit={addTask} task={taskToEdit} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} toggleEdit={toggleEdit} /> : 'No Tasks To Show'}
    </div>
  );
}


export default App;
