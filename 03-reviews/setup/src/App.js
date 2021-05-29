import React from 'react';
import Review from './Review';
import {FaGitkraken} from 'react-icons/fa'
function App() {
  return (
    <main>
      <section className='container'>
        <div className="title">
          <h4>Our Rewiev</h4>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App;
