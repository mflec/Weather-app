import React, { useState } from "react";
import '../styles/Nav.module.css';

export default function SearchBar({onSearch}) {
  const [city, setCity]= useState('')
  return (
    <div>
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
      className='inputb'
        type="text"
        placeholder="Search a city..."
        value= {city}
        onChange= {e=>setCity(e.target.value)}
      />
      <input type="submit" className='buttonnav' value="Search"/>
    </form>
    </div>
  );
}