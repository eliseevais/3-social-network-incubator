import React from 'react';
import {Post} from "./post/Post";
import {Styles} from "./MyPosts_Styles";
import {ProfileInfo} from "../profileInfo/ProfileInfo";

export type PostPropsType = {
  id: number;
  message: string;
  likesCount: number
};
type PostDataPropsType =  {
  posts: Array<PostPropsType>
};

export const MyPosts = (props: PostDataPropsType) => {
  console.log('props from MyPosts', props)

  let postsElements = props.posts.map((post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>))

  return (
    <div>
      <ProfileInfo/>
      <Styles.NewPostWrapper>
        <Styles.NewPostTextarea/>
        <Styles.AddPostButton>Add post</Styles.AddPostButton>
      </Styles.NewPostWrapper>
      {postsElements}
    </div>
  );
};
