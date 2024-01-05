import React from 'react';
import {Post} from "./post/Post";
import {Styles} from "./MyPosts_Styles";
import {ProfileInfo} from "../profileInfo/ProfileInfo";

type PostPropsType = {
  id: number;
  message: string;
  likesCount: number
};
type PostDataPropsType = {
  [index: number]: PostPropsType
};

export const MyPosts = () => {
  const postsData: PostDataPropsType = [
    {id: 1, message: 'It\'s my first post.', likesCount: 9 },
    {id: 2, message: 'Hello! How are you doing?', likesCount: 15 },
    {id: 3, message: 'Winter is coming to our city', likesCount: 3 },
    {id: 4, message: 'Happy New Year!', likesCount: 7 },
    {id: 5, message: 'The weather was -24 today.', likesCount: 10 },
    {id: 6, message: 'I like it-incubator!', likesCount: 23 }
  ]
  return (
    <div>
      <ProfileInfo/>
      <Styles.NewPostWrapper>
        <Styles.NewPostTextarea/>
        <Styles.AddPostButton>Add post</Styles.AddPostButton>
      </Styles.NewPostWrapper>
      <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
      <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
      <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
      <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
      <Post message={postsData[4].message} likesCount={postsData[4].likesCount}/>
      <Post message={postsData[5].message} likesCount={postsData[5].likesCount}/>
    </div>
  );
};
