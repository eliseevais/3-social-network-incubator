import React from "react";
import {Styles} from "./Main_Styles";
import {MyPosts} from "./myPosts/MyPosts";

export function Main() {
  return (
    <Styles.Main>
      <div>ava + description</div>
      <MyPosts/>
    </Styles.Main>
  )
}