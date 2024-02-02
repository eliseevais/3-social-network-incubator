import {PostPropsType} from "../layout/section/main/myPosts/MyPosts";
import {
  DialogItemPropsType
} from "../layout/section/inbox/dialogItem/DialogItem";
import {MessagePropsType} from "../layout/section/inbox/Inbox";
import Dmitry from '../accets/img/Dmitry.jpg';
import Ekaterina from '../accets/img/Ekaterina.jpg';
import Maria from '../accets/img/Maria.jpg';
import Olga from '../accets/img/Olga.jpg';
import Maxim from '../accets/img/Maxim.jpg';
import {FriendPropsType} from "../layout/section/friends/Friend";

let rerenderEntireTree = () => {
  console.log('state was changed')
};

export type statePropsTypePages = {
  myPostsPage: {
    posts: Array<PostPropsType>;
    newPostText: string
  };
  inboxPage: {
    dialogs: Array<DialogItemPropsType>;
    messages: Array<MessagePropsType>;
    newMessageText: string
  };
  friendsPage: {
    friends: Array<FriendPropsType>
  }
};

export type newPostPropsType = {
  id: number;
  message: string;
  likesCount: 0
};

export type nextMessagePropsType = {
  id: number;
  message: string;
}

export let state: statePropsTypePages = {
  myPostsPage: {
    posts: [
      {id: 1, message: 'It\'s my first post.', likesCount: 9},
      {id: 2, message: 'Hello! How are you doing?', likesCount: 15},
      {id: 3, message: 'Winter is coming to our city', likesCount: 3},
      {id: 4, message: 'Happy New Year!', likesCount: 7},
      {id: 5, message: 'The weather was -24 today.', likesCount: 10},
      {id: 6, message: 'I like it-incubator!', likesCount: 23}
    ],
    newPostText: 'Hello from state.tsx'
  },
  inboxPage: {
    dialogs: [
      {id: 1, name: 'Dmitry', img: Dmitry},
      {id: 2, name: 'Ekaterina', img: Ekaterina},
      {id: 3, name: 'Maria', img: Maria},
      {id: 4, name: 'Olga', img: Olga},
      {id: 5, name: 'Maxim', img: Maxim}
    ],
    messages: [
      {id: 1, message: 'Hello, my friend!'},
      {id: 2, message: 'How are you doing?'},
      {id: 3, message: 'Would you like to go to the cinema?'},
      {id: 4, message: 'No, thanks, I will stay at home to study.'},
    ],
    newMessageText: 'HelloMessage from state.tsx'
  },
  friendsPage: {
    friends: [
      {id: 1, name: 'Dmitry'},
      {id: 2, name: 'Ekaterina'},
      {id: 3, name: 'Maria'},
      {id: 4, name: 'Olga'},
      {id: 5, name: 'Maxim'}
    ]
  }
};

export const addPost = () => {
  let newPost: newPostPropsType = {
    id: new Date().getTime(),
    message: state.myPostsPage.newPostText,
    likesCount: 0
  }
  state.myPostsPage.posts.push(newPost);
  state.myPostsPage.newPostText = '';
  rerenderEntireTree();
};

export const updateNewPostText = (newPostText: string) => {
   state.myPostsPage.newPostText = newPostText;
   rerenderEntireTree()
};

export const sendMessage = () => {
  let nextMessage: nextMessagePropsType = {
    id: new Date().getTime(),
    message: state.inboxPage.newMessageText,
  }
  state.inboxPage.messages.push(nextMessage);
  state.inboxPage.newMessageText = '';
  rerenderEntireTree()
};

export const updateNewMessageText = (newMessageText: string) => {
  state.inboxPage.newMessageText = newMessageText;
  rerenderEntireTree()
};

export const subscribe = (observer: any) => {
  rerenderEntireTree = observer
}