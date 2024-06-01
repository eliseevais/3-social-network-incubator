import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";
import React from "react";
import {UserFromServerType} from "../../redux/store-all-props-types";

type ProfilePropsType = {
  profile: UserFromServerType;
  status: string;
  updateStatus: (status: string) => void;
}
export const Profile = (props: ProfilePropsType) => {
  return (
    <>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}
      />
      <MyPostsContainer/>
    </>
  )
}