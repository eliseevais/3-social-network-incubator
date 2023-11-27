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
      <Post message='Hello! How are you doing?' likesCount={9}/>
      <Post message={`It's my first post.`} likesCount={15}/>
      <Post message={`Winter is coming to our city.`} likesCount={3}/>
      <Post message={`The weather was -4 today.`} likesCount={7}/>
      <Post message={`Do you like skiing?`} likesCount={10}/>
      <Post message={`I like it-incubator!`} likesCount={23}/>
    </div>
  );
};
