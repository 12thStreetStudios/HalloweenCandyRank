import React, { Component } from 'react';
import Candy from './components/Candy';
import Skip from './components/Skip';

import './styles/App.css';

class App extends Component {
  state = {
    candies: null,
    candy1: null,
    candy2: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ candies: res.data}))
      .catch(err => console.log(err));
  }

  getCandies = async () => {
    const response = await fetch('/candies');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  setCandies() {
    var candies = state.data.candies;
    // select random candies from list
    var c1 = candies[Math.floor(Math.random() * candies.length)];
    var c2 = candies[Math.floor(Math.random() * candies.length)];
    this.setState({candy1: c1, candy2: c2});
  }

  vote = async () => {

  };

  render() {
  return (
    <div className="App">
      <div className="Candy">
        <ul>
        <div className="Candy1">
          <Candy className="CandyOne" name={this.state.candy1.name} imgUrl={this.state.candy1.image}/>
        </div>
        <div>
          <Candy className="CandyTwo" name={this.state.candy2.name} imgUrl={this.state.candy2.image}/>
        </div>
        </ul>
      </div>
      
      <div className="SkipButton">
        <Skip />
      </div>
    </div>
    );
  }
}

export default App;
