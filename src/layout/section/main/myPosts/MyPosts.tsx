import React from 'react';
import {Post} from "./post/Post";
import {Styles} from "./MyPosts_Styles";
import {ProfileInfo} from "../profileInfo/ProfileInfo";

export type PostPropsType = {
  id: number;
  message: string;
  likesCount: number
};
type PostDataPropsType = {
  posts: Array<PostPropsType>;
  addPost: (text: string) => void
};

export const MyPosts = (props: PostDataPropsType) => {
  console.log('props from MyPosts', props)

  let postsElements = props.posts.map((post => <Post key={post.id}
                                                     message={post.message}
                                                     likesCount={post.likesCount}/>));
  let newPostElement = React.createRef<HTMLTextAreaElement>();
  let onClickAddPostHandler = () => {
    let text = newPostElement.current?.value;
    if (text) {
      props.addPost(text)
    }
  };

  return (
    <div>
      <ProfileInfo/>
      <Styles.NewPostWrapper>
        <Styles.NewPostTextarea ref={newPostElement}/>
        <Styles.AddPostButton onClick={onClickAddPostHandler}>Add
          post</Styles.AddPostButton>
      </Styles.NewPostWrapper>
      {postsElements}
    </div>
  );
};
