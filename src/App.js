import React from 'react';
import NavBar from './components/navbar';

import NAVIGABLES from './constants/navigable';

import TimeLine from './components/timeLine';
import BusinessCard from './components/businessCard';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar
        titles={NAVIGABLES}
      />
      <BusinessCard />
      <TimeLine />
    </div>
  );
}

export default App;
