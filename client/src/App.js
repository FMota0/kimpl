import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Tags from "./components/Tags";
import Links from "./components/Links";
import Link from "./components/Link";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="ml2 mr2">
        <Switch>
          <Route path="/" exact component={Tags}/>
          <Route path="/tags/:tag" exact component={Links}/>
          <Route path="/links/:linkId" exact component={Link}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
