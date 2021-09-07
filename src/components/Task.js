import { FaTimes } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle/* , onChange */ }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}
                <span>
                    {/* <FaPen
                        style={{
                            color: 'grey',
                            cursor: 'pointer'
                        }}
                        onClick={() => onChange(task.id)} /> */}
                    <FaTimes
                        style={{
                            color: 'red',
                            cursor: 'pointer'
                        }}
                        onClick={() => onDelete(task.id)} />
                </span>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
