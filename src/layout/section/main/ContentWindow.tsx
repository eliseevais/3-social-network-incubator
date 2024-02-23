import React from "react";
import {Redirect, Route} from "react-router-dom";
import {MyPosts} from "./myPosts/MyPosts";
import {Inbox} from "../inbox/Inbox";
import {Friends} from "../friends/Friends";
import {Feeds} from "../feeds/Feeds";
import {Melodies} from "../melodies/Melodies";
import {Styles} from "./ContentWindow_Styles";
import {ActionsPropsType} from "../../../redux/storeAllPropsType";
import {RootState} from "../../../redux/reduxStore";

type ContentWindowPropsType = {
  state: RootState;
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
      <Route path='/feeds' render={
        () => <Feeds feeds={props.state.feedsPage.feeds}/>}/>

      <Route path='/friends' component={Friends}/>
      <Route path='/melodies' component={Melodies}/>

    </Styles.ContentWindow>
  )
}