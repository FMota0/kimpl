import React from 'react';
import './App.css';

import Header from "./components/Header";
import Tags from "./components/Tags";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="ml2 mr2">
        <Tags/>
      </div>
    </div>
  );
}

export default App;
