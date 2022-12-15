import React from 'react';
import quotes from '../quotes.json'
import '../css/QuoteBox.css'
import { useState } from 'react';

const QuoteBox = () => {

  const colors = [ 'white', 'blue', 'yelow', 'brown' ];

  const [index, setindex] = useState(Math.floor(Math.random() * quotes.length))

  const [color, setcolor] = useState(Math.floor(Math.random() * colors.length))

  const changeCard = () => {
    
    setindex(Math.floor(Math.random() * quotes.length));
    setcolor(Math.floor(Math.random() * colors.length));
  }

  return (
    <div className='principal-container'>
      <div className='title-general-container'>
        <h1>Quotes Card</h1>
      </div>
      <div className={`card-container ${colors[color]}`}>
        <div className='title-card'>
          
          <span className='span'>"</span>
          <p>{quotes[index].quote}</p>
        </div>
        <div className='author-card'>
          <p>{quotes[index].author}</p>
        </div>
        <div className='btn-container'>
          <button onClick={changeCard} className={colors[color]}>{'>'}</button>
          <div className='number-quote-container'>
            <p>"Appointment: {index}"</p>
          </div>
        </div>
        
      </div>

    </div>
  );
};

export default QuoteBox;