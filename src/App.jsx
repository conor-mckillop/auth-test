import React from 'react';
import './App.css';
import Application from './components/Application';
import UserProvider, { UserContext } from './providers/UserProvider';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Application/>
      </div>
    </UserProvider>
  );
}

export default App;
