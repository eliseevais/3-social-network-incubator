import React from 'react';
import ReactDOM from 'react-dom';
import {AppStoreType, store} from './redux/reduxStore';
import {GlobalStyles} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import App from './App';
import {myTheme} from './styles/Theme.styled';
import './index.css';

const rerenderEntireTree = (store: AppStoreType) => {
  ReactDOM.render(
    <ThemeProvider theme={myTheme}>
      <App store={store}/>
      <GlobalStyles/>
    </ThemeProvider>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store);
store.subscribe(() => {
  rerenderEntireTree(store)
});