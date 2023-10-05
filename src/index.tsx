import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './styles/Theme.styled';

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root')
);