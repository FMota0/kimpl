import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Tags from "./components/Tags";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="ml2 mr2">
        <Switch>
          <Route path="/" exact component={Tags}/>
          <Route path="/tag/:tag" exact component={Links}/>
          <Route path="/link/:linkId" exact/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
