import React from 'react';
import styled from 'styled-components';
// import logo from './logo.svg';
import './App.css';

const colors = {
  primary: '#1675d1',
  dark: '#004a9f',
  textOnP: 'white',
  secondary: '#FF9800',
  textOnS: 'black',
};

const spaces = {
  a: '8px',
};

const Title = styled.h1`
  padding: ${spaces.a};
  font-family: 'Lobster', cursive;
  font-size: 4rem;
  text-align: center;
  color: ${colors.textOnP};
  background-color: ${colors.primary};
  border-top: 6px solid ${colors.dark};
`;

function App() {
  return (
    <div className='App'>
      <Title>Glocus</Title>
      <p>Prospection</p>
      <ul>
        <li>
          <a href='default.asp'>Accueil</a>
        </li>
        <li>
          <a href='news.asp'>Rechercher</a>
        </li>
        <li>
          <a href='contact.asp'>Paramètres</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
