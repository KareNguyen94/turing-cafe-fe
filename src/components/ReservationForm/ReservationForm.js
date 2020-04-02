import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
      // error: ''
    }
  }

  updateState = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  validateInputs = (event) => {
    event.preventDefault();
    // if (!this.state.name || !this.state.date ||!this.state.time || !this.state.namber) {
    //   this.setState({ error: '*Require all inputs' })
    // } else {
      this.props.addReservation(this.state)
    // }
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
        <button onClick={(event) => this.validateInputs(event)}
          type='submit'
        >Make Reservation</button>
        {/* <p>{this.state.error}</p> */}
      </form>
    )
  }
}


export default ReservationForm;