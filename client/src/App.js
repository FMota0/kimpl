import React from 'react';
import './App.css';

import Header from "./components/Header";
import Tags from "./components/Tags";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="ml2 mr2">
        <Tags/>
      </div>
      <div className="ml2 mr2">
        <Links/>
      </div>
    </div>
  );
}

export default App;
