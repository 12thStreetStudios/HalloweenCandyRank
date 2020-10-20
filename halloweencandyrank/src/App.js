import React from 'react';
import Candy from './components/Candy';
import Skip from './components/Skip';

import './styles/App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Candy">
        <ul>
          <Candy className="CandyOne" name="test1"/>
          <Candy className="CandyTwo" name="test2"/>
        </ul>
        <Skip />
      </div>

    </div>
  );
}
