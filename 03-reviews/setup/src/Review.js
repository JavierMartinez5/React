import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const prevPerson = () => {
    let prevIndex = index - 1;
    if (prevIndex < 0) {
      prevIndex = people.length - 1;
    }
    setIndex(prevIndex);
  }

  const nextPerson = () => {
    let nextIndex = index + 1;
    if (nextIndex > people.length - 1) {
      nextIndex = 0;
    }
    setIndex(nextIndex);
  }

  const randomPerson = () => {
    let newIndex = index;
    while (newIndex === index) {
      newIndex = Math.floor(Math.random() * people.length);
    }
    setIndex(newIndex);
  }

  const {name, job, image, text} = people[index];
  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
        <button className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
      </div>
      <button className='random-btn' onClick={randomPerson}>surprise me</button>
    </article>
  )
};

export default Review;
