import React from 'react';
import '../styles/Cards.module.css';
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  if(cities){
    let toShow = cities&&cities.length<5? cities : cities.slice(cities.length - 5, cities.length)
    return (
      <div className='conteiner'>
        {toShow.map(c => <Card
        onClose={() => onClose(c.id)}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>No se encontraron ciudades</div>
    )
  }
}