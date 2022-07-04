import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  const [isSideMenuOpen,setIsSideMenuOpen]= useState(false);

  return (
    <div className="Container">
      {/* Main component */}
      <div className={`App ${isSideMenuOpen ? "open" : "close"}`}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={()=>setIsSideMenuOpen(!isSideMenuOpen)}>
          open / close
        </button>
        </div>
        
      </div>
      {/* Side Menu */}
      <div className="Side-menu">
          <a href="http://google.com">&times;</a>
          <a href="http://google.com">About</a>
          <a href="http://google.com">Services</a>
          <a href="http://google.com">Clients</a>
          <a href="http://google.com">Contact</a>
      </div>
    </div>
  );
}

export default App;
