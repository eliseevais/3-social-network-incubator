import React, {ReactNode} from 'react';
import {Post} from "./post/Post";
import {Styles} from "./MyPosts_Styles";
import {ProfileInfo} from "../profileInfo/ProfileInfo";

export type PostPropsType = {
  id: number;
  message: string;
  likesCount: number
};
type PostDataPropsType = Array<PostPropsType>;

export const MyPosts: React.FC<PostDataPropsType> = (props) => {
  console.log('props from MyPosts', props)

  // let postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

  return (
    <div>
      <ProfileInfo/>
      <Styles.NewPostWrapper>
        <Styles.NewPostTextarea/>
        <Styles.AddPostButton>Add post</Styles.AddPostButton>
      </Styles.NewPostWrapper>
      {/*{postsElements}*/}
    </div>
  );
};
