import React from 'react'

function CreateTask({setTitle, setBody, setReminder, renderNewTasks}) {
    return (
        <>
            <form className="add-form" onSubmit={(e) => renderNewTasks(e)}>
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" placeholder="Add Task" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label>Day & Time</label>
                    <input type="text" placeholder="Add Day & Time" onChange={(e) => setBody(e.target.value)}/>
                </div>
                    <div className='flex'>
                        <div className="form-control form-control-check">
                        <label>Set Reminer</label>
                        <input type="checkbox" onChange={(e) => setReminder(e.currentTarget.checked)}/>
                    </div>
                    <input className="btn-save-task btn" type="submit" value="Save Task" />
                </div>
            </form>
        </>
    )
}

export default CreateTask
