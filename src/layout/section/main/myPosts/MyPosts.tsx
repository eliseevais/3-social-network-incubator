import React from 'react';
import {Post} from "./post/Post";
import {Styles} from "./MyPosts_Styles";
import {ProfileInfo} from "../profileInfo/ProfileInfo";
import {
  addPostAC,
  updateNewPostTextAC
} from "../../../../redux/state";

export type PostPropsType = {
  id: number;
  message: string;
  likesCount: number
};
type actionPropsType = any;

type PostDataPropsType = {
  posts: Array<PostPropsType>;
  newPostText: string;
  dispatch: (action: actionPropsType) => void
};

export const MyPosts = (props: PostDataPropsType) => {
  let postsElements = props.posts.map((post => <Post key={post.id}
                                                     message={post.message}
                                                     likesCount={post.likesCount}/>));
  let newPostElement = React.createRef<HTMLTextAreaElement>();
  let onClickAddPostHandler = () => {
    props.dispatch(addPostAC())
  };
  let onChangeNewPostTextHandler = () => {
    let text = newPostElement.current?.value;
    if (text) {
      props.dispatch(updateNewPostTextAC(text))
    }
  }

  return (
    <div>
      <ProfileInfo/>
      <Styles.NewPostWrapper>
        <Styles.NewPostTextarea ref={newPostElement}
                                value={props.newPostText}
                                onChange={onChangeNewPostTextHandler}
        />
        <Styles.AddPostButton onClick={onClickAddPostHandler}>Add
          post</Styles.AddPostButton>
      </Styles.NewPostWrapper>
      {postsElements}
    </div>
  );
};
