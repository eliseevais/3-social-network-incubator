import React from "react";
import {Preloader} from "../../../common/Preloader";
import {Styles} from "../../users/Users_Styles";

export const ProfileInfo = (props: any) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <Styles.UserAvatarLarge src={props.profile.photos.large}/>

      <div>Full name: {props.profile.fullName}</div>
      <div>About: {props.profile.aboutMe}</div>
      <div>Github: {props.profile.github}</div>
      <div>Looking for a job: {props.profile.lookingForAJob}</div>
      <div>Description for a job: {props.profile.lookingForAJobDescription}</div>
      ---------------------------------

      <div>my profile photo + description</div>
    </div>
  )
}