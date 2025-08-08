// src/App.js

import { useState } from 'react';
import './App.css';

const App = () => {
  const [mode, setMode] = useState('light');

  const handleMode = (modeValue) => {
    setMode(modeValue);
  };

  return (
    <>
      <div className={mode}>
        <h1>Hello world!</h1>
      </div>
      <div>
        <button onClick={() => handleMode('dark')}>Dark Mode</button>
        <button onClick={() => handleMode('light')}>Light Mode</button>
      </div>
    </>
  );
};

export default App;
