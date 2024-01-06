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
    posts: Array<PostPropsType>;
    dialogs: Array<DialogItemPropsType>;
    messages: Array<MessagePropsType>
};

export const ContentWindow:React.FC<ContentWindowPropsType> = (props) => {
  console.log('props from contentWindow', props)
  return (
    <Styles.ContentWindow>
      {/*<Route path='/myprofile' component={MyPosts}/>*/}
      <Route path='/myprofile' render={() => <MyPosts posts={props.posts}></MyPosts>}/>

      {/*<Route exact path='/inbox' component={Inbox}/> */}
      <Route path='/inbox' component={Inbox}/>
      <Route path='/friends' component={Friends}/>
      <Route path='/feeds' component={Feeds}/>
      <Route path='/melodies' component={Melodies}/>
    </Styles.ContentWindow>
  )
}