import React from "react";
import {Preloader} from "../../../common/Preloader";
import {Styles} from "../../users/Users_Styles";
import {ProfileStatus} from "./profileStatus/ProfileStatus";
import {PropsType} from "../ProfileContainer";
import {
  UserFromServerType,
  UserType
} from "../../../redux/store-all-props-types";

type ProfileInfoPropsType = {
  profile: UserFromServerType;
  status: string;
  updateStatus: (status: string) => void;
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <Styles.UserAvatarLarge src={props.profile.photos.large}/>

      <div>Full name: {props.profile.fullName}</div>
      <div>About: {props.profile.aboutMe}</div>
      <div>Github: {props.profile.contacts.github}</div>
      <div>Looking for a job: {props.profile.lookingForAJob}</div>
      <div>Description for a
        job: {props.profile.lookingForAJobDescription}</div>
      ---------------------------------

      <div>
        <ProfileStatus status={props.status}
                       updateStatus={props.updateStatus}
        />
      </div>
    </div>
  )
}