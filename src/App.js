import React from 'react';
import './App.css';
import Example from './chart.js';
import Header from './header.js';

function App() {
  return (
    <div className="App">
    <Header siteTitle={'Test GitHub Pages App'} />
    <center>
      <h2>A basic line chart</h2>
      <Example />
    </center>
    </div>
  );
}

export default App;
