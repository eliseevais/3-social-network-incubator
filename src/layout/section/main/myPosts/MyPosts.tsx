import React from 'react';
import {Post} from "./post/Post";
import {ProfileInfo} from "../profileInfo/ProfileInfo";
import {Styles} from "./MyPosts_Styles";
import {MyPostsPagePropsType} from "../../../../redux/storeAllPropsType";


type PostDataPropsType = {
  myPostsPage: MyPostsPagePropsType
  updateNewPostText: (text: string) => void;
  addPost: () => void
};

// export const MyPosts = (props: PostDataPropsType) => {
export const MyPosts = (props: PostDataPropsType) => {

  let state = props.myPostsPage;

  let postsElements = state.posts.map((post => <Post key={post.id}
                                                     message={post.message}
                                                     likesCount={post.likesCount}/>));
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let onClickAddPostHandler = () => {
    props.addPost()
  };
  let onChangeNewPostTextHandler = () => {
    let text = newPostElement.current?.value;
    if (text) {
      props.updateNewPostText(text)
    }
  }

  return (
    <div>
      <ProfileInfo/>
      <Styles.NewPostWrapper>
        <Styles.NewPostTextarea ref={newPostElement}
                                value={state.newPostText}
                                onChange={onChangeNewPostTextHandler}
        />
        <Styles.AddPostButton onClick={onClickAddPostHandler}>
          Add post
        </Styles.AddPostButton>
      </Styles.NewPostWrapper>
      {postsElements}
    </div>
  );
};
