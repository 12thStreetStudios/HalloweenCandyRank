import React from 'react';
import './components';
import './App.css';
import Candy from './components/Candy';

export default function App() {
  return (
    <div className="App">
      <div className="Candy">
        <Candy className="CandyOne" name="test1"/>
        <Candy className="CandyTwo" name="test2"/>
      </div>

    </div>
  );
}
