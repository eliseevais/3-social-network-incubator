import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyles} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import {store} from './redux/state'

const rerenderEntireTree = (state: any) => {
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




