import {
  addPostAC,
  updateNewPostTextAC
} from "../../../redux/profile-reducer";
import {ActionsType} from "../../../redux/storeAllPropsType";
import {AppStateType} from "../../../redux/reduxStore";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
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
