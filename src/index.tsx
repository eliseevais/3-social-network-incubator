import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyles} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import {myTheme} from './styles/Theme.styled';
import {
  DialogItemPropsType
} from "./layout/section/inbox/dialogItem/DialogItem";
import {MessagePropsType} from "./layout/section/inbox/Inbox";
import {PostPropsType} from "./layout/section/main/myPosts/MyPosts";

export type storePropsType = {
  posts: Array<PostPropsType>;
  dialogs: Array<DialogItemPropsType>;
  messages: Array<MessagePropsType>
};

export let store: storePropsType = {
  posts: [
    {id: 1, message: 'It\'s my first post.', likesCount: 9},
    {id: 2, message: 'Hello! How are you doing?', likesCount: 15},
    {id: 3, message: 'Winter is coming to our city', likesCount: 3},
    {id: 4, message: 'Happy New Year!', likesCount: 7},
    {id: 5, message: 'The weather was -24 today.', likesCount: 10},
    {id: 6, message: 'I like it-incubator!', likesCount: 23}
  ],
  dialogs: [
    {id: 1, name: 'Dmitry'},
    {id: 2, name: 'Ekaterina'},
    {id: 3, name: 'Maria'},
    {id: 4, name: 'Olga'},
    {id: 5, name: 'Maxim'}
  ],
  messages: [
    {id: 1, message: 'Hello, my friend!'},
    {id: 2, message: 'How are you doing?'},
    {id: 3, message: 'Would you like to go to the cinema?'},
    {id: 4, message: 'No, thanks, I will stay at home to study.'},
  ]
};

ReactDOM.render(
  <ThemeProvider theme={myTheme}>
    <App store={store}/>
    <GlobalStyles/>
  </ThemeProvider>,
  document.getElementById('root')
);