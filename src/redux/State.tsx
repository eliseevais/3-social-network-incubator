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

export type statePropsTypePages = {
  MyPostsPage: {
    posts: Array<PostPropsType>
  };
  InboxPage: {
    dialogs: Array<DialogItemPropsType>;
    messages: Array<MessagePropsType>
  };
  FriendsPage: {
    friends: Array<FriendPropsType>
  }
};

export let state: statePropsTypePages = {
  MyPostsPage: {
    posts: [
      {id: 1, message: 'It\'s my first post.', likesCount: 9},
      {id: 2, message: 'Hello! How are you doing?', likesCount: 15},
      {id: 3, message: 'Winter is coming to our city', likesCount: 3},
      {id: 4, message: 'Happy New Year!', likesCount: 7},
      {id: 5, message: 'The weather was -24 today.', likesCount: 10},
      {id: 6, message: 'I like it-incubator!', likesCount: 23}
    ],
  },
  InboxPage: {
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
  },
  FriendsPage: {
    friends: [
      {id: 1, name: 'Dmitry'},
      {id: 2, name: 'Ekaterina'},
      {id: 3, name: 'Maria'},
      {id: 4, name: 'Olga'},
      {id: 5, name: 'Maxim'}
    ]
  }
};