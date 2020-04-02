import React from 'react';

const Card = ({ id, name, date, time, number }) => {

  return (
  <article key={id}>
    <h2>{name}</h2>
    <h3>{date}</h3>
    <h3>{time}</h3>
    <h3>Number of guest: {number}</h3>
    <button>Cancel</button>
  </article>
  )
}
