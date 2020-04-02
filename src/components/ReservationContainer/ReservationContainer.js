import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard.js';

const ReservationContainer = ({ reservations }) => {
  return reservations.map(reservation => {
    return (
      <ReservationCard 
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })
}

export default ReservationContainer;