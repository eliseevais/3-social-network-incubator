import {
  ActionsType, AddPostActionType, NewPostType,
  UpdateNewPostTextActionType, UserType
} from "./store-all-props-types";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'It\'s my first post.', likesCount: 9},
    {id: 2, message: 'Hello! How are you doing?', likesCount: 15},
    {id: 3, message: 'Winter is coming to our city', likesCount: 3},
    {id: 4, message: 'Happy New Year!', likesCount: 7},
    {id: 5, message: 'The weather was -24 today.', likesCount: 10},
    {id: 6, message: 'I like it-incubator!', likesCount: 23}
  ],
  newPostText: 'Hello from store.tsx',
  profile: null,
  status: ''
}

export const profileReducer = (
  state = initialState, action: ActionsType) => {
  switch (action.type) {
    case ADD_POST:
      let newPost: NewPostType = {
        id: new Date().getTime(),
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.newPostText};
    case SET_USER_PROFILE:
      return {...state, profile: action.profile};
    case SET_STATUS:
      return {...state, status: action.status}
    default:
      return state
  }
}

export const addPostAC = (): AddPostActionType => ({type: ADD_POST});
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType => {
  return {type: UPDATE_NEW_POST_TEXT, newPostText: text}
};
const setUserProfileAC = (profile: UserType) => ({
  type: SET_USER_PROFILE,
  profile
});
const setStatusAC = (status: string) => ({
  type: SET_STATUS,
  status
})
export const getUserProfileTC = (userId: number) => {
  return (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfileAC(response.data))
      })
  }
};
export const getUserStatusTC = (userId: number) => {
  return (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
      .then(response => {
        dispatch(setStatusAC(response.data))
      })
  }
};
export const updateStatusTC = (status: string) => {
  return (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setStatusAC(status))
        }
      })
  }
}