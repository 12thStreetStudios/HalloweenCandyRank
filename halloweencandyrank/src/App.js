import React, { Component } from 'react';
import Candy from './components/Candy';
import Skip from './components/Skip';

import './styles/App.css';

class App extends Component {
  state = {
    candies: null,
    candy1: {name: '', image: ''},
    candy2: {name: '', image: ''}
  };

  componentDidMount() {
    this.getCandies()
      .then(res => {
        this.setState({candies: res});
        this.setCandies();
      }).catch(err => console.log(err));
  }

  getCandies = async () => {
    const response = await fetch('/candies');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
		console.log(body);
    return body;
  };

  setCandies() {
		
    var candies = this.state.candies;
    // select random candies from list
    var c1 = candies[Math.floor(Math.random() * candies.length)];
    var c2 = candies[Math.floor(Math.random() * candies.length)];
    if(c1 === c2) { 
      this.setCandies();
    }
    this.setState({candy1: c1, candy2: c2});
  }

  vote = async (w,l) => {
    // w is winner, l is loser
    const reqOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({winner: w, loser: l, region: 'NULL'})
    }
    fetch('/vote', reqOptions)
      .then(res => console.log(res));
  };

  vote1 = async () => {
    this.vote(this.state.candy1.ID, this.state.candy2.ID);
    this.setCandies();
  }

  vote2 = async () => {
    this.vote(this.state.candy2.ID, this.state.candy1.ID);
    this.setCandies();
  }

  render() {
  return (
    <div className="App">
      <div className="Candy">
        <div onClick={this.vote1}>
          <Candy className="CandyOne" name={this.state.candy1.name} imgUrl={this.state.candy1.image}/>
        </div>
        <div onClick={this.vote2}>
          <Candy className="CandyTwo" name={this.state.candy2.name} imgUrl={this.state.candy2.image}/>
        </div>
      </div>
      <div className="SkipButton" onClick={this.setCandies}>
        <Skip />
      </div>
    </div>
    );
  }
}

export default App;
