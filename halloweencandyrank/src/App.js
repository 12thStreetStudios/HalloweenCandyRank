import React from 'react';
import Candy from './components/Candy';
import Skip from './components/Skip';

import './styles/App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Candy">
        <ul>
        <div className="Candy1">
          <Candy className="CandyOne" name="test1"/>
        </div>
        <div>
          <Candy className="CandyTwo" name="test2"/>
        </div>
        </ul>
      </div>
      
      <div className="SkipButton">
        <Skip />
      </div>
    </div>
  );
}
