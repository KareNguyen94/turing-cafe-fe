import React from 'react';

const ReservationCard = ({ id, name, date, time, number }) => {

  return (
  <article key={id}>
    <h3>{name}</h3>
    <p>{date}</p>
    <p>{time}</p>
    <p>Number of guest: {number}</p>
    <button>Cancel</button>
  </article>
  )
}

export default ReservationCard;
