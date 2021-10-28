import Task from './Task'

const Tasks = ({ tasks, onDelete, onDbl }) => {
    return (
        <>
            {tasks.map(task => 
            <Task key={task.id} task={task} onDelete={onDelete} onDbl={onDbl} />)}
        </>
    )
}

export default Tasks
