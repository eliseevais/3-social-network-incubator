import React from 'react';
import {Post} from "./post/Post";
import {
  addPostAC,
  updateNewPostTextAC
} from "../../../../redux/myPostsPageReducer";
import {
  ActionsPropsType,
  MyPostsPagePropsType
} from "../../../../redux/storeAllPropsType";
import {MyPosts} from "./MyPosts";

type PostDataPropsType = MyPostsPagePropsType & {
  dispatch: (action: ActionsPropsType) => void
};

export const MyPostsContainer = (props: PostDataPropsType) => {
   let onClickAddPostHandler = () => {
    let action = addPostAC();
    props.dispatch(action)
  };
  let onChangeNewPostTextHandler = (text: string) => {
    let action = updateNewPostTextAC(text);
    props.dispatch(action)
  }

  return (
    <MyPosts updateNewPostText={onChangeNewPostTextHandler}
             addPost={onClickAddPostHandler}
             posts={props.posts}
             newPostText={props.newPostText}
    />
  );
};
