import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onDbl }) => {
    return (
        <div className={task.reminder ? "task reminder" : "task"} 
        id={task.id} onDoubleClick={() => onDbl(task.id)} >
            <h3>{task.text}
            <FaTimes onClick={() => onDelete(task.id)}  /></h3>
            <p>{task.day}</p>
            
        </div>
    )
}

export default Task
