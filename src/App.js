import logo from './logo.svg';
import './App.css';
import Reminder from './components/Reminder';
import { useState } from 'react';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
       <Reminder/>
      </header>
    </div>
  );
}


export default App;
