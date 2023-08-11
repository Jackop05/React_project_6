import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import StartingSite from './templates/StartingSite.js'
import Hero from './templates/Hero.js';

export default function App() {
  const [startingView, setStartingView] = useState(true)
  


  return (
    <div className="App">
      { startingView ? <StartingSite state={startingView} setState={setStartingView} /> : <Hero state={startingView} setState={setStartingView} /> }
    </div>
  );
}
