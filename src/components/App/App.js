import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Home } from '../../pages/Home/Home';
import { Search } from '../../pages/Search/Search';
import { Settings } from '../../pages/Settings/Settings';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      {/* put here a container component hight order */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/rechercher'>
          <Search />
        </Route>
        <Route path='/parametres'>
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
