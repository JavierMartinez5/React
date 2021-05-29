import React, { useState } from 'react';
import data from './data';
import People from './People';
import Header from './Header';
function App() {
  const [people, setPeople] = useState(data);

  return (
    <section className="section">
      <Header />
      <People people={people}/>
    </section>
  )
}

export default App;
