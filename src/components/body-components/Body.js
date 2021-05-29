import React, { useState } from 'react'
import CreateTask from './CreateTask'
import Tasks from './Tasks'

function Body({ isOpenTaskModal, tasks, removeTasks, setTasks, changeReminder }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [reminder, setReminder] = useState(false);

    function createNewTask() {
        return {
            title,
            body,
            reminder,
            id: `id${Math.random()}`
        }
    }

    function renderNewTasks(e) {
        e.preventDefault();
        const newTask = createNewTask();
        console.log(newTask)

        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
            .then(res => {
                res.json()
                    .then(res => {
                        console.log(res);
                        setTasks([res, ...tasks])
                    })
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {isOpenTaskModal &&
                <CreateTask setTitle={setTitle} setBody={setBody}
                    setReminder={setReminder} renderNewTasks={renderNewTasks} />}

            <Tasks tasks={tasks} removeTasks={removeTasks} changeReminder={changeReminder} />
        </>
    )
}

export default Body

