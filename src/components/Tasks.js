import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle, toggleEdit }) => {

    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle} 
                    toggleEdit={toggleEdit}
                    />
            ))}
        </>
    )
}

export default Tasks
