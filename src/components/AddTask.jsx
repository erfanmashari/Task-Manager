import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const add = e => {
        e.preventDefault()

        if (text === "" || day === "") {
            alert("Fill in Fields!")
        }

        onAdd({text, day, reminder})

        setText("")
        setDay("")
        setReminder(false)
    }

    return (
        <form className="add-form"  onSubmit={add}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Task"
                value={text} onChange={e => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" placeholder="Date & Time"
                value={day} onChange={e => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox"
                value={reminder} onChange={e => setReminder(e.target.checked)} />
            </div>
            <button type="submit" className="btn btn-block">
                Add Task</button>
        </form>
    )
}

export default AddTask
