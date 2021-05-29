import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Body from './components/body-components/Body'
import About from './components/footer-components/About';
import Footer from './components/footer-components/Footer';
import Header from './components/header-components/Header'

const App = () => {
  const [taskModal, setTaskModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/posts?_limit=10')
      .then(response => response.json())
      .then(json => { setTasks(json.reverse()); console.log(json) })
  }, [])

  function setTaskModalState() {
    setTaskModal(!taskModal);
  }

  function removeTasks(id) {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    })

    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
  }

  function changeReminder(id) {
    let task = tasks.find(task => task.id === id);
    task = { ...task };
    task.reminder ? task.reminder = !task.reminder : task.reminder = true;
    console.log(tasks)
    console.log(task)

    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(res => {
            setTasks(tasks.map(task => {
              if (task.id === res.id) {
                return res;
              } else {
                return task;
              }
            }))
          })
        } else {
          setError(res.status)
        }
      })
      .catch(err => console.log('dddd'))
  }

  return (
    <Router>
      <div className="container">
        <Header isOpenTaskModal={taskModal} setTaskModalState={setTaskModalState} />


        <Route path='/' exact render={(props) => (
          <>
            {error ? <p>Somthing went wrong. Status code : {error}</p> : <Body isOpenTaskModal={taskModal}
              tasks={tasks} removeTasks={removeTasks}
              setTasks={setTasks} changeReminder={changeReminder} />}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App
