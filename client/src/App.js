import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Tags from "./components/Tags";
import Links from "./components/Links";
import CreateLink from "./components/CreateLink";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="ml2 mr2">
        <Switch>
          <Route path="/" exact component={Tags}/>
          <Route path="/tags/:tagId" exact component={Links}/>
          <Route path="/new" component={CreateLink}/>
          <Route path="/search" component={Search}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
