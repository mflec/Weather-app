import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards';
import includes from './utils/includes';
import Swal from 'sweetalert2'

export default function App() {
  const [cities, setCities]= useState([]) //el estado inicial es un array vacio

function onSearch(newcity) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${newcity}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
  .then(r => r.json())
  .then((recurso) => {
    if(recurso.main !== undefined) {
      if(includes(recurso, cities)) return Swal.fire('That city is already shown on the screen')
      const newcity = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            name: recurso.name,
          };
          setCities(oldCities => [...oldCities, newcity]);
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<h3>Check your spelling</h3>'
          })
        }
      });
    }

function onClose(id) {
  setCities(oldCities =>oldCities.filter(city => city.id!==id))
}

return (
<div>
<nav className= 'main-header'> 
<Nav onSearch={onSearch}/>
</nav>
<h1 id='title'> Weather App </h1>
<Cards cities={cities} onClose={onClose}/>
</div>
  );
}