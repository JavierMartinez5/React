import React from 'react'
import Button from '../header-components/Button'
import { FaTimes } from 'react-icons/fa'

function Task({task, className, removeTasks, changeReminder}) {
    return (
        <div className={className} onDoubleClick={() => changeReminder(task.id)}>
            <div className='btn-closed-right' >
                    <Button  title={<FaTimes />} className={'btn-closed btn-delete btn'} 
                    onClickHandler={removeTasks} id={task.id}/>
            </div>
            <div className={`bg-white ${task.reminder && 'reminder-on'}`}>
                <h5 >{task.title}</h5>
                <p >{task.body}</p>
            </div>
        </div>
    )
}

export default Task
