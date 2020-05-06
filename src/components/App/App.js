import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from '../Header/Header';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

import { Home } from '../../pages/Home/Home';
import { Search } from '../../pages/Search/Search';
import { Settings } from '../../pages/Settings/Settings';
import { ContactForm } from '../../pages/ContactForm/ContactForm';

import { Login } from '../../pages/Login/Login';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>

        <PrivateRoute exact path='/'>
          <Home />
        </PrivateRoute>

        <PrivateRoute path='/rechercher'>
          <Search />
        </PrivateRoute>

        <PrivateRoute path='/parametres'>
          <Settings />
        </PrivateRoute>

        <PrivateRoute path='/ajouter-ou-modifier-un-contact'>
          <ContactForm />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
