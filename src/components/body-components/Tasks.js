import React from 'react'
import Task from './Task'

function Tasks({tasks, removeTasks, changeReminder}) {
    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} className={'task'} removeTasks={removeTasks}
                changeReminder={changeReminder}/>
            ))}
        </div>
    )
}

export default Tasks
