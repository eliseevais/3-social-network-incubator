import React from "react";
import {Redirect, Route} from "react-router-dom";
import {ActionsPropsType, StatePropsType} from "../../../redux/state";
import {MyPosts} from "./myPosts/MyPosts";
import {Inbox} from "../inbox/Inbox";
import {Friends} from "../friends/Friends";
import {Feeds} from "../feeds/Feeds";
import {Melodies} from "../melodies/Melodies";
import {Styles} from "./ContentWindow_Styles";

type ContentWindowPropsType = {
  state: StatePropsType;
  dispatch: (action: ActionsPropsType) => void
};

export const ContentWindow = (props: ContentWindowPropsType) => {
  return (
    <Styles.ContentWindow>
      <Redirect from='/' to='/myprofile'/>

      <Route path='/myprofile' render={
        () => <MyPosts posts={props.state.myPostsPage.posts}
                       newPostText={props.state.myPostsPage.newPostText}
                       dispatch={props.dispatch}
        />}
      />

      <Route path='/inbox' render={
        () => <Inbox dialogs={props.state.inboxPage.dialogs}
                     messages={props.state.inboxPage.messages}
                     newMessageText={props.state.inboxPage.newMessageText}
                     dispatch={props.dispatch}
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