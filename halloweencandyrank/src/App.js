import React, { Component } from 'react';
import './App.css';
import Candy from './components/Candy';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express}))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
  return (
    <div className="App">
      <p>{this.state.data}</p>
      <div className="Candy">
        <Candy className="CandyOne" name="test1"/>
        <Candy className="CandyTwo" name="test2"/>
      </div>

    </div>
    );
  }
}

export default App;
