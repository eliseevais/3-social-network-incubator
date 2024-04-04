// Dialogs
import {AppStateType} from "./reduxStore";

export type DialogItemPropsType = {
  id: number;
  name: string;
  img: any
};
export type MessagePropsType = {
  id: number;
  message: string
};
export type InboxPagePropsType = {
  dialogs: Array<DialogItemPropsType>;
  messages: Array<MessagePropsType>;
  newMessageText: string
};

// Posts
export type PostPropsType = {
  id: number;
  message: string;
  likesCount: number
};
export type NewPostPropsType = {
  id: number;
  message: string;
  likesCount: 0
};
export type NextMessagePropsType = {
  id: number;
  message: string;
};
export type MyPostsPagePropsType = {
  posts: Array<PostPropsType>;
  newPostText: string
};

// Feeds
export type FeedPropsType = {
  id: number;
  text: string;
};
export type FeedsPagePropsType = {
  feeds: Array<FeedPropsType>
};

// Users
type LocationUserPropsType = {
  city: string,
  country: string
};
export type UserPropsType = {
  id: number,
  name: string,
  img?: any,
  photos?: any,
  followed: boolean,
  status: string,
  location: LocationUserPropsType
};
export type UsersPagePropsTypeFromApp = {
  users: Array<UserPropsType>
};

export type InitialStateUsersPagePropsType = {
  users: Array<UserPropsType>
  pageSize: number
  totalCount: number
  currentPage: number
};

// ActionTypes
export type AddPostActionType = {
  type: 'ADD-POST'
};
export type UpdateNewPostTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT';
  newPostText: string
};
export type UpdateNewMessageTextActionType = {
  type: 'UPDATE-NEW-MESSAGE-TEXT';
  newMessageText: string
};
export type SendMessageActionType = {
  type: 'SEND-MESSAGE'
};
export type FollowActionType = {
  userId: number;
  type: 'FOLLOW'
};
export type UnfollowActionType = {
  userId: number;
  type: 'UNFOLLOW'
};
type SetUsersActionType = {
  users: Array<UserPropsType>;
  type: 'SET_USERS'
};
type SetCurrentPageActionType = {
  type: 'SET_CURRENT_PAGE';
  currentPage: number
};
type setTotalUsersCountAC = {
  type: 'SET_TOTAL_USERS_COUNT';
  totalCount: number
}

export type ActionsPropsType =
  AddPostActionType
  | UpdateNewPostTextActionType
  | UpdateNewMessageTextActionType
  | SendMessageActionType
  | FollowActionType
  | UnfollowActionType
  | SetUsersActionType
  | SetCurrentPageActionType
  | setTotalUsersCountAC;

export type StorePropsType = {
  _state: AppStateType;
  _callSubscriber: (state: AppStateType) => void;

  getState: () => AppStateType;
  subscribe: (observer: (state: AppStateType) => void) => void

  dispatch: (action: ActionsPropsType) => void;
};