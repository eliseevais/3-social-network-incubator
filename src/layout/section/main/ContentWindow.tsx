import React from "react";
import {Styles} from "./ContentWindow_Styles";
import {MyPosts, PostPropsType} from "./myPosts/MyPosts";
import {Inbox, MessagePropsType} from "../inbox/Inbox";
import {Redirect, Route} from "react-router-dom";
import {Friends} from "../friends/Friends";
import {Feeds} from "../feeds/Feeds";
import {Melodies} from "../melodies/Melodies";
import {DialogItemPropsType} from "../inbox/dialogItem/DialogItem";
import {FriendPropsType} from "../friends/Friend";


type ContentWindowPropsType = {
  state: {
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
  addPost: () => void;
  updateNewPostText: (newPostText: string) => void;
  sendMessage: () => void;
  updateNewMessageText: (newMessageText: string) => void
};

export const ContentWindow = (props: ContentWindowPropsType) => {
  return (
    <Styles.ContentWindow>
      <Redirect from='/' to='/myprofile'/>

      <Route path='/myprofile' render={
        () => <MyPosts posts={props.state.myPostsPage.posts}
                       newPostText={props.state.myPostsPage.newPostText}
                       addPost={props.addPost}
                       updateNewPostText={props.updateNewPostText}
        />}
      />

      <Route path='/inbox' render={
        () => <Inbox dialogs={props.state.inboxPage.dialogs}
                     messages={props.state.inboxPage.messages}
                     newMessageText={props.state.inboxPage.newMessageText}
                     sendMessage={props.sendMessage}
                     updateNewMessageText={props.updateNewMessageText}

        />}
      />

      <Route path='/friends' render={
        () => <Friends friends={props.state.friendsPage.friends}
        />}
      />

      <Route path='/feeds' component={Feeds}/>
      <Route path='/melodies' component={Melodies}/>

    </Styles.ContentWindow>
  )
}