import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }

// This is where we write custom methods
// ** Increment - is a function that will us to increment the Counter.
// ** Decrement - is a function that will us to decrement the Counter.

increment = () =>  {
  this.setState ({
    count: this.state.count + 1
  })
}

 decrement = () =>  {
  this.setState ({
    count: this.state.count - 1
  })
}

reset = () =>  {
 this.setState ({
   count: this.state.count = 0
 })
}


  render () {
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>
          <button type="button" onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Counter;
