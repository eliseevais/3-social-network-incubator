import React from 'react';
import ReactDOM from 'react-dom';
import {StatePropsType, store} from './redux/state';
import {GlobalStyles} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import App from './App';
import {myTheme} from './styles/Theme.styled';
import './index.css';

const rerenderEntireTree = (state: StatePropsType) => {
  ReactDOM.render(
    <ThemeProvider theme={myTheme}>
      <App store={store}/>
      <GlobalStyles/>
    </ThemeProvider>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);