import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyles} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import {state} from './redux/state'
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state);




