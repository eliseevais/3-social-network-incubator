import React from "react";
import {Styles} from "./Main_Styles";
import {MyPosts} from "./myPosts/MyPosts";
import {Inbox} from "../inbox/Inbox";

export function Main() {
  return (
    <Styles.Main>
      {/*<MyPosts/>*/}
      <Inbox/>
    </Styles.Main>
  )
}