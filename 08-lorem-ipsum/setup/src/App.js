import React, { useState } from 'react';
import data from './data';
function App() {
  const [numbOfParagraphs, setNumbOfParagraphs] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = numbOfParagraphs;
    if (value < 0) {
      value = 1;
    } else if (value > data.length) {
      value = data.length;
    }
    setParagraphs(data.slice(0, value));
  }
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name='amount' id='amount' onChange={(e) => setNumbOfParagraphs(e.target.value)} value={numbOfParagraphs} />
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, i) => {
          return (
            <p key={i}>{paragraph}</p>
          )
        })}
      </article>
    </section>
  )
}

export default App;
