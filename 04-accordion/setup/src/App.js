import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about loggin</h3>
        <section className='info'>
        <div className="title">
        </div>
        <div>
          {questions.map(question => {
            return (
              <SingleQuestion key={question.id} {...question}/>
            )
          })}
        </div>
      </section>
      </div>
    </main>
  )
}

export default App;
