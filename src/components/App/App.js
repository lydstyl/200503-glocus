import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StyledAppWrapper } from '../StyledAppWrapper/StyledAppWrapper';
import { Header } from '../Header/Header';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

import { Home } from '../../pages/Home/Home';
import { Search } from '../../pages/Search/Search';
import { Settings } from '../../pages/Settings/Settings';
import { ContactForm } from '../../pages/ContactForm/ContactForm';
import { ContactPage } from '../../pages/ContactPage/ContactPage';

import { Login } from '../../pages/Login/Login';
// import logo from './logo.svg';
import './App.css';

import { thunkOnAuthStateChanged } from '../../actions/authAction';

function App() {
  const dispatch = useDispatch();

  dispatch(thunkOnAuthStateChanged());

  return (
    <StyledAppWrapper>
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

          <PrivateRoute path='/ajouter-ou-modifier-un-contact/:id'>
            <ContactForm />
          </PrivateRoute>

          <PrivateRoute path='/ajouter-ou-modifier-un-contact'>
            <ContactForm />
          </PrivateRoute>

          <PrivateRoute path='/contact/:id'>
            <ContactPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </StyledAppWrapper>
  );
}

export default App;
