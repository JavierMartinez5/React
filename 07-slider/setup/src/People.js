import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';


const People = ({ people }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      nextPerson();
    }, 3000);
    return () => {
      clearInterval(timerId);
    }
  }, [index])

  const nextPerson = () => {
    let value = index;
    if (value === people.length - 1) {
      value = 0;
    } else {
      value++;
    }
    setIndex(value);
  }

  const prevPerson = () => {
    let value = index;
    if (value === 0) {
      value = people.length - 1;
    } else {
      value--;
    }
    setIndex(value);
  }
  return (
    <div className="section-center">
      {people.map((person, i) => {
        let position = 'nextSlide';
        if (i === index) {
          position = 'activeSlide';
        }
        if (i === index - 1 || (index === 0 && i === people.length - 1)) {
          position = 'lastSlide';
        }
        const { id, image, name, title, quote } = person;
        return (
          <article key={id} className={position}>
            <img src={image} alt={name} className="person-img" />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight />
          </article>
        )
      })}
      <button className="prev" onClick={prevPerson}><FiChevronLeft /></button>
      <button className="next" onClick={nextPerson}><FiChevronRight /></button>
    </div>
  )
}

export default People
