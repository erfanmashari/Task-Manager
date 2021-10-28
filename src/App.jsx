import { useState } from 'react'
import Header from "./components/Header"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"

const App = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2:30pm",
        reminder: true
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 1:30pm",
        reminder: true
    },
    {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th at 2:30pm",
        reminder: false
    },
])

const onDelete = id => {
  setTasks(tasks.filter(task => task.id !== id))
}

const onDbl = id => {
  setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task ))
}

const onAdd = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

  return (
    <div className="container">
      <Header onToggle={() => setShowAdd(!showAdd)}
      color={showAdd ? "red" : "green"} close={showAdd ? "Close" : "Add"} />
      {showAdd && <AddTask onAdd={onAdd} />} 
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onDbl={onDbl} /> : "No Tasks"}
    </div>
  )
}

export default App
