import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservartions: {
        id: null,
        name: '',
        date: '',
        time: '',
        number: null,
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(reservations => this.setState({...reservations}))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
  
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}


// class App extends Component {
// }

export default App;
