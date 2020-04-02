import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
    }
  }

  updateState = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          onChange={(event) => this.updateState(event)}
          value={this.state.name}
        >
        </input>
        <input
           type='text'
           placeholder='Date'
           name='date'
           onChange={(event) => this.updateState(event)}
           value={this.state.date}     
        >
        </input>
        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          onChange={(event) => this.updateState(event)}
          value={this.state.date}       
        >
        </input>
        <input
          type='text'
          placeholder='Time'
          name='time'
          onChange={(event) => this.updateState(event)}
          value={this.state.time}       
        >
        </input>
        <input
          type='text'
          placeholder='Number of guests'
          name='number'
          onChange={(event) => this.updateState(event)}
          value={this.state.number}       
        >
        </input>
        <button>Make Reservation</button>
      </form>
    )
  }
}


export default ReservationForm;