// src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [user, setUser] = useState({
    firstName: 'Morgan',
    lastName: 'Stewart',
    hasPets: true,
    age: 34,
  });

  const handleDarkMode = () => {
    setIsDarkMode(true);
    console.log('Dark Mode!');
  };

  const handleLightMode = () => {
    setIsDarkMode(false);
    console.log('Light Mode!');
  };

  useEffect(() => {
    console.log('Our isDarkMode state value is:', isDarkMode);
    console.log('User state:', user);
  }, [isDarkMode, user]);

  return (
    <>
      <div>
        <h1>
          Hello, my name is {user.firstName} {user.lastName}, I am {user.age} years old,
          and I {user.hasPets ? 'have' : "don't have"} pets.
        </h1>
      </div>

      <div className={isDarkMode ? 'dark' : 'light'}>
    
      </div>

      <div>
        <button onClick={handleDarkMode}>Dark Mode</button>
        <button onClick={handleLightMode}>Light Mode</button>
      </div>
    </>
  );
}

export default App;
