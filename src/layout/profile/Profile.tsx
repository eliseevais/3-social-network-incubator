import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import React from "react";

export const Profile = (props: any) => {
  return (
    <>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </>
  )
}