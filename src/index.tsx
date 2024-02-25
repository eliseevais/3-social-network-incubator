import React from 'react';
import ReactDOM from 'react-dom';
import {AppStoreType, store} from './redux/reduxStore';
import {GlobalStyles} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import App from './App';
import {myTheme} from './styles/Theme.styled';
import './index.css';
import {StoreContext} from "./redux/storeContext";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const rerenderEntireTree = (store: AppStoreType) => {
  ReactDOM.render(
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Provider store={store}>
          <App/>
          <GlobalStyles/>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store);
store.subscribe(() => {
  rerenderEntireTree(store)
});