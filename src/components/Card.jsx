import React from 'react';
import '../styles/Card.module.css'

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className='card'>
      <button className='button' onClick={onClose}>X</button>
      <div id="cardcontent">
        <h5>{name}</h5>
        <p>Min: {min}°</p>
        <p>Max: {max}°</p>
        <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} />
      </div>
    </div>
  );
};