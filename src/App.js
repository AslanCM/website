import React from 'react';
import NavBar from './components/navbar';

import NAVIGABLES from './constants/navigable';

import './App.css';
import BusinessCard from './components/businessCard';

function App() {
  return (
    <div className="App">
      <NavBar
        titles={NAVIGABLES}
      />
      <BusinessCard />
    </div>
  );
}

export default App;
