import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

export const Profile = (props: any) => {
  return (
    <>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </>
  )
}