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
import {StoreContext} from "../../../../redux/storeContext";

type PostDataPropsType = MyPostsPagePropsType & {
  dispatch: (action: ActionsPropsType) => void
};

// export const MyPostsContainer = (props: PostDataPropsType) => {
export const MyPostsContainer = () => {


  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let onClickAddPostHandler = () => {
            let action = addPostAC();
            store.dispatch(action)
          };
          let onChangeNewPostTextHandler = (text: string) => {
            let action = updateNewPostTextAC(text);
            store.dispatch(action)
          }
          return (
            <MyPosts updateNewPostText={onChangeNewPostTextHandler}
                     addPost={onClickAddPostHandler}
                     posts={store.getState().myPostsPage.posts}
                     newPostText={store.getState().myPostsPage.newPostText}
            />)
        }
      }
    </StoreContext.Consumer>
  );
};
