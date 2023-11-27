import React from 'react';
import {Post} from "./post/Post";
import {Styles} from "./MyPosts_Styles";

export const MyPosts = () => {
  return (
    <div>
      <Styles.NewPostWrapper>
        <Styles.NewPostTextarea/>
        <Styles.AddPostButton>Add post</Styles.AddPostButton>
      </Styles.NewPostWrapper>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
};
