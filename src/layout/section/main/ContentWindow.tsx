import React from "react";
import {Redirect, Route} from "react-router-dom";
import {ActionsPropsType} from "../../../redux/storeAllPropsType";
import {RootState} from "../../../redux/reduxStore";
import {Inbox} from "../inbox/Inbox";
import {Friends} from "../friends/Friends";
import {Feeds} from "../feeds/Feeds";
import {Melodies} from "../melodies/Melodies";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import {Styles} from "./ContentWindow_Styles";
import {InboxContainer} from "../inbox/InboxContainer";

type ContentWindowPropsType = {
  state: RootState;
  dispatch: (action: ActionsPropsType) => void
};

// export const ContentWindow = (props: ContentWindowPropsType) => {
export const ContentWindow = (props: any) => {
  return (
    <Styles.ContentWindow>
      <Redirect from='/' to='/myprofile'/>

      <Route path='/myprofile' render={
        () => <MyPostsContainer/>}
      />

      <Route path='/inbox' render={
        () => <InboxContainer/>}
      />
      <Route path='/feeds' render={
        () => <Feeds feeds={props.state.feedsPage.feeds}/>}/>

      <Route path='/friends' component={Friends}/>
      <Route path='/melodies' component={Melodies}/>

    </Styles.ContentWindow>
  )
}