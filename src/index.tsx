import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyles} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import {state} from './redux/state'





ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <App state={state}/>
    <GlobalStyles/>
  </ThemeProvider>,
  document.getElementById('root')
);