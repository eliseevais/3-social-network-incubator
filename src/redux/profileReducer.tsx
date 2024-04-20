import {
  ActionsPropsType, AddPostActionType, NewPostPropsType,
  UpdateNewPostTextActionType, UserPropsType
} from "./storeAllPropsType";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
  profile: null
}

export const profileReducer = (
  state = initialState, action: ActionsPropsType) => {
  switch (action.type) {
    case ADD_POST:
      let newPost: NewPostPropsType = {
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
      return {...state, newPostText: action.newPostText}
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    default:
      return state
  }
}

export const addPostAC = (): AddPostActionType => ({type: ADD_POST});
export const updateNewPostTextAC = (text: string): UpdateNewPostTextActionType => {
  return {type: UPDATE_NEW_POST_TEXT, newPostText: text}
};
export const setUserProfile = (profile: UserPropsType) => ({
  type: SET_USER_PROFILE,
  profile
})