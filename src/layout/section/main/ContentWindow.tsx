import React from "react";
import {Styles} from "./ContentWindow_Styles";
import {MyPosts, PostPropsType} from "./myPosts/MyPosts";
import {Inbox, MessagePropsType} from "../inbox/Inbox";
import {Route} from "react-router-dom";
import {Friends} from "../friends/Friends";
import {Feeds} from "../feeds/Feeds";
import {Melodies} from "../melodies/Melodies";
import {DialogItemPropsType} from "../inbox/dialogItem/DialogItem";

type ContentWindowPropsType = {
  store: {
    posts: Array<PostPropsType>;
    dialogs: Array<DialogItemPropsType>;
    messages: Array<MessagePropsType>
  }
};

export const ContentWindow = (props: ContentWindowPropsType) => {
  console.log('props from contentWindow', props)
  return (
    <Styles.ContentWindow>
      <Route path='/myprofile'
             render={() => <MyPosts posts={props.store.posts}></MyPosts>}/>

      <Route path='/inbox' render={() =>
        <Inbox dialogs={props.store.dialogs}
               messages={props.store.messages}
       />}/>
      {/*<Route path='/inbox' component={Inbox}/>*/}

      <Route path='/friends' component={Friends}/>
      <Route path='/feeds' component={Feeds}/>
      <Route path='/melodies' component={Melodies}/>
    </Styles.ContentWindow>
  )
}