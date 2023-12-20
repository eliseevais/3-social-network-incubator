import React from "react";
import {Styles} from "./ContentWindow_Styles";
import {MyPosts} from "./myPosts/MyPosts";
import {Inbox} from "../inbox/Inbox";
import {Route} from "react-router-dom";
import {Friends} from "../friends/Friends";
import {Feeds} from "../feeds/Feeds";
import {Melodies} from "../melodies/Melodies";

export function ContentWindow() {
  return (
    <Styles.ContentWindow>
      <Route path='/myprofile' component={MyPosts}/>
      {/*<Route exact path='/inbox' component={Inbox}/> */}
      <Route path='/inbox' component={Inbox}/>
      <Route path='/friends' component={Friends}/>
      <Route path='/feeds' component={Feeds}/>
      <Route path='/melodies' component={Melodies}/>
    </Styles.ContentWindow>
  )
}