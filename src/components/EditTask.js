import { useState } from 'react'

const EditTask = ({ onEdit, task }) => {
    const [id, setId] = useState(task !== null ? task.id : '')
    const [text, setText] = useState(task !== null ? task.text : '')
    const [day, setDay] = useState(task !== null ? task.day : '')
    const [reminder, setReminder] = useState(task !== null ? task.reminder : false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Pleace add a task')
            return
        }

        onEdit( { id, text, day, reminder} )

        setId('')
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control' >
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control' >
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check' >
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default EditTask
