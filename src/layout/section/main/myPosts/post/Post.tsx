import React from 'react';
import bird from '../../../../../accets/img/bird.jpg';
import {Styles} from "./Post_Styles";

export const Post = () => {
  return (
    <Styles.Post>
      <Styles.Avatar src={bird} alt='avatar'/>
      <Styles.PostTextAndLikesCounterWrapper>
        <span>Post</span>
        <span>like</span>
      </Styles.PostTextAndLikesCounterWrapper>
    </Styles.Post>
  );
};