import {
  addPostAC,
  updateNewPostTextAC
} from "../../../../redux/myPostsPageReducer";
import {
  ActionsPropsType, StatePropsType
} from "../../../../redux/storeAllPropsType";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state: StatePropsType) => {
  return {
    posts: state.myPostsPage.posts,
    newPostText: state.myPostsPage.newPostText
  }
};

const mapDispatchToProps = (dispatch: (action: ActionsPropsType) => void) => {
  return {
    updateNewPostText: (text: string) => {
      dispatch(updateNewPostTextAC(text))
    },
    addPost: () => {
      dispatch(addPostAC())
    }
  }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
