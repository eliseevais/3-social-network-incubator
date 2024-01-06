import React from 'react';
import {Post} from "./post/Post";
import {Styles} from "./MyPosts_Styles";
import {ProfileInfo} from "../profileInfo/ProfileInfo";

type MyPostPropsType = {

};
type PostPropsType = {
  id: number;
  message: string;
  likesCount: number
};
type PostDataPropsType = Array<PostPropsType>;

export const MyPosts = (props: MyPostPropsType) => {
  const posts: PostDataPropsType = [
    {id: 1, message: 'It\'s my first post.', likesCount: 9},
    {id: 2, message: 'Hello! How are you doing?', likesCount: 15},
    {id: 3, message: 'Winter is coming to our city', likesCount: 3},
    {id: 4, message: 'Happy New Year!', likesCount: 7},
    {id: 5, message: 'The weather was -24 today.', likesCount: 10},
    {id: 6, message: 'I like it-incubator!', likesCount: 23}
  ];
  let postsElements = posts
    .map(post => <Post message={post.message} likesCount={post.likesCount}/>)
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
